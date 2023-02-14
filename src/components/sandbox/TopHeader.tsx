import { useState } from 'react';
import { Layout,Avatar, Dropdown } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined,UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { useHistory } from 'umi';

const { Header } = Layout;

export default function TopHeader() {
  const [collapsed, setCollapsed] = useState(false);
  const history= useHistory()
  const changeCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const {role:{roleName},username} = JSON.parse(localStorage.getItem('token')||'')
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: roleName
    },
    {
      key: '2',
      danger: true,
      label: '退出',
      onClick: () => {
        localStorage.removeItem('token')
        history.push('/login')
      }
    },
  ];

  return (
    <Header style={{ padding: '0 16px', background: 'white' }}>
      {collapsed ? (
        <MenuUnfoldOutlined onClick={changeCollapsed} />
      ) : (
        <MenuFoldOutlined onClick={changeCollapsed} />
      )}
      <div style={{ float: 'right' }}>
        <span>欢迎<b style={{color:"skyblue"}}>{username}</b>回来</span>
        <Dropdown menu={{ items }}>
          <Avatar size="large" icon={<UserOutlined />} />
        </Dropdown>
      </div>
    </Header>
  );
}
