<template>
  <div>
    <BasicTable @register="registerTable">
      <!-- <template #toolbar>
        <a-button type="primary" @click="handleCreate"> 新增审批 </a-button>
      </template> -->
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'clarity:note-edit-line',
              onClick: handleEdit.bind(null, record),
            },
            {
              icon: 'clarity:info-standard-line',
              tooltip: '查看详情',
              onClick: handleFlowView.bind(null, record),
            },
          ]"
        />
      </template>
    </BasicTable>
    <ReviewDrawer @register="registerDrawer" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getReviewList, deleteReview } from '/@/api/admin/approval';

  import { useDrawer } from '/@/components/Drawer';
  import ReviewDrawer from './ReviewDrawer.vue';

  import { columns, searchFormSchema } from './review.data';

  import { useGo } from '/@/hooks/web/usePage';

  // import { unreadFlowStatus } from '/@/views/admin/approval/review/unreadFlowStatus';

  export default defineComponent({
    name: 'ReviewManagement',
    components: { BasicTable, ReviewDrawer, TableAction },
    setup() {
      const [registerDrawer, { openDrawer }] = useDrawer();
      const go = useGo();
      const [registerTable, { reload }] = useTable({
        title: '待我审批',
        api: getReviewList,
        columns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
        },
        useSearchForm: true,
        showTableSetting: true,
        bordered: true,
        showIndexColumn: false,
        actionColumn: {
          width: 80,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
          fixed: undefined,
        },
      });

      // const [, { reload: reloadStatus }] = unreadFlowStatus();
      // reloadStatus();

      function handleCreate() {
        openDrawer(true, {
          isUpdate: false,
        });
      }

      function handleEdit(record: Recordable) {
        openDrawer(true, {
          record,
          isUpdate: true,
        });
      }

      async function handleDelete(record: Recordable) {
        console.log(record);
        await deleteReview({
          id: record.id,
        });
        reload();
      }

      function handleSuccess() {
        reload();
      }

      async function handleFlowView(record: Recordable) {
        // globalThis.deptInfo = record;
        // await reloadStatus();
        go('/approval/review_detail/' + record.id);
      }

      return {
        registerTable,
        registerDrawer,
        handleCreate,
        handleEdit,
        handleDelete,
        handleSuccess,
        handleFlowView,
      };
    },
  });
</script>
