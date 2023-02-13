import { Table, Button, Modal, Tree } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleFilled,
} from '@ant-design/icons';

const { confirm } = Modal;

export default function rolelist() {
  const [dataSource, setdataSource] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rightList, setrightList] = useState([]);
  const [currentId, setcurrentId] = useState(0);
  const [currentRights, setcurrentRighsts] = useState([]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    let NewData:any = dataSource.map((item:any)=>{
      if(item.id===currentId){
        return {
          ...item,
          rights:currentRights
        }
      }
      return item
    })
    setdataSource(NewData)
    axios.patch(`http://localhost:5000/roles${currentId}`,{rights:currentRights})
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      render: (id: number) => {
        return <b>{id}</b>;
      },
    },
    {
      title: '角色名称',
      dataIndex: 'roleName',
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
            <Button
              shape="circle"
              type="primary"
              icon={<EditOutlined />}
              onClick={()=>{
                showModal()
                setcurrentRighsts(item.rights)
                setcurrentId(item.id)
              }
            }

            />
          </div>
        );
      },
    },
  ];
  useEffect(() => {
    axios.get('http://localhost:5000/roles').then((res) => {
      setdataSource(res.data);
    });
  }, []);
  useEffect(()=>{
    axios.get('http://localhost:5000/rights?_embed=children').then(res=>{
      setrightList(res.data)
    })
  })
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
    axios.delete(`http://localhost:5000/roles/${item.id}`);
  };
  const onCheck=(checkKeys:any)=>{
    setcurrentRighsts(checkKeys.checked)
  }
  return (
    <div>
      <Table
        dataSource={dataSource}
        columns={columns}
        rowKey={(item: any) => item.id}
        pagination={{
          pageSize: 5,
        }}
      />
      <Modal
        title="权限分配"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Tree
          checkable
          checkedKeys={currentRights}
          treeData={rightList}
          onCheck={onCheck}
          checkStrictly={true}
        />
      </Modal>
    </div>
  );
}
