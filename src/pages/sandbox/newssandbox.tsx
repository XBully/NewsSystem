import SideMenu from '@/components/sandbox/SideMenu';
import TopHeader from '@/components/sandbox/TopHeader';
import { Layout, theme } from 'antd';
import '@/pages/sandbox/newssandbox.css'
const {Content } = Layout;

export default function newssandbox(props: any) {
  return (
    <Layout>
      <SideMenu />
      <Layout className="site-layout">
        <TopHeader />
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: 'white',
            overflow:'auto'
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
}
