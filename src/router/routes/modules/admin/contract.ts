import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { RoleEnum } from '/@/enums/roleEnum';

const contract: AppRouteModule = {
  path: '/contract',
  name: 'ContractManagement',
  component: LAYOUT,
  redirect: '/contract/list',
  meta: {
    orderNo: 400,
    icon: 'icon-park-outline:agreement',
    title: '合同管理',
    roles: [
      RoleEnum.SUPER,
      RoleEnum.MANAGER,
      RoleEnum.SALES,
      RoleEnum.SALES_MANAGER,
      RoleEnum.BOOKER,
      RoleEnum.HOUSEKEEPER_MANAGER,
    ],
  },
  children: [
    {
      path: 'list',
      name: 'ContractList',
      meta: {
        title: '合同列表',
      },
      component: () => import('/@/views/admin/contract/list/index.vue'),
    },
    {
      path: 'contract_detail/:id',
      name: 'ContracDetail',
      meta: {
        hideMenu: true,
        title: '合同详情',
        showMenu: false,
        hideTab: true,
        currentActiveMenu: '/contract/list',
      },
      component: () => import('/@/views/admin/contract/list/ContractDetailModal.vue'),
    },
  ],
};

export default contract;
