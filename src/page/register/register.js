import register from '../../api/registerApi';
import { Button, Checkbox, Form,message, Input } from 'antd';
import { useState } from 'react';
import {Link, Navigate,BrowserRouter ,useNavigate} from "react-router-dom";
export const Register= () => {
    const navigate = useNavigate();
    const onFinish = async (values)=>{
        // console.log(values);
        try{
          const res = await register(values);
        
          if(res.data.statusCode ===  200){
            navigate('/login');
          }else{
            
          }
        }catch(err){
          message.error(err.response.data.message[0]);
          message.error("Tài khoản hoặc mật khẩu không chính xác");
        }
      };

    return (
      <div className='Modal'>
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
            <Input className='Input'/>
          </Form.Item>
    
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password className='Input'/>
          </Form.Item>
          
          <Form.Item
            label="FullName"
            name="fullName"
            rules={[{ required: false, message: 'Please input full name!' }]}
          >
            <Input className='Input'/>
          </Form.Item>
          <Form.Item
            label="Phone"
            name="phone"
            rules={[{ required: false, message: 'Please input phone!' }]}
          >
            <Input className='Input'/>
          </Form.Item>
          <Form.Item
            label="Address"
            name="address"
            rules={[{ required: false, message: 'Please input address!' }]}
          >
            <Input className='Input'/>
          </Form.Item>
          {/* <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
            <Checkbox>Remember me</Checkbox>
          </Form.Item> */}
    
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              register
            </Button>
          </Form.Item>
          
        </Form>
        </div>
        );
}