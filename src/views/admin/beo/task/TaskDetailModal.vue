<template>
  <PageWrapper class="high-form" title="BEO任务详情" content=" 婚礼指令单" @back="goBack">
    <a-card title="基本信息" :bordered="true">
      <BasicForm @register="register" />
    </a-card>
    <a-card title="档期信息" :bordered="true">
      <BasicForm @register="registerSchedule" />
    </a-card>
    <a-card
      title="财务信息"
      :bordered="true"
      v-if="
        globalUserInfo.deptName === '管家部' ||
        globalUserInfo.deptName === '销售部' ||
        globalUserInfo.deptName === '财务部'
      "
    >
      <BasicForm @register="registerBeoFinance" />
    </a-card>
    <BasicTable @register="registerTimeTable" />
    <CollapseContainer title="管家部BEO内容" v-if="globalUserInfo.deptName === '管家部'">
      <BasicForm @register="registerTaskManager" />
    </CollapseContainer>
    <CollapseContainer title="厨师部BEO内容" v-if="globalUserInfo.deptName === '厨师部'">
      <BasicForm @register="registerTaskKitchen" />
    </CollapseContainer>
    <CollapseContainer title="服务部BEO内容" v-if="globalUserInfo.deptName === '服务部'">
      <BasicForm @register="registerTaskServe" />
    </CollapseContainer>
    <CollapseContainer title="工程部BEO内容" v-if="globalUserInfo.deptName === '工程部'">
      <BasicForm @register="registerTaskProject" />
    </CollapseContainer>
    <CollapseContainer title="综合部BEO内容" v-if="globalUserInfo.deptName === '综合部'">
      <BasicForm @register="registerTaskMutiple" />
    </CollapseContainer>
    <CollapseContainer title="采购部BEO内容" v-if="globalUserInfo.deptName === '采购部'">
      <BasicForm @register="registerTaskBuy" />
    </CollapseContainer>
    <CollapseContainer title="财务部BEO内容" v-if="globalUserInfo.deptName === '财务部'">
      <BasicForm @register="registerTaskFinance" />
    </CollapseContainer>
    <!-- <template #rightFooter>
      <a-button type="primary" @click="submitAll"> 提交 </a-button>
    </template> -->
  </PageWrapper>
