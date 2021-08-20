// import { isAccountExist } from '/@/api/demo/system';
// import { getTaskTypeList } from '/@/api/admin/beo';
import { getCustomerList } from '/@/api/admin/customer';
import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '客户名称',
    dataIndex: 'beoId',
    width: 120,
  },
  {
    title: '任务时间',
    dataIndex: 'chatTime',
    width: 120,
  },
  {
    title: '内容',
    dataIndex: 'content',
    width: 120,
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 180,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'beoName',
    label: '客户名称',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const taskFormSchema: FormSchema[] = [
  {
    field: 'beoId',
    label: '客户名称',
    component: 'ApiSelect',
    componentProps: {
      api: getCustomerList,
      labelField: 'beoName',
      valueField: 'id',
    },
    required: true,
  },
  {
    field: 'chatTime',
    label: '任务时间',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
      format: 'YYYY-MM-DD HH:mm:ss',
    },
    required: true,
  },

  {
    label: '内容',
    field: 'content',
    component: 'InputTextArea',
    required: true,
  },
];
