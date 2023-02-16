import { Table, Button, Modal, Form, Input } from 'antd';
import React, { useContext, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { DeleteOutlined, ExclamationCircleFilled } from '@ant-design/icons';
import type { InputRef } from 'antd';
import type { FormInstance } from 'antd/es/form';

const { confirm } = Modal;
const EditableContext = React.createContext<FormInstance<any> | null>(null);

export default function newscategory() {
  const [dataSource, setdataSource]: any = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5000/categories`).then((res) => {
      setdataSource(res.data);
    });
  }, []);
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      render: (id: number) => {
        return <b>{id}</b>;
      },
    },
    {
      title: '栏目名称',
      dataIndex: 'title',
      onCell:(record:any)=>({
        record,
        editable: true,
        dataIndex: 'title',
        title: '栏目名称',
        handleSave:handleSave
      })
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
          </div>
        );
      },
    },
  ];
  const deletMethod = (item: any) => {
    setdataSource(dataSource.filter((data: any) => data.id !== item.id));
    axios.delete(`http://localhost:5000/categories/${item.id}`);
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
  const handleSave = (record: any) => {
    setdataSource(dataSource.map((item: any) =>{
      if(item.id === record.id){
        return {
          id:item.id,
          title:record.title,
          value:record.value
        }
      }
      return item
    }))
    axios.patch(`http://localhost:5000/categories/${record.id}`,{
      title:record.title,
      value:record.value
    })
  }
  interface Item {
    id: number;
    title: string;
    value: string;
  }
  interface EditableRowProps {
    index: number;
  }
  const EditableRow: React.FC<EditableRowProps> = ({ index, ...props }) => {
    const [form] = Form.useForm();
    return (
      <Form form={form} component={false}>
        <EditableContext.Provider value={form}>
          <tr {...props} />
        </EditableContext.Provider>
      </Form>
    );
  };
  interface EditableCellProps {
    title: React.ReactNode;
    editable: boolean;
    children: React.ReactNode;
    dataIndex: keyof Item;
    record: Item;
    handleSave: (record: Item) => void;
  }

  const EditableCell: React.FC<EditableCellProps> = ({
    title,
    editable,
    children,
    dataIndex,
    record,
    handleSave,
    ...restProps
  }) => {
    const [editing, setEditing] = useState(false);
    const inputRef = useRef<InputRef>(null);
    const form = useContext(EditableContext)!;

    useEffect(() => {
      if (editing) {
        inputRef.current!.focus();
      }
    }, [editing]);
    const toggleEdit = () => {
      setEditing(!editing);
      form.setFieldsValue({ [dataIndex]: record[dataIndex] });
    };

    const save = async () => {
      try {
        const values = await form.validateFields();

        toggleEdit();
        handleSave({ ...record, ...values });
      } catch (errInfo) {
        console.log('Save failed:', errInfo);
      }
    };
    let childNode = children;
    if (editable) {
      childNode = editing ? (
        <Form.Item
          style={{ margin: 0 }}
          name={dataIndex}
          rules={[
            {
              required: true,
              message: `${title} is required.`,
            },
          ]}
        >
          <Input ref={inputRef} onPressEnter={save} onBlur={save} />
        </Form.Item>
      ) : (
        <div
          className="editable-cell-value-wrap"
          style={{ paddingRight: 24 }}
          onClick={toggleEdit}
        >
          {children}
        </div>
      );
    }

    return <td {...restProps}>{childNode}</td>;
  };
  return (
    <div>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{
          pageSize: 5,
        }}
        rowKey={(item: any) => item.id}
        components={{
          body: {
            row: EditableRow,
            cell: EditableCell,
          },
        }}
      />
    </div>
  );
}
