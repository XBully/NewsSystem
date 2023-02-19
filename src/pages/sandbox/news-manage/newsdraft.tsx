import { Table, Button, Modal, notification } from 'antd';
import { useEffect, useState } from 'react';
import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleFilled,
  UploadOutlined,
} from '@ant-design/icons';
import axios from '@/conf/axiosConf';
import { history } from 'umi';
const { confirm } = Modal;

export default function newsdraft() {
  const [dataSource, setdataSource]: any = useState([]);
  const { username } = JSON.parse(localStorage.getItem('token') || '');
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      render: (id: string) => {
        return <b>{id}</b>;
      },
    },
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
      title: '操作',
      render: (item: any) => {
        return (
          <div>
            <Button
              shape="circle"
              danger
              icon={<DeleteOutlined />}
              onClick={() => {
                showConfirm(item);
              }}
            />
            <Button
              shape="circle"
              icon={<EditOutlined />}
              onClick={() => {
                handleUpdate(item);
              }}
            />
            <Button
              shape="circle"
              type="primary"
              icon={<UploadOutlined />}
              onClick={() => handleCheck(item.id)}
            />
          </div>
        );
      },
    },
  ];
  const showConfirm = (item: any) => {
    confirm({
      title: '你确定要删除吗？',
      icon: <ExclamationCircleFilled />,
      onOk() {
        deletMethod(item);
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };
  const deletMethod = (item: any) => {
    setdataSource(dataSource.filter((data: any) => data.id !== item.id));
    axios.delete(`/news/${item.id}`);
  };
  const handleUpdate = (item: any) => {
    history.push(`/news-manage/update/${item.id}`);
  };
  const handleCheck = (id: number) => {
    axios
      .patch(`/news/${id}`, {
        auditState: 1,
      })
      .then(res => {
        history.push('/audit-manage/list');
        notification.info({
          message: '通知',
          description: `您可以到审核列表中查看您的新闻`,
          placement: 'bottomRight',
        });
      });
  };
  useEffect(() => {
    axios
      .get(
        `/news?author=${username}&auditState=0&_expand=category`,
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
