import axios from 'axios';
import { request, history } from 'umi';
import Home from '@/pages/sandbox/home/home';
import Userlist from '@/pages/sandbox/user-manage/userlist';
import Rightlist from '@/pages/sandbox/right-manage/rightlist';
import Rolelist from '@/pages/sandbox/right-manage/rolelist';
import NewsAdd from '@/pages/sandbox/news-manage/newsadd';
import NewsDraft from '@/pages/sandbox/news-manage/newsdraft';
import NewsCategory from '@/pages/sandbox/news-manage/newscategory';
import Audit from '@/pages/sandbox/audit-manage/audit';
import AuditList from '@/pages/sandbox/audit-manage/auditlist';
import Unpublished from '@/pages/sandbox/publish-manage/unpublished';
import Published from '@/pages/sandbox/publish-manage/published';
import Sunset from '@/pages/sandbox/publish-manage/sunset';
import NewsPreview from './pages/sandbox/news-manage/newspreview';
import NewsUpdate from './pages/sandbox/news-manage/newsupdate';
let routesData: any = [];
const LocalRouterMap:any = {
  '/home': Home,
  '/user-manage/list': Userlist,
  '/right-manage/role/list': Rolelist,
  '/right-manage/right/list': Rightlist,
  '/news-manage/add': NewsAdd,
  '/news-manage/draft': NewsDraft,
  '/news-manage/category': NewsCategory,
  '/news-manage/preview/:id': NewsPreview,
  '/news-manage/update/:id': NewsUpdate,
  '/audit-manage/audit': Audit,
  '/audit-manage/list': AuditList,
  '/publish-manage/unpublished': Unpublished,
  '/publish-manage/published': Published,
  '/publish-manage/sunset': Sunset,
};
const {role:{rights}} = JSON.parse(localStorage.getItem('token')||'')
const CheckRoute = (item:any) => {
  return LocalRouterMap[item.key] && (item.pagepermisson || item.routepermisson)
}
const checkUserPermission = (item:any) => {
  return rights.includes(item.key)
}
export const render = async (oldRender: any) => {
  const isLogin = await request('@/warrpers/auth');
  if (!isLogin) {
    history.push('/login');
  } else {
  await Promise.all([
      axios.get('http://localhost:5000/rights'),
      axios.get('http://localhost:5000/children'),
    ]).then((res) => {
      routesData = [...res[0].data, ...res[1].data];
    });
  }
  oldRender();
};
const newRoutes:any=[]
const filterRoutes = (routesData: any) => {
  routesData?.map((item: any) => {
    if(CheckRoute(item) && checkUserPermission(item)) {
      newRoutes.push([{path:item.key,component:LocalRouterMap[item.key],exact:true}]);
      filterRoutes([{path:item.key,component:LocalRouterMap[item.key],exact:true}]);
    }
  })
};

export function patchRoutes({ routes }: any) {
  filterRoutes(routesData);
  newRoutes.map((item: any) => routes[1].routes.unshift(...item));
}
