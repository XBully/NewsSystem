import { Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';
import '@/components/sandbox/index.css';
import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'umi';
import axios from 'axios';
// import { UserOutlined,HomeOutlined } from '@ant-design/icons';
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
export default function SideMenu() {
  const [NewItems, setNewItems] = useState([]);
  const history = useHistory();
  const selectKyes = useLocation().pathname
  const openKeys = ['/'+selectKyes.split('/')[1]]
  const checkPagePermisson = (item: any) => {
    return item.pagepermisson === 1;
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
    axios.get('http://localhost:5000/rights?_embed=children').then((res) => {
      setNewItems(setMenuOption(res.data));
    });
  }, []);

  return (
    <Sider trigger={null} collapsible collapsed={false}>
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
