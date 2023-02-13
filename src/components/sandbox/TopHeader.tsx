import { useState } from 'react';
import { Layout,Avatar } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined,UserOutlined,DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';

const { Header } = Layout;

export default function TopHeader() {
  const [collapsed, setCollapsed] = useState(false);
  const changeCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: '超级管理员'
    },
    {
      key: '2',
      danger: true,
      label: '退出',
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
        <span>欢迎admin回来</span>
        <Dropdown menu={{ items }}>
          <Avatar size="large" icon={<UserOutlined />} />
        </Dropdown>
      </div>
    </Header>
  );
}
