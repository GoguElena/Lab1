import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ProductPage from './ProductPage';
import FormPage from './FormPage';
import LoginPage from './LoginPage';
import { formData, loginData } from '../date';

const { Header, Content } = Layout;

const MenuComponent: React.FC = () => {
    return (
        <Layout className="custom-layout" >
            <Header style={{backgroundColor:'#663300'}}>
                <div className="logo" style={{maxHeight: '90%'}}/>
                <Menu style={{backgroundColor:'#663300', color:'white'}} mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" >
                        <Link style={{color:'white'}} to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link style={{color:'white'}} to="/about">About</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link style={{color:'white'}} to="/Product">Products</Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Link style={{color:'white'}} to="/form">Sign in</Link>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <Link style={{color:'white'}} to="/login">Login</Link>
                    </Menu.Item>
                </Menu>
            </Header>
            <Content className="content-container">
                <div className="site-layout-content" >
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/Product" element={<ProductPage />} />
                        <Route path="/form" element={<FormPage />} />
                        <Route path="/login" element={<LoginPage />} /> {/* Eliminăm trimitera datelor aici */}
                    </Routes>
                </div>
            </Content>
        </Layout>
    );
};

export default MenuComponent;
