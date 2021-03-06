import { getRoleList } from '/@/api/admin/system';
import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { DescItem } from '/@/components/Description/index';

export const columns: BasicColumn[] = [
  {
    title: '用户名',
    dataIndex: 'userName',
    width: 120,
  },
  {
    title: '昵称',
    dataIndex: 'realName',
    width: 120,
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    width: 120,
  },
  {
    title: '手机号',
    dataIndex: 'mobile',
    width: 120,
  },
  // {
  //   title: '创建时间',
  //   dataIndex: 'createTime',
  //   width: 180,
  // },
  {
    title: '角色',
    dataIndex: 'roleName',
    width: 200,
  },
  {
    title: '部门',
    dataIndex: 'deptName',
    width: 200,
  },
  {
    title: '备注',
    dataIndex: 'remark',
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'userName',
    label: '用户名',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'realName',
    label: '昵称',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const accountFormSchema: FormSchema[] = [
  {
    field: 'userName',
    label: '用户名',
    component: 'Input',
    // helpMessage: ['本字段演示异步验证', '不能输入带有admin的用户名'],
    rules: [
      {
        required: true,
        message: '请输入用户名',
      },
      // {
      //   validator(_, value) {
      //     return new Promise((resolve, reject) => {
      //       isAccountExist(value)
      //         .then(() => resolve())
      //         .catch((err) => {
      //           reject(err.message || '验证失败');
      //         });
      //     });
      //   },
      // },
    ],
  },
  {
    field: 'pwd',
    label: '密码',
    component: 'InputPassword',
    required: true,
  },
  {
    label: '角色',
    field: 'roleId',
    component: 'ApiSelect',
    componentProps: {
      api: getRoleList,
      labelField: 'roleName',
      valueField: 'id',
      mode: 'multiple',
    },
    required: true,
  },
  {
    field: 'deptId',
    label: '所属部门',
    component: 'TreeSelect',
    componentProps: {
      replaceFields: {
        title: 'deptName',
        key: 'id',
        value: 'id',
      },
      multiple: true,
      getPopupContainer: () => document.body,
    },
    required: true,
  },
  {
    field: 'realName',
    label: '昵称',
    component: 'Input',
    required: true,
  },

  {
    label: '邮箱',
    field: 'email',
    component: 'Input',
    required: false,
  },

  {
    label: '手机号',
    field: 'mobile',
    component: 'Input',
    required: false,
  },

  {
    label: '备注',
    field: 'remark',
    component: 'InputTextArea',
  },
];

export const accountDetailSchema: DescItem[] = [
  {
    label: '用户名',
    field: 'userName',
  },
  {
    label: '昵称',
    field: 'realName',
  },
  {
    label: '邮箱',
    field: 'email',
  },
  {
    label: '手机号',
    field: 'mobile',
  },
  {
    label: '角色',
    field: 'roleName',
  },
  {
    label: '部门',
    field: 'deptName',
  },
  {
    label: '备注',
    field: 'remark',
  },
];
