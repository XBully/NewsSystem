import { Layout, Menu,} from 'antd';
import type { MenuProps } from 'antd';
import '@/components/sandbox/index.css';
import { useEffect, useState } from 'react';
import { connect, useHistory, useLocation } from 'umi';
import axios from '@/conf/axiosConf';
import { UserOutlined,HomeOutlined } from '@ant-design/icons';
import '@/app.css'

const { Sider } = Layout;
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}
function SideMenu(props:any) {
  const { isCollapsed } = props;
  const [NewItems, setNewItems] = useState([]);
  const history = useHistory();
  const selectKyes = useLocation().pathname
  const openKeys = ['/'+selectKyes.split('/')[1]]
  const {role:{rights}}=JSON.parse(localStorage.getItem('token')||'')
  const checkPagePermisson = (item: any) => {
    return item.pagepermisson && rights.includes(item.key)
  };
  const iconList: any = {
    // '/home': <HomeOutlined/>,
    // '/user-manage': <UserOutlined />,
    // '/user-manage/list': <UserOutlined />,
    // '/right-manage': <UserOutlined />,
    // '/right-manage/role/list': <UserOutlined />,
    // '/right-manage/right/list': <UserOutlined />,
  };
  const setMenuOption = (menuList: any) => {
    return menuList.map((item: any) => {
      if (item.children?.length>0 && checkPagePermisson(item)) {
        return getItem(
          item.title,
          item.key,
          iconList[item.key],
          setMenuOption(item.children),
        );
      }
      return (
        checkPagePermisson(item) &&
        getItem(item.title, item.key, iconList[item.key])
      );
    });
  };
  const items: MenuProps['items'] = NewItems;
  useEffect(() => {
    axios.get('/rights?_embed=children').then((res) => {
      setNewItems(setMenuOption(res.data));
    });
  }, []);

  return (
    <Sider trigger={null} collapsible collapsed={isCollapsed}>
      <div style={{ display: 'flex', height: '100%', flexDirection: 'column' }}>
        <div className="logo">新闻发布管理系统</div>
        <div style={{ flex: 1, overflow: 'auto' }}>
          <Menu
            selectedKeys={[selectKyes]}
            defaultOpenKeys={openKeys}
            mode="inline"
            theme="dark"
            items={items}
            onClick={(item) => {
              history.push(item.key);
            }}
          />
        </div>
      </div>
    </Sider>
  );
}
const mapStateToProps = (state: any) => {
  return {
    isCollapsed: state.CollapsedModel.collapsed,
  };
};
export default connect(mapStateToProps)(SideMenu)
