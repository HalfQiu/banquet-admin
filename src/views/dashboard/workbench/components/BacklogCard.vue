<template>
  <Card title="待办事项" v-bind="$attrs">
    <!-- <template #extra>
      <a-button type="link" size="small" @click="handleView">更多</a-button>
    </template> -->
    <BasicTable @register="registerTable">
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'clarity:info-standard-line',
              tooltip: '查看详情',
              ifShow: record.type === '回访',
              onClick: handleCustomerDetail.bind(null, record),
            },
            {
              icon: 'clarity:note-edit-line',
              tooltip: '处理',
              onClick: handleEvent.bind(null, record),
            },
          ]"
        />
      </template>
    </BasicTable>
  </Card>
  <BacklogCommentModal @register="registerModal" @success="handleSuccess" />
  <BacklogAcceptModal @register="registerAcceptModal" @success="handleSuccess" />
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { groupItems } from './data';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  // import { getReviewList } from '/@/api/admin/approval';
  import { updateBackLogStatus, changeBacklogStatus } from '/@/api/admin/system';
  import { backlogColumns } from './data';
  import { Card } from 'ant-design-vue';
  // import { useGo } from '/@/hooks/web/usePage';

  import { useMessage } from '/@/hooks/web/useMessage';

  import { useGo } from '/@/hooks/web/usePage';

  import { useModal } from '/@/components/Modal';

  import BacklogCommentModal from './BacklogCommentModal.vue';

  import BacklogAcceptModal from './BacklogAcceptModal.vue';

  import { useBacklogCard } from './useBacklogCard';

  export default defineComponent({
    components: {
      Card,
      BasicTable,
      TableAction,
      BacklogCommentModal,
      BacklogAcceptModal,
    },
    setup() {
      // const go = useGo();
      const { createMessage } = useMessage();
      const go = useGo();
      // const cardData = reactive({});
      const [, { getBacklogs, reload: reloadBacklogCard }] = useBacklogCard();
      const [registerModal, { openModal }] = useModal();
      const [registerAcceptModal, { openModal: openAcceptModal }] = useModal();
      const [registerTable, { reload }] = useTable({
        api: getBacklogs,
        rowKey: 'id',
        columns: backlogColumns,
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
        // go('/approval/review');
        console.log('handleView');
      }

      function handleViewDetail(record: Recordable) {
        // go('/approval/review_detail/' + record.id);
        console.log(record);
      }

      async function handleFinish(record: Recordable) {
        await updateBackLogStatus({ id: record.id, status: '1' });
        createMessage.success('已标记为完成');
        reload();
      }

      function handleCustomerDetail(record: Recordable) {
        go('/dashboard/chat_record_detail/' + record.id);
      }

      async function handleEvent(record: Recordable) {
        if ('回访' === record.type) {
          openModal(true, {
            isUpdate: false,
            ...record,
          });
        } else if ('合同回款' === record.type) {
          openAcceptModal(true, {
            isUpdate: false,
            ...record,
          });
        } else if ('试妆' === record.type) {
          await changeBacklogStatus({ id: record.id });
          go('/dashboard/try_form_detail/' + record.tryOnMakeUpFormId);
        } else if ('执行beo单' === record.type) {
          await changeBacklogStatus({ id: record.id });
          go('/beo/order');
        }
        console.log(record);
      }

      function handleSuccess() {
        reload();
        reloadBacklogCard();
        // const tempData = getBacklogNum();
        // Object.assign(cardData, tempData);
        // go('/dashboard/workbench');
        // ref()
        // debugger;
        // ref(WorkbenchHeader)['countBacklogNum']();
      }

      return {
        items: groupItems,
        handleView,
        handleViewDetail,
        handleFinish,
        registerTable,
        handleEvent,
        registerModal,
        registerAcceptModal,
        handleSuccess,
        handleCustomerDetail,
        // cardData,
      };
    },
  });
</script>

<style>
  .ant-table-row-cell-ellipsis,
  .ant-table-row-cell-ellipsis .ant-table-column-title {
    overflow: initial;
    white-space: initial;
    text-overflow: ellipsis;
  }
</style>
