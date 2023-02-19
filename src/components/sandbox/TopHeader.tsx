import { Layout, Avatar, Dropdown } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { connect, history, withRouter } from 'umi';

const { Header } = Layout;

function TopHeader(props: any) {
  const { isCollapsed } = props;
  const {
    role: { roleName },
    username,
  } = JSON.parse(localStorage.getItem('token') || '');
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: roleName,
    },
    {
      key: '2',
      danger: true,
      label: '退出',
      onClick: () => {
        localStorage.removeItem('token');
        history.push('/login');
      },
    },
  ];
  const changeCollapsed=()=>{
    props.dispatch({
     type:'CollapsedModel/changeCollapsed',
     payload:!isCollapsed,
    })
  }
  return (
    <Header style={{ padding: '0 16px', background: 'white' }}>
      {isCollapsed ? (
        <MenuUnfoldOutlined onClick={() =>changeCollapsed()} />
      ) : (
        <MenuFoldOutlined onClick={() =>changeCollapsed()} />
      )}
      <div style={{ float: 'right' }}>
        <span>
          欢迎<b style={{ color: 'skyblue' }}>{username}</b>回来
        </span>
        <Dropdown menu={{ items }}>
          <Avatar size="large" icon={<UserOutlined />} />
        </Dropdown>
      </div>
    </Header>
  );
}
const mapStateToProps = (state: any) => {
  return {
    isCollapsed: state.CollapsedModel.collapsed,
  };
};

export default connect(mapStateToProps)(withRouter(TopHeader));
