import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Descriptions, PageHeader } from 'antd';
import moment from 'moment';
import { HeartTwoTone } from '@ant-design/icons';

export default function Detail(props: any) {
  const [newsInfo, setNewsInfo]: any = useState(null);
  useEffect(() => {
    axios
      .get(`/news/${props.match.params.id}?_expand=category&_expand=role`)
      .then((res) => {
        setNewsInfo({
          ...res.data,
          view:res.data.view+1
        });
        return res.data
      }).then((res)=>{
        axios.patch(`/news/${props.match.params.id}`,{
          view:res.view+1
        })
      })
  }, [props.match.params.id]);
  const star =()=>{
    setNewsInfo({
      ...newsInfo,
      star:newsInfo.star+1
    });
    axios.patch(`/news/${props.match.params.id}`,{
      ...newsInfo,
      star:newsInfo.star+1
    })
  }
  return (
    <div>
      {newsInfo && (
        <div>
          <PageHeader
            title={newsInfo.title}
            onBack={() => window.history.back()}
            subTitle={
              <div>
                {newsInfo.category.title}
                <HeartTwoTone twoToneColor='#eb2f96' onClick={star}/>
              </div>
            }

          >
            <Descriptions size="small" column={3}>
              <Descriptions.Item label="创建者">
                {newsInfo.author}
              </Descriptions.Item>
              <Descriptions.Item label="发布时间">
                {newsInfo.publishTime
                  ? moment(newsInfo.publishTime).format('YYYY-MM-DD HH:mm:ss')
                  : '-'}
              </Descriptions.Item>
              <Descriptions.Item label="区域">
                {newsInfo.region}
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
          <div
            dangerouslySetInnerHTML={{
              __html: newsInfo.content,
            }}
            style={{
              border: '1px solid #ccc',
              color: '#ddd',
              padding: '5px 24px',
              margin: '0 24px',
            }}
          ></div>
        </div>
      )}
    </div>
  );
}
