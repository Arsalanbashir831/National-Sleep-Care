import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
// Assuming your Firebase auth module is exported as 'auth'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';


const Login = () => {
const navigation = useNavigate()
    const onFinish = async (values) => {
    const { username, password } = values;
    try {
      // Sign in user with email and password
      const userCredential = await signInWithEmailAndPassword(auth, username, password);
      console.log('User logged in:', userCredential.user);
      navigation('/adminHome')
      // You can redirect or handle the logged in user here
    } catch (error) {
      console.error('Login failed:', error.message);
    
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="w-full max-w-xs p-8 bg-white shadow-md rounded"
      >
        <h2 className="mb-6 text-3xl font-bold text-center text-gray-900">Login</h2>
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
          className="w-full"
        >
          <Input placeholder="Username" className="rounded"/>
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
          className="w-full"
        >
          <Input.Password placeholder="Password" className="rounded"/>
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" className="w-full">
          <Checkbox className="text-blue-600">Remember me</Checkbox>
        </Form.Item>

        <Form.Item className="w-full">
          <Button type="primary" htmlType="submit" className="w-full bg-blue-600 border-blue-600 hover:bg-blue-700">
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
