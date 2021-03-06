<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { updateFormSchema } from './ratio.data';
  import { saveOrUpdateRatio, updateRatioInfo } from '/@/api/admin/performance';
  import { useMessage } from '/@/hooks/web/useMessage';

  export default defineComponent({
    name: 'RatioModal',
    components: { BasicModal, BasicForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const idRef = ref('');
      const { createMessage } = useMessage();

      const [registerForm, { setFieldsValue, resetFields, validate }] = useForm({
        labelWidth: 100,
        schemas: updateFormSchema,
        showActionButtonGroup: false,
        actionColOptions: {
          span: 23,
        },
      });

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        resetFields();
        setModalProps({ confirmLoading: false });
        isUpdate.value = !!data?.isUpdate;

        if (unref(isUpdate)) {
          idRef.value = data.record.id;
          setFieldsValue({
            ...data.record,
          });
        }
        console.log('============');
        console.log(data);

        setFieldsValue({
          ...data,
        });
      });

      const getTitle = computed(() => (!unref(isUpdate) ? '新增/编辑系数' : '编辑系数'));

      async function handleSubmit() {
        try {
          const values = await validate();
          setModalProps({ confirmLoading: true });
          console.log(values);
          if (isUpdate.value) {
            await updateRatioInfo({
              ...values,
              id: idRef.value,
            });
            createMessage.success('编辑系数成功');
          } else {
            await saveOrUpdateRatio(values);
            createMessage.success('新增系数成功');
          }
          closeModal();
          emit('success', { isUpdate: unref(isUpdate), values: { ...values, id: idRef.value } });
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }

      return { registerModal, registerForm, getTitle, handleSubmit };
    },
  });
</script>
