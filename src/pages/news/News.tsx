import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { PageHeader, Card, Col, Row, List } from 'antd';
import _ from 'lodash';

export default function News() {
  const [newsList, setNewsList] = useState([]);
  useEffect(() => {
    axios.get(`/news?publishState=2&_expand=category`).then((res) => {
      const list: any = Object.entries(
        _.groupBy(res.data, (item) => item.category.title),
      );
      setNewsList(list);
    });
  }, []);
  return (
    <div style={{ width: '95%', margin: '0 auto' }}>
      <PageHeader
        className="site-page-header"
        title="全球大新闻"
        subTitle="查看新闻"
      />
      <div className="site-card-wrapper">
        <Row gutter={[16, 16]}>
          {
            newsList.map((item:any) => {
              return (
                <Col span={8} key={item[0]}>
                  <Card title={item[0]} bordered={false}>
                    <List
                      itemLayout="horizontal"
                      dataSource={item[1]}
                      renderItem={(data:any) => (
                        <List.Item>
                          <a href={`#/detail/${data.id}`}>{data.title}</a>
                        </List.Item>
                      )}
                    />
                  </Card>
                </Col>
              );
            })
          }
        </Row>
      </div>
    </div>
  );
}
