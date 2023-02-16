import { Table, Button, Tag, notification } from 'antd';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { history } from 'umi';

export default function auditlist() {
  const [dataSource, setdataSource]: any = useState([]);
  const { username } = JSON.parse(localStorage.getItem('token') || '');
  const columns = [
    {
      title: '新闻标题',
      dataIndex: 'title',
      render: (title: string, item: any) => {
        return <a href={`#/news-manage/preview/${item.id}`}>{title}</a>;
      },
    },
    {
      title: '作者',
      dataIndex: 'author',
    },
    {
      title: '分类',
      dataIndex: 'category',
      render: (category: any) => {
        return category.title;
      },
    },
    {
      title: '审核状态',
      dataIndex: 'auditState',
      render: (auditState: number) => {
        const colorList = ['', 'orange', 'green', 'red'];
        const auditList = ['草稿箱', '审核中', '已通过', '未通过'];
        return <Tag color={colorList[auditState]}>{auditList[auditState]}</Tag>;
      },
    },
    {
      title: '操作',
      render: (item: any) => {
        return (
          <div>
            {item.auditState === 1 && (
              <Button onClick={() => handleRervert(item)}>撤销</Button>
            )}
            {item.auditState === 2 && (
              <Button danger onClick={() => handlePublish(item)}>
                发布
              </Button>
            )}
            {item.auditState === 3 && (
              <Button type="primary" onClick={() => handleUpdate(item)}>
                更新
              </Button>
            )}
          </div>
        );
      },
    },
  ];
  const handleRervert = (item: any) => {
    setdataSource(dataSource.filter((data: any) => data.id !== item.id));
    axios
      .patch(`http://localhost:5000/news/${item.id}`, {
        auditState: 0,
      })
      .then((res) => {
        notification.info({
          message: '撤销成功',
          description: `您可以在草稿箱中查看您的新闻`,
          placement: 'bottomRight',
        });
      });
  };
  const handleUpdate = (item: any) => {
    history.push(`/news-manage/update/${item.id}`);
  };
  const handlePublish = (item: any) => {
    axios
      .patch(`http://localhost:5000/news/${item.id}`, {
        "publishState": 2,
      })
      .then((res) => {
        history.push('/publish-manage/published');

        notification.info({
          message: `通知`,
          description: `您可以到【发布管理/已发布】中查看你的新闻`,
          placement: 'bottomRight',
        });
      });
  };
  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/news?author=${username}&auditState_ne=0&publishState_lte=1&_expand=category`,
      )
      .then((res) => {
        setdataSource(res.data);
      });
  }, [username]);
  return (
    <div>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{
          pageSize: 5,
        }}
        rowKey={(item: any) => item.id}
      />
    </div>
  );
}
