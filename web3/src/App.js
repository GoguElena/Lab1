import React from 'react';
import './App.css';
import { Layout, Menu, Card } from 'antd';
import { HomeFilled, AppstoreFilled, SmileFilled } from '@ant-design/icons';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Importă și Routes
import { Form, Input, Button, Checkbox } from 'antd'; // Importă componentele necesare pentru formular

const { Header, Content, Footer, Sider } = Layout;
const { Meta } = Card;

// Componenta CustomCard pentru cardurile personalizate

const Home = () => {
    return (
        <div className="home-content">
            <div className="image-container">
                <img
                    src="https://beautyinsider.sg/wp-content/uploads/2022/05/Madagascar-Mountain-1024x630.jpg"
                    alt="Skin1004"
                    className="home-image"
                />
                <div className="image-overlay">
                    <h2 className="image-text">Skin1004</h2>
                </div>
            </div>
        </div>
    );
};


const ContentPage = () => (
    <div className="content-page">
        <h1>Products</h1>
        {/* Elimină Tabs și TabPane aici pentru tab-ul Content simplu */}
    </div>
);

// Restul codului pentru alte pagini Content (Cleanser, Toner, Cream, Serum)


const User = () => {
    const onFinish = (values) => {
        // Execută un alert când se trimite formularul
        alert('Form submitted successfully!');

        // Afișează datele introduse în formular în consolă
        console.log('Form values:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="user-container center-content"> {/* Aplică clasa center-content aici */}
            <h1>Log in </h1>
            <Form
                name="basic"
                labelCol={{ span: 40 }}
                wrapperCol={{ span: 30 }}
                style={{ maxWidth: 700 }}
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

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{ offset: 8, span: 16 }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 50, span: 16 }}>
                    {/* Adaugă atributul htmlType="submit" pentru a face ca butonul să trimită formularul */}
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};





const customItems = [
    { key: '1', icon: <HomeFilled />, label: 'Home', path: '/' },
    { key: '3', icon: <SmileFilled />, label: 'User', path: '/user' },
];

const submenuItems = [
    { key: 'sub-content-1', label: 'Cleanser', path: '/content/1' },
    { key: 'sub-content-2', label: 'Toner', path: '/content/2' },
    { key: 'sub-content-3', label: 'Cream', path: '/content/3' },
    { key: 'sub-content-4', label: 'Serum', path: '/content/4' },
];

