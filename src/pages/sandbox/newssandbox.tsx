import SideMenu from '@/components/sandbox/SideMenu';
import TopHeader from '@/components/sandbox/TopHeader';
import { Layout, Spin } from 'antd';
import '@/pages/sandbox/newssandbox.css';
import { connect } from 'umi';
const { Content } = Layout;

 function newssandbox(props: any) {
  return (
    <Layout>
      <SideMenu />
      <Layout className="site-layout" >
        <TopHeader/>
        <Spin spinning={props.isSpinning} >
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: 'white',
              overflow: 'auto',
            }}
          >
            {props.children}
          </Content>
        </Spin>
      </Layout>
    </Layout>
  );
}
const mapStateToProps = (state:any)=>{
  return{
    isSpinning:state.LoadingModel.isLoading
  }
}
export default connect(mapStateToProps)(newssandbox)
