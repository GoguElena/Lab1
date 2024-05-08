import React, { useState } from 'react';
import { Button, DatePicker, Form, Input, Radio, message } from 'antd';

type SizeType = Parameters<typeof Form>[0]['size'];

const FormPage: React.FC = () => {
    const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');
    const [formData, setFormData] = useState<any>(() => {
        const storedData = localStorage.getItem('formData');
        return storedData ? JSON.parse(storedData) : {};
    });

    const onFormLayoutChange = ({ size }: { size: SizeType }) => {
        setComponentSize(size);
    };

    const onFinish = (values: any) => {
        localStorage.setItem('formData', JSON.stringify(values));
        setFormData(values);
        message.success('Form submitted successfully!');
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', minHeight: '100vh' }}>
            <div style={{ backgroundColor: '#cc9966', width: '100%', maxWidth: 800, padding: '30px 30px 30px 100px ', border: '2px solid black', borderRadius: '20px' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '20px', padding:'0 80px 0 0'}}>Registration Form</h2>
                <Form
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 14 }}
                    layout="horizontal"
                    initialValues={{ size: componentSize }}
                    onValuesChange={onFormLayoutChange}
                    size={componentSize as SizeType}
                    onFinish={onFinish}
                >
                    <Form.Item label="First name" name="firstName" rules={[{ required: true, message: 'Please enter your first name' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Last name" name="lastName" rules={[{ required: true, message: 'Please enter your last name' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="E-mail address" name="email" rules={[{ required: true, type: 'email', message: 'Please enter a valid email address' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please enter your password' }]}>
                        <Input.Password />
                    </Form.Item>
                    <Form.Item label="Birth date" name="birthDate" rules={[{ required: true, message: 'Please select your birth date' }]}>
                        <DatePicker showTime />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 4, span: 14 }} >
                        <Button style={{backgroundColor:'#996633'}} type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default FormPage;
