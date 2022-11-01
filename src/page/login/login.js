

import { Button, Checkbox, Form,message, Input } from 'antd';
import { BugOutlined  } from '@ant-design/icons';
import login from '../../api/loginApi';
import {Link, Navigate,BrowserRouter } from "react-router-dom";
import { useState } from 'react';

export const Login= () => {
  const [user,setUser] = useState({});
  const [error,setError] = useState({});
  const onFinish = async (values)=>{
    // console.log(values);
    // let data = {"username": values.username, "password": values.password};
   
    
    try{
      const res = await login(values);
    
      if(res.data.statusCode ===  200){
        setUser({username: values.username});
        message.success("Login Success: "+res.data.data.username);
      }else{
        setError({error: res.data.message});
        message.error(res.data.message);
      }
    }catch(err){
      message.error(err.response.data.message[0]);
      message.error("Tài khoản hoặc mật khẩu không chính xác");
    }
  };


    return (
<div className='Modal'>
  
<div className="logo">
<BugOutlined /> 
                
                <span> Login</span>
              </div>
<Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      // initialValues={{ remember: true }}
      onFinish={onFinish}
  
      autoComplete="off"
    >
     
      <Form.Item
     
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input  className='Input'/>
      </Form.Item>
     
     
    
      <Form.Item
     
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password  className='Input'/>
      </Form.Item>
     

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      <Link  to={"/register"}>Sign up</Link>
    </Form>

</div>
    
    );
  
}