</template>
<script lang="ts">
  import { BasicForm, useForm } from '/@/components/Form';
  import { defineComponent, ref, reactive } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import {
    orderFormSchema,
    roomScheduleFormSchema,
    foodsColumn,
    beoTaskFormSchema,
    beoFinanceFormSchema,
  } from './task.data';
  import { Card } from 'ant-design-vue';
  import { BasicTable, useTable } from '/@/components/Table';
  import { CollapseContainer } from '/@/components/Container/index';

  import { getAgreementInfo, getScheduleByAgreementId, getFoodsInfos } from '/@/api/admin/contract';

  import { getReceivablesInfo } from '/@/api/admin/finance';

  import { updateOrder, getBeoOrder, getBeoTask } from '/@/api/admin/beo';

  import { useGo } from '/@/hooks/web/usePage';
  import { useRoute } from 'vue-router';

  import { useMessage } from '/@/hooks/web/useMessage';

  import { useUserStore } from '/@/store/modules/user';

  export default defineComponent({
    name: 'BeoOrderEditModal',
    components: { BasicForm, PageWrapper, [Card.name]: Card, BasicTable, CollapseContainer },
    setup() {
      const { createMessage } = useMessage();
      const userStore = useUserStore();
      // const globalUserInfo = userStore.getUserInfo;
      console.log(userStore.getUserInfo);
      const [register, { setFieldsValue, getFieldsValue: getBasciValues }] = useForm({
        baseColProps: {
          span: 6,
        },
        schemas: orderFormSchema,
        showActionButtonGroup: false,
      });

      const globalUserInfo: Recordable = reactive({});

      Object.assign(globalUserInfo, userStore.getUserInfo);

      const [
        registerSchedule,
        { setFieldsValue: setFieldsValueSchedule, getFieldsValue: getScheduleValues },
      ] = useForm({
        baseColProps: {
          span: 6,
        },
        schemas: roomScheduleFormSchema,
        showActionButtonGroup: false,
      });

      const [
        registerBeoFinance,
        { setFieldsValue: setFieldsFinanceValue, getFieldsValue: getFieldFinanceValue },
      ] = useForm({
        baseColProps: {
          span: 6,
        },
        schemas: beoFinanceFormSchema,
        showActionButtonGroup: false,
      });

      const [registerTimeTable, { setTableData }] = useTable({
        title: '菜品内容',
        columns: foodsColumn,
        pagination: false,
        showIndexColumn: false,
        scroll: { y: 300 },
      });

      // 管家部
      const [registerTaskManager, { getFieldsValue: getManagerValues }] = useForm({
        labelWidth: 120,
        baseColProps: {
          span: 10,
        },
        schemas: beoTaskFormSchema,
        showActionButtonGroup: false,
      });

      // 厨师部
      const [registerTaskKitchen, { getFieldsValue: getKitchenValues }] = useForm({
        labelWidth: 120,
        baseColProps: {
          span: 10,
        },
        schemas: beoTaskFormSchema,
        showActionButtonGroup: false,
      });

      // 服务部
      const [registerTaskServe, { getFieldsValue: getServeValues }] = useForm({
        labelWidth: 120,
        baseColProps: {
          span: 10,
        },
        schemas: beoTaskFormSchema,
        showActionButtonGroup: false,
      });

      // 工程部
      const [registerTaskProject, { getFieldsValue: getProjectValues }] = useForm({
        labelWidth: 120,
        baseColProps: {
          span: 10,
        },
        schemas: beoTaskFormSchema,
        showActionButtonGroup: false,
      });

      // 综合部
      const [registerTaskMutiple, { getFieldsValue: getMutipleValues }] = useForm({
        labelWidth: 120,
        baseColProps: {
          span: 10,
        },
        schemas: beoTaskFormSchema,
        showActionButtonGroup: false,
      });

      // 采购部
      const [registerTaskBuy, { getFieldsValue: getBuyValues }] = useForm({
        labelWidth: 120,
        baseColProps: {
          span: 10,
        },
        schemas: beoTaskFormSchema,
        showActionButtonGroup: false,
      });

      // 财务部
      const [registerTaskFinance, { getFieldsValue: getFinanceValues }] = useForm({
        labelWidth: 120,
        baseColProps: {
          span: 10,
        },
        schemas: beoTaskFormSchema,
        showActionButtonGroup: false,
      });

      const go = useGo();
      const route = useRoute();
      const agreementId = ref(route.params?.id);
      let res, foods, foodsId;
      let newAgreementId;
      let beoId;

      async function submitAll() {
        // debugger;
        try {
          let submitValues = {},
            tasks = [];
          Object.assign(submitValues, getBasciValues());
          Object.assign(submitValues, getScheduleValues());
          Object.assign(submitValues, getFieldFinanceValue());
          let temp = {};
          // Object.defineProperty(temp, 'deptName', '管家部');
          temp.deptName = '管家部';
          Object.assign(temp, getManagerValues());
          tasks.push(temp);
          temp = {};
          temp.deptName = '厨政部';
          Object.assign(temp, getKitchenValues());
          tasks.push(temp);
          temp = {};
          temp.deptName = '服务部';
          Object.assign(temp, getServeValues());
          tasks.push(temp);
          temp = {};
          temp.deptName = '工程部';
          Object.assign(temp, getProjectValues());
          tasks.push(temp);
          temp = {};
          temp.deptName = '财务部';
          Object.assign(temp, getFinanceValues());
          tasks.push(temp);
          temp = {};
          temp.deptName = '综合部';
          Object.assign(temp, getMutipleValues());
          tasks.push(temp);
          temp = {};
          temp.deptName = '采购部';
          Object.assign(temp, getBuyValues());
          tasks.push(temp);
          temp = {};
          // Object.defineProperty(submitValues, 'tasks', tasks);
          submitValues.tasks = tasks;
          // submitValues.agreementId = submitValues.id;
          submitValues.id = agreementId.value;
          submitValues.agreementId = newAgreementId;

          console.log(submitValues);
          // submitValues.beoType = '执行beo单';
          await updateOrder(submitValues);
          createMessage.success('新建成功!');
          go('/beo/task');
        } catch (error) {
          console.error(error);
        }
      }

      function goBack() {
        go('/beo/task');
      }

      async function handleData(id: string) {
        res = await getBeoTask({ id: id });

        beoId = res.beoOrderId;
        res = await getBeoOrder({ id: beoId });
        setFieldsValue({
          ...res,
        });

        newAgreementId = res.agreementId;
        // debugger;
        res = await getAgreementInfo({ id: newAgreementId });
        // setFieldsValue({
        //   ...res,
        // });

        foodsId = res.foodsId;

        res = await getScheduleByAgreementId({ id: newAgreementId });

        setFieldsValueSchedule({
          ...res,
        });

        foods = await getFoodsInfos({ parentId: foodsId });
        setTableData(foods);

        res = await getReceivablesInfo({ id: newAgreementId });
        setFieldsFinanceValue({
          ...res,
        });
      }

      handleData(agreementId.value);

      return {
        register,
        registerSchedule,
        registerTimeTable,
        submitAll,
        goBack,
        handleData,
        registerTaskManager,
        registerTaskKitchen,
        registerTaskServe,
        registerTaskProject,
        registerTaskMutiple,
        registerTaskBuy,
        registerTaskFinance,
        registerBeoFinance,
        globalUserInfo,
      };
    },
  });
</script>
<style lang="less" scoped>
  .high-form {
    padding-bottom: 48px;
  }
</style>
