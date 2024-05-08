import React, { useState, useEffect } from 'react';
import { Layout, Menu, Button } from 'antd';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    HomeOutlined,
    IdcardOutlined,
    PlusCircleOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

// Interfață pentru utilizatori
interface UserModel {
    id: number;
    username: string;
    password: string;
}

const App: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [authenticatedUser, setAuthenticatedUser] = useState<UserModel | null>(null);
    const [activeMenuItem, setActiveMenuItem] = useState<string>('1'); // Menține evidența elementului de meniu activ

    // Utilizatori simulati
    const mockUsers: UserModel[] = [
        { id: 1, username: 'user1', password: 'pass1' },
        { id: 2, username: 'user2', password: 'pass2' },
        { id: 3, username: 'user3', password: 'pass3' },
    ];

    useEffect(() => {
        // Obține utilizatorul autentificat din Local Storage la încărcarea componentei
        const storedUser = JSON.parse(localStorage.getItem('authenticatedUser') || '{}') as UserModel;
        if (storedUser && storedUser.id) {
            setAuthenticatedUser(storedUser);
        }
    }, []);

    const handleMenuClick = (menuItem: any) => {
        setActiveMenuItem(menuItem.key);
        if (menuItem.key === '1') {
            setShowLoginForm(false);
        } else if (menuItem.key === '2') {
            setShowLoginForm(true);
        } else if (menuItem.key === '3') {
            setShowLoginForm(false);
        }
    };

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleLogin = () => {
        const user = mockUsers.find(u => u.username === username && u.password === password);
        if (user) {
            setMessage('Autentificare reușită!');
            localStorage.setItem('authenticatedUser', JSON.stringify(user));
            setAuthenticatedUser(user);
        } else {
            setMessage('Nume de utilizator sau parolă incorecta!');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('authenticatedUser');
        setAuthenticatedUser(null);
        setMessage('');
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    selectedKeys={[activeMenuItem]} // Folosește elementul activ din meniu
                    onClick={handleMenuClick}
                >
                    <Menu.Item key="1" icon={<HomeOutlined />} title="Home">
                        <span style={{ color: '#fff' }}>Home</span>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<PlusCircleOutlined />} title="Create account">
                        <span style={{ color: '#fff' }}>Create Account</span>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<IdcardOutlined />} title="User">
                        <span style={{ color: '#fff' }}>User</span>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    <Button type="text" icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} onClick={() => setCollapsed(!collapsed)}
                    />
                    {authenticatedUser ? (
                        <Button className="button" type="text" onClick={handleLogout}>
                            Logout
                        </Button>
                    ) : null}
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        minHeight: 'calc(100vh - 64px)',
                    }}
                >
                    <div className="container">
                        {showLoginForm ? (
                            <div className="login-form-container">
                                <h3>Log In</h3>
                                <div className="input-container">
                                    <label htmlFor="username">Username:</label>
                                    <input type="text" id="username" value={username} onChange={handleUsernameChange} />
                                </div>
                                <div className="input-container">
                                    <label htmlFor="password">Password:</label>
                                    <input type="password" id="password" value={password} onChange={handlePasswordChange} />
                                </div>
                                <button className="button" type="button" onClick={handleLogin}>Submit</button>
                                <p style={{ color: message === 'Autentificare reușită!' ? 'green' : 'red' }}>{message}</p>
                            </div>
                        ) : (
                            <>
                                {activeMenuItem === '1' && authenticatedUser && authenticatedUser.username && (
                                    <div>
                                        <h1>Welcome, {authenticatedUser.username}!</h1>
                                        <p>You are logged in.</p>
                                    </div>
                                )}
                                {activeMenuItem === '3' && authenticatedUser && authenticatedUser.username && (
                                    <div>
                                        <p>ID: {authenticatedUser.id}</p>
                                        <p>Password: {authenticatedUser.password}</p>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default App;
