<template>
  <Card title="待审批" v-bind="$attrs">
    <template #extra>
      <a-button type="link" size="small" @click="handleView">更多</a-button>
    </template>
    <BasicTable @register="registerTable">
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'clarity:info-standard-line',
              tooltip: '查看详情',
              onClick: handleViewDetail.bind(null, record),
            },
          ]"
        />
      </template>
    </BasicTable>
  </Card>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { groupItems } from './data';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getReviewList } from '/@/api/admin/approval';
  import { columns } from '/@/views/admin/approval/review/review.data';
  import { Card } from 'ant-design-vue';
  import { useGo } from '/@/hooks/web/usePage';

  export default defineComponent({
    components: {
      Card,
      BasicTable,
      TableAction,
    },
    setup() {
      const go = useGo();
      const [registerTable] = useTable({
        api: getReviewList,
        rowKey: 'id',
        columns,
        formConfig: {
          labelWidth: 120,
          autoSubmitOnEnter: true,
        },
        actionColumn: {
          width: 50,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
        },
        pagination: true,
      });

      function handleView() {
        go('/approval/review');
      }

      function handleViewDetail(record: Recordable) {
        go('/approval/review_detail/' + record.id);
      }

      return {
        items: groupItems,
        handleView,
        handleViewDetail,
        registerTable,
      };
    },
  });
</script>
