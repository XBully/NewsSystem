import { defineConfig} from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/login', component: '@/pages/login/login' },
    { path: '/news', component: '@/pages/news/News' },
    { path: '/detail/:id', component: '@/pages/news/Detail' },
    {
      path: '/',
      wrappers: ['@/wrappers/Auth'],
      component: '@/pages/sandbox/newssandbox',
      routes: [
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
  mfsu:{}
});
