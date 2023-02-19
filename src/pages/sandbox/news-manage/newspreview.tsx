import { Button, Descriptions, PageHeader } from 'antd';
import axios from 'axios';
import moment from 'moment';
import { useEffect, useState } from 'react';

export default function newspreview(props: any) {
  const [newsInfo, setNewsInfo]: any = useState(null);
  useEffect(() => {
    axios
      .get(
        `/news/${props.match.params.id}?_expand=category&_expand=role`,
      )
      .then((res) => {
        setNewsInfo(res.data);
      });
  }, []);
  const auditList = ['未审核', '审核中', '已通过', '未通过'];
  const publishList = ['未发布', '待发布', '已上线', '已下线'];
  return (
    <div>
      {newsInfo && (
        <div>
          <PageHeader
            title={newsInfo.title}
            onBack={() => window.history.back()}
            subTitle={newsInfo.category.title}
          >
            <Descriptions size="small" column={3}>
              <Descriptions.Item label="创建者">
                {newsInfo.author}
              </Descriptions.Item>
              <Descriptions.Item label="创建时间">
                {moment(newsInfo.createTime).format('YYYY-MM-DD HH:mm:ss')}
              </Descriptions.Item>
              <Descriptions.Item label="发布时间">
                {newsInfo.publishTime
                  ? moment(newsInfo.publishTime).format('YYYY-MM-DD HH:mm:ss')
                  : '-'}
              </Descriptions.Item>
              <Descriptions.Item label="区域">
                {newsInfo.region}
              </Descriptions.Item>
              <Descriptions.Item label="审核状态" contentStyle={{color: 'red'}}>
                {auditList[newsInfo.auditState]}
              </Descriptions.Item>
              <Descriptions.Item label="发布状态">
                <span style={{ color: 'red' }}>
                  {publishList[newsInfo.publishState]}
                </span>
              </Descriptions.Item>
              <Descriptions.Item label="访问数量">
                <span style={{ color: 'green' }}>{newsInfo.view}</span>
              </Descriptions.Item>
              <Descriptions.Item label="点赞数量">
                <span style={{ color: 'green' }}>{newsInfo.star}</span>
              </Descriptions.Item>
              <Descriptions.Item label="评论数量">
                <span style={{ color: 'green' }}>0</span>
              </Descriptions.Item>
            </Descriptions>
          </PageHeader>
          <div dangerouslySetInnerHTML={{
              __html:newsInfo.content
          }} style={{
            border:'1px solid #ccc',
            color:'#ddd',
            padding:'5px 24px',
            margin:'0 24px'
          }}></div>
        </div>
      )}
    </div>
  );
}
