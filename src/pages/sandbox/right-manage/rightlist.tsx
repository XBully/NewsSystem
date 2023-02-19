import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleFilled,
} from '@ant-design/icons';
import { Table, Tag, Button, Modal, Popover, Switch } from 'antd';
import axios from '@/conf/axiosConf';
import { useEffect, useState } from 'react';

const { confirm } = Modal;

export default function rightlist() {
  const [dataSource, setdataSource] = useState([]);
  useEffect(() => {
    axios.get('/rights?_embed=children').then((res) => {
      res.data.forEach((item: any) => {
        if (item.children.length === 0) {
          item.children = '';
        }
      });
      setdataSource(res.data);
    });
  }, []);

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
    if (item.grade === 1) {
      setdataSource(dataSource.filter((data: any) => data.id !== item.id));
      axios.delete(`/rights/${item.id}`);
    } else if (item.grade === 2) {
      let list: any = dataSource.filter(
        (data: any) => data.id === item.rightId,
      );
      list[0].children = list[0].children.filter(
        (data: any) => data.id !== item.id,
      );
      setdataSource(dataSource);
      axios.delete(`/children/${item.id}`);
    }
  };

  const swicthMethod =(item:any)=>{
    item.pagepermisson = item.pagepermisson===1?0:1
    setdataSource([...dataSource])
    if(item.grade===1){
      axios.patch(`/rights/${item.id}`,{pagepermisson:item.pagepermisson})
    }else if(item.grade===2){
      axios.patch(`/children/${item.id}`,{pagepermisson:item.pagepermisson})
    }
  }

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      render:(id:number)=>{
        return <b>{id}</b>
      }
    },
    {
      title: '权限名称',
      dataIndex: 'title',
    },
    {
      title: '权限路径',
      dataIndex: 'key',
      render: (key: string) => {
        return <Tag color="orange">{key}</Tag>;
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
              onClick={() => showConfirm(item)}
            />
            <Popover
              content={
                <div style={{ textAlign: 'center' }}>
                  <Switch checked={item.pagepermisson} onChange={()=>{
                    swicthMethod(item)
                  }}></Switch>
                </div>
              }
              title="配置项"
              trigger={item.pagepermisson === undefined ? '' : 'click'}
            >
              <Button
                shape="circle"
                type="primary"
                icon={<EditOutlined />}
                disabled={item.pagepermisson === undefined}
              />
            </Popover>
          </div>
        );
      },
    },
  ];
  return (
    <div>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{
          pageSize: 5,
        }}
      />
    </div>
  );
}
