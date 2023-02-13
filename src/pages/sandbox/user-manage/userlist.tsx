import { useState, useEffect, useRef } from 'react';
import { Table, Button, Modal, Switch, Form } from 'antd';
import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleFilled,
} from '@ant-design/icons';
import axios from 'axios';
import UserForm from '@/components/user-manage/UserForm';
const { confirm } = Modal;

export default function userlist() {
  const [dataSource, setdataSource]: any = useState([]);
  const [currentId, setcurrentId] = useState();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isUpdateDisabled, setIsUpdateDisabled] = useState(false);
  const [roleList, setroleList]: Array<any> = useState([]);
  const [regionList, setregionList]: Array<any> = useState([]);
  const addForm: any = useRef(null);
  const updateForm: any = useRef(null);
  const { roleId, region,username } = JSON.parse(localStorage.getItem('token') || '');

  useEffect(() => {
    const roleObj: any = {
      '1': 'superAdmin',
      '2': 'admin',
      '3': 'editor',
    };
    axios.get('http://localhost:5000/users?_expand=role').then((res) => {
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
  useEffect(() => {
    axios.get('http://localhost:5000/roles').then((res) => {
      setroleList(res.data);
    });
  }, []);
  useEffect(() => {
    axios.get('http://localhost:5000/regions').then((res) => {
      setregionList(res.data);
    });
  }, []);
  const columns = [
    {
      title: '区域',
      dataIndex: 'region',
      filters: [
        ...regionList.map((item: any) => ({
          text: item.title,
          value: item.value,
        })),
        {
          text: '全球',
          value: '全球',
        },
      ],
      onFilter: (value: any, item: any) => {
        if (value === '全球') {
          return item.region === '';
        }
        return item.region === value;
      },
      render: (region: string) => {
        return <b>{region === '' ? '全球' : region}</b>;
      },
    },
    {
      title: '角色名称',
      dataIndex: 'role',
      render: (role: any) => {
        return role?.roleName;
      },
    },
    {
      title: '用户名',
      dataIndex: 'username',
    },
    {
      title: '用户状态',
      dataIndex: 'roleState',
      render: (roleState: boolean, item: any) => {
        return (
          <Switch
            checked={roleState}
            disabled={item.default}
            onChange={() => {
              handleChange(item);
            }}
          ></Switch>
        );
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
              disabled={item.default}
            />
            <Button
              shape="circle"
              type="primary"
              icon={<EditOutlined />}
              disabled={item.default}
              onClick={() => {
                handleUpdate(item);
              }}
            />
          </div>
        );
      },
    },
  ];
  const showAddModal = () => {
    setIsAddModalOpen(true);
  };
  const addHandleOk = () => {
    addForm.current
      .validateFields()
      .then((value: any) => {
        setIsAddModalOpen(false);
        addForm.current.resetFields();
        axios.post(`http://localhost:5000/users`, {
            ...value,
            default:false,
            roleState: false,
          })
          .then((res) => {
            setdataSource([
              ...dataSource,
              {
                ...res.data,
                role: roleList.filter(
                  (item: any) => item.id === value.roleId,
                )[0],
              },
            ]);
          });
      })
      .catch((err: any) => {
        console.log(err);
      });
  };
  const handleCancel = () => {
    setIsAddModalOpen(false);
    setIsUpdateModalOpen(false);
  };
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
    axios.delete(`http://localhost:5000/users/${item.id}`);
  };
  const handleChange = (item: any) => {
    item.roleState = !item.roleState;
    setdataSource([...dataSource]);
    axios.patch(`http://localhost:5000/users/${item.id}`, {
      roleState: item.roleState,
    });
  };
  const handleUpdate = (item: any) => {
    setTimeout(() => {
      setIsUpdateModalOpen(true);
      if (item.roleId === 1) {
        setIsUpdateDisabled(true);
      } else {
        setIsUpdateDisabled(false);
      }
      updateForm.current.setFieldsValue(item);
      setcurrentId(item.id);
    }, 0);
  };
  const updateFormOk = () => {
    setIsUpdateModalOpen(false);
    updateForm.current.validateFields().then((value: any) => {
      setdataSource(
        dataSource.map((item: any) => {
          if (item.id === currentId) {
            return {
              ...item,
              ...value,
              role: roleList.filter((data: any) => data.id === value.roleId)[0],
            };
          }
          return item;
        }),
      );
      setIsUpdateDisabled(!isUpdateDisabled);
      axios.patch(`http://localhost:5000/users/${currentId}`, value);
    });
  };
  return (
    <div>
      <Button type="primary" onClick={showAddModal}>
        添加用户
      </Button>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{
          pageSize: 5,
        }}
        rowKey={(item: any) => item.id}
      />
      <Modal
        title="权限分配"
        open={isAddModalOpen}
        onOk={addHandleOk}
        onCancel={handleCancel}
      >
        <UserForm regionList={regionList} roleList={roleList} ref={addForm} />
      </Modal>
      <Modal
        title="更新用户"
        okText="更新"
        cancelText="取消"
        open={isUpdateModalOpen}
        onOk={updateFormOk}
        onCancel={() => {
          handleCancel(), setIsUpdateDisabled(!isUpdateDisabled);
        }}
      >
        <UserForm
          regionList={regionList}
          roleList={roleList}
          ref={updateForm}
          isUpdateDisabled={isUpdateDisabled}
          isUpdate={true}
        />
      </Modal>
    </div>
  );
}
