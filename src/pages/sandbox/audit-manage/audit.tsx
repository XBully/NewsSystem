import { Table, Button,notification } from 'antd';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {CheckOutlined,CloseOutlined} from '@ant-design/icons'

export default function audit() {
  const [dataSource, setdataSource]: any = useState([]);
  const { roleId, region,username } = JSON.parse(localStorage.getItem('token') || '');
  useEffect(() => {
    const roleObj: any = {
      '1': 'superAdmin',
      '2': 'admin',
      '3': 'editor',
    };
    axios
      .get(
        `/news?auditState=1&_expand=category`,
      )
      .then((res) => {
        const list = res.data;
      setdataSource(
        roleObj[roleId] === 'superAdmin'
          ? list
          : [
              ...list.filter((item: any) => item.username === username),
              ...list.filter(
                (item: any) =>
                  item.region === region && roleObj[item.roleId] === 'editor',
              ),
            ],
      );
      });
  }, [roleId, region,username]);
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
      title: '新闻分类',
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
              <Button shape="circle" type='primary'icon={<CheckOutlined />} onClick={()=>handleAudit(item,2,1)} style={{marginRight:'10px'}}/>
              <Button shape="circle" danger icon={<CloseOutlined />} onClick={()=>handleAudit(item,3,0)}/>
          </div>
        );
      },
    },
  ];
  const handleAudit = (item:any,auditState:number,pushlishState:number) => {
    setdataSource(dataSource.filter((data:any)=>data.id !== item.id))
    axios.patch(`/news/${item.id}`,{
      auditState,
      pushlishState
    }).then(res=>{
      notification.info({
        message: '通知',
        description: `您可以到【审核管理/审核列表】中查看您的新闻`,
        placement: 'bottomRight',
      });
    })
  }
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
