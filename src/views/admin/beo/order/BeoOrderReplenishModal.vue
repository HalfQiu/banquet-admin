<template>
  <PageWrapper class="high-form" title="BEO下单" content=" 婚礼指令单" @back="goBack">
    <a-card title="基本信息" :bordered="true">
      <BasicForm @register="register" />
    </a-card>
    <a-divider />
    <a-card title="档期信息" :bordered="true">
      <BasicForm @register="registerSchedule" />
    </a-card>
    <a-divider />
    <BasicTable @register="registerTimeTable" />
    <a-divider />
    <CollapseContainer title="管家部BEO内容">
      <BasicForm @register="registerTaskManager" />
    </CollapseContainer>
    <CollapseContainer title="厨师部BEO内容">
      <BasicForm @register="registerTaskKitchen" />
    </CollapseContainer>
    <CollapseContainer title="服务部BEO内容">
      <BasicForm @register="registerTaskServe" />
    </CollapseContainer>
    <CollapseContainer title="工程部BEO内容">
      <BasicForm @register="registerTaskProject" />
    </CollapseContainer>
    <CollapseContainer title="综合部BEO内容">
      <BasicForm @register="registerTaskMutiple" />
    </CollapseContainer>
    <CollapseContainer title="采购部BEO内容">
      <BasicForm @register="registerTaskBuy" />
    </CollapseContainer>
    <CollapseContainer title="财务部BEO内容">
      <BasicForm @register="registerTaskFinance" />
    </CollapseContainer>
    <template #rightFooter>
      <a-button type="primary" @click="submitAll"> 提交 </a-button>
    </template>
  </PageWrapper>
</template>
<script lang="ts">
  import { BasicForm, useForm } from '/@/components/Form';
  import { defineComponent, ref } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import {
    orderFormSchema,
    roomScheduleFormSchema,
    foodsColumn,
    beoTaskFormSchema,
  } from './order.data';
  import { Card } from 'ant-design-vue';
  import { BasicTable, useTable } from '/@/components/Table';
  import { CollapseContainer } from '/@/components/Container/index';

  import { getScheduleByAgreementId, getFoodsInfos, getAgreementInfo } from '/@/api/admin/contract';
  import { getOrder, createManagerFlow } from '/@/api/admin/beo';

  import { useGo } from '/@/hooks/web/usePage';
  import { useRoute } from 'vue-router';

  import { useMessage } from '/@/hooks/web/useMessage';

  export default defineComponent({
    name: 'BeoOrderModal',
    components: { BasicForm, PageWrapper, [Card.name]: Card, BasicTable, CollapseContainer },
    setup() {
      const { createMessage } = useMessage();

      const [register, { setFieldsValue, getFieldsValue: getBasciValues }] = useForm({
        baseColProps: {
          span: 6,
        },
        schemas: orderFormSchema,
        showActionButtonGroup: false,
      });

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

      const [registerTimeTable, { setTableData }] = useTable({
        title: '菜品内容',
        columns: foodsColumn,
        pagination: false,
        showIndexColumn: false,
        scroll: { y: 300 },
      });

      // 管家部
      const [
        registerTaskManager,
        { setFieldsValue: setManagerValues, getFieldsValue: getManagerValues },
      ] = useForm({
        labelWidth: 120,
        baseColProps: {
          span: 10,
        },
        schemas: beoTaskFormSchema,
        showActionButtonGroup: false,
      });

      // 厨师部
      const [
        registerTaskKitchen,
        { setFieldsValue: setKitchenValues, getFieldsValue: getKitchenValues },
      ] = useForm({
        labelWidth: 120,
        baseColProps: {
          span: 10,
        },
        schemas: beoTaskFormSchema,
        showActionButtonGroup: false,
      });

      // 服务部
      const [
        registerTaskServe,
        { setFieldsValue: setServeValues, getFieldsValue: getServeValues },
      ] = useForm({
        labelWidth: 120,
        baseColProps: {
          span: 10,
        },
        schemas: beoTaskFormSchema,
        showActionButtonGroup: false,
      });

      // 工程部
      const [
        registerTaskProject,
        { setFieldsValue: setProjectValues, getFieldsValue: getProjectValues },
      ] = useForm({
        labelWidth: 120,
        baseColProps: {
          span: 10,
        },
        schemas: beoTaskFormSchema,
        showActionButtonGroup: false,
      });

      // 综合部
      const [
        registerTaskMutiple,
        { setFieldsValue: setMutipleValues, getFieldsValue: getMutipleValues },
      ] = useForm({
        labelWidth: 120,
        baseColProps: {
          span: 10,
        },
        schemas: beoTaskFormSchema,
        showActionButtonGroup: false,
      });

      // 采购部
      const [registerTaskBuy, { setFieldsValue: setBuyValues, getFieldsValue: getBuyValues }] =
        useForm({
          labelWidth: 120,
          baseColProps: {
            span: 10,
          },
          schemas: beoTaskFormSchema,
          showActionButtonGroup: false,
        });

      // 财务部
      const [
        registerTaskFinance,
        { setFieldsValue: setFiananceValues, getFieldsValue: getFinanceValues },
      ] = useForm({
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

      async function submitAll() {
        debugger;
        try {
          let submitValues = {},
            tasks = [];
          Object.assign(submitValues, getBasciValues());
          Object.assign(submitValues, getScheduleValues());
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
          // delete submitValues.id;
          submitValues.id = agreementId.value;
          console.log(submitValues);
          await createManagerFlow(submitValues);
          createMessage.success('补充成功!');
          go('/beo/order');
        } catch (error) {
          console.error(error);
        }
      }

      function goBack() {
        go('/beo/order');
      }

      async function handleData(id: string) {
        res = await getOrder({ id: id });

        let tasks = res.taskInfoList;
        if (tasks) {
          let temp;
          for (let i = 0, len = tasks.length; i < len; i++) {
            temp = tasks[i];
            if (temp.deptName && temp.deptName === '采购部') {
              setBuyValues({
                ...temp,
              });
            } else if (temp.deptName && temp.deptName === '综合部') {
              setMutipleValues({
                ...temp,
              });
            } else if (temp.deptName && temp.deptName === '服务部') {
              setServeValues({
                ...temp,
              });
            } else if (temp.deptName && temp.deptName === '厨政部') {
              setKitchenValues({
                ...temp,
              });
            } else if (temp.deptName && temp.deptName === '工程部') {
              setProjectValues({
                ...temp,
              });
            } else if (temp.deptName && temp.deptName === '管家部') {
              setManagerValues({
                ...temp,
              });
            } else if (temp.deptName && temp.deptName === '财务部') {
              setFiananceValues({
                ...temp,
              });
            }
          }
        }

        let agreementInfo = await getAgreementInfo({ id: res.agreementId });

        setFieldsValue({
          ...agreementInfo,
        });

        foodsId = agreementInfo.foodsId;

        res = await getScheduleByAgreementId({ id: agreementInfo.id });

        setFieldsValueSchedule({
          ...res,
        });

        foods = await getFoodsInfos({ parentId: foodsId });
        setTableData(foods);
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
      };
    },
  });
</script>
<style lang="less" scoped>
  .high-form {
    padding-bottom: 48px;
  }
</style>
