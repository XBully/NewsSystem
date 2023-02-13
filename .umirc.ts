import { defineConfig, Redirect } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/login', component: '@/pages/login/login' },
    {
      path: '/',
      wrappers: ['@/wrappers/Auth'],
      component: '@/pages/sandbox/newssandbox',
      routes: [
        { path: '/home', component: '@/pages/sandbox/home/home' },
        {
          path: '/user-manage/list',
          component: '@/pages/sandbox/user-manage/userlist',
        },
        {
          path: '/right-manage/role/list',
          component: '@/pages/sandbox/right-manage/rolelist',
        },
        {
          path: '/right-manage/right/list',
          component: '@/pages/sandbox/right-manage/rightlist',
        },
        { exact: true, path: '/', redirect: '/home' },
        { path: '*', component: '@/pages/sandbox/nopermission/nopermission' },
      ],
    },
  ],
  fastRefresh: {},
  proxy: {
    '/api': {
      target: '',
      changeOrigin: true,
    },
  },
  history: {
    type: 'hash',
  },
  mfsu: {}
});
