import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const notification: AppRouteModule = {
  path: '/notification',
  name: 'NotificationManagement',
  component: LAYOUT,
  redirect: '/notification/message',
  meta: {
    orderNo: 400,
    icon: 'ion:settings-outline',
    title: '通知管理',
  },
  children: [
    {
      path: 'message',
      name: 'MeesageManagement',
      meta: {
        title: '消息列表',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/admin/notification/message/index.vue'),
    },
  ],
};

export default notification;
