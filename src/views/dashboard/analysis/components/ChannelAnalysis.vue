<template>
  <Card title="获客渠道各渠道获客数量统计" :loading="loading">
    查询日期：<a-month-picker v-model:value="dateValue" placeholder="Select Month" />
    <a-button class="ml-2">搜索</a-button>
    <div ref="chartRef" class="flex items-center justify-center my-4" :style="{ width, height }">
      <a-empty v-if="!data.list" />
    </div>
  </Card>
</template>
<script lang="ts">
  import { defineComponent, Ref, ref, unref, watch } from 'vue';

  import { Card } from 'ant-design-vue';
  import { useECharts } from '/@/hooks/web/useECharts';
  import { getChannelAnalysis } from '/@/api/admin/analysis';
  import { Moment } from 'moment';

  export default defineComponent({
    components: { Card },
    props: {
      // loading: Boolean,
      width: {
        type: String as PropType<string>,
        default: '100%',
      },
      height: {
        type: String as PropType<string>,
        default: '300px',
      },
    },
    setup() {
      const chartRef = ref<HTMLDivElement | null>(null);
      const { setOptions } = useECharts(chartRef as Ref<HTMLDivElement>);
      const data = ref<any>({});
      const dateValue = ref<Moment>();
      const loading = ref(false);

      async function getData() {
        loading.value = true;
        data.value = await getChannelAnalysis({ startTime: dateValue.value });
        loading.value = false;
      }

      getData();

      watch(
        () => dateValue.value,
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
            },

            series: [
              {
                name: '获客渠道',
                type: 'pie',
                radius: '80%',
                center: ['50%', '50%'],
                color: ['#5ab1ef', '#b6a2de', '#67e0e3', '#2ec7c9'],
                data: [
                  ...unref(data).list,
                  // { value: 500, name: '电子产品' },
                  // { value: 310, name: '服装' },
                  // { value: 274, name: '化妆品' },
                  // { value: 400, name: '家居' },
                ].sort(function (a, b) {
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
                  formatter: '{b}:{c} {d}', //饼图上展示的数据格式
                  color: '#666',
                  fontSize: 14,
                },
              },
            ],
          });
        },
        { immediate: true }
      );
      return { chartRef, data, dateValue };
    },
  });
</script>
