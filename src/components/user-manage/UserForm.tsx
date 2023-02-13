import { Form, Input, Select } from 'antd';
import { forwardRef, useEffect, useState } from 'react';
const { Option } = Select;

const UserForm=forwardRef((props:any,ref:any)=> {
  const [isDisabled,setisDisabled] =useState(false)
  useEffect(()=>{
    setisDisabled(props.isDisabled)
  },[props.isUpdateDisabled])
  const { roleId, region,username } = JSON.parse(localStorage.getItem('token') || '');
  const roleObj: any = {
    '1': 'superAdmin',
    '2': 'admin',
    '3': 'editor',
  };
  const checkRegionDisabled =(item:any)=>{
    if(props.isUpdate){
      if(roleObj[roleId]==="superAdmin"){
        return false
      }else{
        return true
      }
    }else{
      if(roleObj[roleId]==="superAdmin"){
        return false
      }else{
        return roleObj[item.obj]==="editor"
      }
    }
  }
  return (
    <Form layout="vertical" ref={ref}>
          <Form.Item
            name="username"
            label="用户名"
            rules={[
              {
                required: true,
                message: 'Please input the title of collection!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="密码"
            rules={[
              {
                required: true,
                message: 'Please input the title of collection!',
              },
            ]}
          >
            <Input type="password" />
          </Form.Item>
          <Form.Item
            name="region"
            label="区域"
            rules={isDisabled?[]:[
              {
                required: true,
                message: 'Please input the title of collection!',
              },
            ]}
          >
            <Select disabled={isDisabled}>
              {
                props.regionList.map((item:any)=>
                  <Option value={item.value} key={item.id} disabled={checkRegionDisabled(item)}>{item.title}</Option>
                )
              }
            </Select>
          </Form.Item>
          <Form.Item
            name="roleId"
            label="角色"
            rules={[
              {
                required: true,
                message: 'Please input the title of collection!',
              },
            ]}
          >
            <Select onChange={(value)=>{
              if(value===1){
                setisDisabled(true)
                ref.current.setFieldsValue({
                  region:''
                })
              }else{
                setisDisabled(false)
              }
            }}>
            {
                props.roleList.map((item:any)=>
                  <Option value={item.id} key={item.id}>{item.roleName}</Option>
                )
              }
            </Select>
          </Form.Item>
        </Form>
  )
})
export default UserForm
