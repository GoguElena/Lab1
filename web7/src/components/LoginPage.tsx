import React from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';

type FieldType = {
    username?: string;
    password?: string;
    remember?: boolean;
};

const LoginPage: React.FC = () => {
    const onFinish = (values: FieldType) => {
        console.log('Success:', values);
        // Add authentication logic here
        const { username, password } = values;
        // Using formData from date.ts
        if (username === 'admin' && password === 'admin') { // Example credentials for testing
            message.success('Login successful!');
        } else {
            message.error('Incorrect username or password.');
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
            <div style={{ backgroundColor: '#cc9966', width: '400px', padding: '20px', border: '1px solid black', borderRadius: '20px' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Login</h2>
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item style={{padding:'0 100px 0 0'}}name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }} style={{padding:'0 100px 0 0'}}>
                        <Button type="primary" htmlType="submit" style={{ backgroundColor: '#996633', borderColor: '#996633' }}>                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default LoginPage;