const App = () => {
    return (
        <Router>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={(broken) => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                >
                    <div className="demo-logo-vertical" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        {customItems.map((item) => (
                            <Menu.Item key={item.key} icon={item.icon}>
                                <Link to={item.path}>{item.label}</Link>
                            </Menu.Item>

                        ))}
                        <Menu.SubMenu key="sub-content" icon={<AppstoreFilled />} title="Content">
                            {submenuItems.map((subItem) => (
                                <Menu.Item key={subItem.key}>
                                    <Link to={subItem.path}>{subItem.label}</Link>
                                </Menu.Item>
                            ))}
                        </Menu.SubMenu>
                    </Menu>
                </Sider>
                <Layout>
                    <Header
                        style={{
                            padding: 0,
                            background: '#fff',
                        }}
                    />
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div
                            style={{
                                padding: 24,
                                minHeight: 800,
                                background: '#fff',
                            }}
                        >
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/content" element={<ContentPage />} />
                                <Route path="/user" element={<User />} />
                                <Route
                                    path="/content/1"
                                    element={
                                        <div style={{ display: 'flex', overflowX: 'auto' }}>
                                            <Card
                                                hoverable
                                                style={{ width: 300, marginRight: 16 }}
                                                cover={<img alt="example" src="https://moonglow.md/wp-content/uploads/2022/07/skin1004_12__madagascar_centella_light_cleansing_oil-_-1642756088.webp" />}
                                            >
                                                <Meta title=" Madagascar Centella Ampoule Foam 125ml" description="Skin1004" />
                                            </Card>
                                            <Card
                                                hoverable
                                                style={{ width: 300, marginRight: 16 }}
                                                cover={<img alt="example" src="https://moonglow.md/wp-content/uploads/2022/12/Skin1004_Madagascar-Centella-Poremizing-Deep-Cleansing-Foam-125ml.webp" />}
                                            >
                                                <Meta title=" Madagascar Centella Poremizing Deep Cleansing Foam 125ml" description="Skin1004" />
                                            </Card>
                                            <Card
                                                hoverable
                                                style={{ width: 300,marginRight: 16 }}
                                                cover={<img alt="example" src="https://moonglow.md/wp-content/uploads/2022/08/Skin1004_Madagascar-Centella-Tea-Trica-BHA-Foam-125ml.webp" />}
                                            >
                                                <Meta title=" Madagascar Centella Tea-Trica BHA Foam 125ml" description="Skin1004" />
                                            </Card>
                                            <Card
                                                hoverable
                                                style={{ width: 300, marginRight: 16 }}
                                                cover={<img alt="example" src="https://moonglow.md/wp-content/uploads/2022/12/Skin1004_Madagascar-Centella-Tone-Brightening-Cleansing-Gel-Foam.webp" />}
                                            >
                                                <Meta title=" Madagascar Centella Tone Brightening Cleansing Gel Foam 125ml" description="Skin1004" />
                                            </Card>
                                            <Card
                                                hoverable
                                                style={{ width: 300, marginRight: 16 }}
                                                cover={<img alt="example" src="https://moonglow.md/wp-content/uploads/2022/07/skin1004_8__madagascar_centella_ampoule_foam-_-1642756080.webp" />}
                                            >
                                                <Meta title=" Madagascar Centella Ampoule Foam 125ml" description="Skin1004" />
                                            </Card>
                                        </div>
                                    }
                                />

                                <Route
                                    path="/content/2"
                                    element={
                                        <div style={{ display: 'flex', overflowX: 'auto' }}>
                                            <Card
                                                hoverable
                                                style={{ width: 300, marginRight: 16 }}
                                                cover={<img alt="example" src="https://moonglow.md/wp-content/uploads/2022/09/skin1004__madagascar_centella_toning_toner210ml-_-1659683531.webp" />}
                                            >
                                                <Meta title=" Madagascar Centella Toning Toner 210ml" description="Skin1004" />
                                            </Card>
                                            <Card
                                                hoverable
                                                style={{ width: 300, marginRight: 16 }}
                                                cover={<img alt="example" src="https://moonglow.md/wp-content/uploads/2022/12/Skin1004_Madagascar-Centella-Hyalu-Cica-Brightening-Toner.webp" />}
                                            >
                                                <Meta title=" Madagascar Centella Hyalu-Cica Brightening Toner 210 ml" description="Skin1004" />
                                            </Card>
                                            <Card
                                                hoverable
                                                style={{ width: 300, marginRight: 16 }}
                                                cover={<img alt="example" src="https://moonglow.md/wp-content/uploads/2023/03/Skin1004_Probio-Cica-Essence-Toner-210ml.webp" />}
                                            >
                                                <Meta title=" Madagascar Centella Probio-Cica Essence Toner 210ml" description="Skin1004" />
                                            </Card>
                                            <Card
                                                hoverable
                                                style={{ width: 300 }}
                                                cover={<img alt="example" src="https://moonglow.md/wp-content/uploads/2022/12/Skin1004_Madagascar-Centella-Poremizing-Clear-Toner-210ml.webp" />}
                                            >
                                                <Meta title=" Madagascar centella poremizing clear toner 210 ml" description="Skin1004" />
                                            </Card>
                                        </div>
                                    }
                                />

                                <Route
                                    path="/content/3"
                                    element={
                                        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                            <Card
                                                hoverable
                                                style={{ width: 300, marginRight: 16, marginBottom: 16 }}
                                                cover={<img alt="example" src="https://moonglow.md/wp-content/uploads/2022/09/skin1004__madagascar_centella_soothing_cream-_-1659683530.webp" />}
                                            >
                                                <Meta title=" Madagascar Centella Soothing Cream 75ml" description="Skin1004" />
                                            </Card>
                                            <Card
                                                hoverable
                                                style={{ width: 300, marginRight: 16, marginBottom: 16 }}
                                                cover={<img alt="example" src="https://moonglow.md/wp-content/uploads/2022/08/Skin1004_Madagascar-Centella-Poremizing-Light-Gel-Cream-75ml.webp" />}
                                            >
                                                <Meta title=" Madagascar Centella Poremizing Light Gel Cream 75ml" description="Skin1004" />
                                            </Card>
                                            <Card
                                                hoverable
                                                style={{ width: 300, marginRight: 16, marginBottom: 16 }}
                                                cover={<img alt="example" src="https://moonglow.md/wp-content/uploads/2022/12/Skin1004_Tone-Brightening-Capsule-Cream-75ml-1.webp" />}
                                            >
                                                <Meta title=" Madagascar Centella Tone Brightening Capsule Cream 75" description="Skin1004" />
                                            </Card>
                                            <Card
                                                hoverable
                                                style={{ width: 300, marginRight: 16, marginBottom: 16 }}
                                                cover={<img alt="example" src="https://moonglow.md/wp-content/uploads/2023/06/Skin1004_Madagascar-Centella-Tea-Trica-85-Cream-75-ml.webp" />}
                                            >
                                                <Meta title=" Madagascar Centella Tea-Trica B5 Cream 75ml" description="Skin1004" />
                                            </Card>
                                            <Card
                                                hoverable
                                                style={{ width: 300, marginRight: 16, marginBottom: 16 }}
                                                cover={<img alt="example" src="https://moonglow.md/wp-content/uploads/2022/09/skin1004__madagascar_centella_cream-_-1659683531.webp" />}
                                            >
                                                <Meta title=" Madagascar Centella Cream 75ml" description="Skin1004" />
                                            </Card>
                                            <Card
                                                hoverable
                                                style={{ width: 300, marginBottom: 16 }}
                                                cover={<img alt="example" src="https://moonglow.md/wp-content/uploads/2023/01/Skin1004_Madagascar-Centella-Hyalu-Cica-Water-Fit-Sun-Serum-50ml.webp" />}
                                            >
                                                <Meta title="  Madagascar Centella Hyalu-Cica Water-Fit Sun Serum 50ml" description="Skin1004" />
                                            </Card>
                                            <Card
                                                hoverable
                                                style={{ width: 300, marginRight: 16, marginBottom: 16 }}
                                                cover={<img alt="example" src="https://moonglow.md/wp-content/uploads/2023/03/Skin1004_Madagascar-Centella-Air-Fit-Suncream-Light-SPF-50-PA.webp" />}
                                            >
                                                <Meta title=" Madagascar Centella Air-Fit Suncream Light SPF30 PA++++ 50ml" description="Skin1004" />
                                            </Card>
                                            <Card
                                                hoverable
                                                style={{ width: 300, marginRight: 16, marginBottom: 16 }}
                                                cover={<img alt="example" src="https://moonglow.md/wp-content/uploads/2022/09/skin1004__madagascar_centella_air-_fit_suncream_plus_s_p_f50-_p_a-_-1659683733.webp" />}
                                            >
                                                <Meta title=" Madagascar Centella Air-Fit Suncream Plus SPF 50+ PA++++ 50ml" description="Skin1004" />
                                            </Card>
                                            <Card
                                                hoverable
                                                style={{ width: 300, marginBottom: 16 }}
                                                cover={<img alt="example" src="https://moonglow.md/wp-content/uploads/2023/12/SKIN1004-Madagascar-Centella-Probio-Cica-Enrich-Cream-50ml-1-min.jpg" />}
                                            >
                                                <Meta title=" Madagascar Centella Probio-Cica Enrich Cream 50ml" description="Skin1004" />
                                            </Card>
                                        </div>
                                    }
                                />
                                <Route
                                path="/content/4"
                                element={
                                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                        <Card
                                            hoverable
                                            style={{ width: 300, marginRight: 16, marginBottom: 16 }}
                                            cover={<img alt="example" src="https://moonglow.md/wp-content/uploads/2022/09/skin1004__madagascar_centella_ampoule100ml-_-1659683531.webp" />}
                                        >
                                            <Meta title=" Madagascar Centella Ampoule 55ml" description="Skin1004" />
                                        </Card>
                                        <Card
                                            hoverable
                                            style={{ width: 300, marginRight: 16, marginBottom: 16 }}
                                            cover={<img alt="example" src="https://moonglow.md/wp-content/uploads/2022/12/Skin1004_Madagascar-Centella-Hyalu-Cica-First-Ampoule.webp" />}
                                        >
                                            <Meta title=" Madagascar Hyalu-Cica First Ampoule 100ml
495,00 MDL 405,90 MDL" description="Skin1004" />
                                        </Card>
                                        <Card
                                            hoverable
                                            style={{ width: 300, marginRight: 16, marginBottom: 16 }}
                                            cover={<img alt="example" src="https://moonglow.md/wp-content/uploads/2022/12/Skin1004_Madagascar-Centella-Tea-Trica-Relief-Ampoule-100ml.webp" />}
                                        >
                                            <Meta title="  Madagascar Centella Tea-Trica Relief Ampoule 100ml" description="Skin1004" />
                                        </Card>
                                        <Card
                                            hoverable
                                            style={{ width: 300, marginRight: 16, marginBottom: 16 }}
                                            cover={<img alt="example" src="https://moonglow.md/wp-content/uploads/2023/09/Skin1004_Madagascar-Centella-Poremizing-Fresh-Ampoule-50ml.webp" />}
                                        >
                                            <Meta title=" Madagascar Centella Poremizing Fresh Ampoule 100ml" description="Skin1004" />
                                        </Card>
                                        <Card
                                            hoverable
                                            style={{ width: 300, marginRight: 16, marginBottom: 16 }}
                                            cover={<img alt="example" src="https://moonglow.md/wp-content/uploads/2023/03/Skin1004_Probio-Cica-Intensive-Ampoule-50ml.webp" />}
                                        >
                                            <Meta title=" Madagascar Centella Probio-Cica Intensive Ampoule 50ml
" description="Skin1004" />
                                        </Card>
                                        <Card
                                            hoverable
                                            style={{ width: 300, marginBottom: 16 }}
                                            cover={<img alt="example" src="https://moonglow.md/wp-content/uploads/2022/09/skin1004__madagascar_centella_hyalu-_cica_blue_serum-_-1659683333.webp" />}
                                        >
                                            <Meta title=" Madagascar Centella Hyalu-Cica Blue Serum 50ml" description="Skin1004" />
                                        </Card>
                                    </div>
                                }
                            />
                            </Routes>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©{new Date().getFullYear()} Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        </Router>
    );
};

export default App;
