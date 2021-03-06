<template>
  <Card :title="title" :loading="loading">
    <template #extra v-if="showTag">
      <Tag :color="color">{{ '月' }}</Tag>
    </template>
    <!-- 查询日期：<a-range-picker v-model:value="dateValue" placeholder="请选择日期" /> -->
    <!-- <a-button class="ml-2">查询</a-button> -->
    <div ref="chartRef" class="flex items-center justify-center my-10" :style="{ width, height }">
      <a-empty v-if="!data.list" />
    </div>
  </Card>
</template>
<script lang="ts">
  import { defineComponent, Ref, ref, unref, watch } from 'vue';

  import { Card, Tag } from 'ant-design-vue';
  import { useECharts } from '/@/hooks/web/useECharts';
  import moment, { Moment } from 'moment';

  export default defineComponent({
    components: { Card, Tag },
    props: {
      color: {
        type: String as PropType<string>,
        default: '#019680',
      },
      title: {
        type: String as PropType<string>,
        default: '饼状图统计',
      },
      width: {
        type: String as PropType<string>,
        default: '100%',
      },
      height: {
        type: String as PropType<string>,
        default: '300px',
      },
      api: {
        type: Function as PropType<(any) => {}>,
        required: true,
      },
      seriesName: {
        type: String as PropType<string>,
      },
      dateValue: {
        type: Array as PropType<Moment[]>,
        default() {
          return [moment().startOf('month'), moment().endOf('month')];
        },
      },
      showTag: {
        type: Boolean as PropType<boolean>,
        default: true,
      },
    },
    setup(props: any) {
      const chartRef = ref<HTMLDivElement | null>(null);
      const { setOptions } = useECharts(chartRef as Ref<HTMLDivElement>);
      const data = ref<any>({});
      const loading = ref(true);

      async function getData() {
        // loading.value = true;
        const _data =
          (await props.api({
            startTime: props.dateValue[0],
            endTime: props.dateValue[1],
          })) || {};
        data.value = _data;
        loading.value = false;
      }

      getData();

      watch(
        () => props.dateValue,
        () => {
          getData();
        }
      );

      watch(
        () => data.value,
        () => {
          if (!unref(data).list) {
            return;
          }
          setOptions({
            tooltip: {
              trigger: 'item',
              formatter: `{b} {c} {d}%`,
            },

            series: [
              {
                name: props.seriesName,
                type: 'pie',
                radius: '80%',
                center: ['50%', '50%'],
                color: [
                  '#91cc75',
                  '#fac858',
                  '#ee6666',
                  '#73c0de',
                  '#3ba272',
                  '#fc8452',
                  '#9a60b4',
                  '#ea7ccc',
                ],
                data: [...unref(data).list].sort(function (a, b) {
                  return a.value - b.value;
                }),
                roseType: 'radius',
                animationType: 'scale',
                animationEasing: 'exponentialInOut',
                animationDelay: function () {
                  return Math.random() * 400;
                },
                label: {
                  show: true, //饼图上的数据是否展示true展示false不展示
                  position: 'outer', //饼图上的数据展示位置inner是展示在内部
                  formatter: '{b}:{c} {d}%', //饼图上展示的数据格式
                  color: '#666',
                  fontSize: 14,
                },
              },
            ],
          });
        },
        { immediate: true }
      );
      return { chartRef, data, loading };
    },
  });
</script>
