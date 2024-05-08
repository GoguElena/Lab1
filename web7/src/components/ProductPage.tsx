import React from 'react';
import { Card, Row, Col } from 'antd';

const { Meta } = Card;

const ProductPage: React.FC = () => {
    // Array cu date pentru carduri (titlu, descriere și imagine)
    const products = [
        { title: 'Cleansing Oil', description: '200 ml', image: 'https://moonglow.md/wp-content/uploads/2022/07/skin1004_12__madagascar_centella_light_cleansing_oil-_-1642756088.webp' },
        { title: ' Ampoule Foam', description: '125 ml', image: 'https://moonglow.md/wp-content/uploads/2022/07/skin1004_8__madagascar_centella_ampoule_foam-_-1642756080.webp' },
        { title: 'Cleansing Gel Foam', description: '125 ml', image: 'https://moonglow.md/wp-content/uploads/2022/12/Skin1004_Madagascar-Centella-Tone-Brightening-Cleansing-Gel-Foam.webp' },
        { title: 'Cleansing Foam ', description: '125 ml', image: 'https://moonglow.md/wp-content/uploads/2022/12/Skin1004_Madagascar-Centella-Poremizing-Deep-Cleansing-Foam-125ml.webp' },
        { title: 'Toning Toner', description: '400 ml', image: 'https://moonglow.md/wp-content/uploads/2022/09/skin1004__madagascar_centella_toning_toner400ml-_-1659683531.webp' },
        { title: 'Brightening Toner', description: '210 ml', image: 'https://moonglow.md/wp-content/uploads/2022/12/Skin1004_Madagascar-Centella-Hyalu-Cica-Brightening-Toner.webp' },
        { title: 'Poremizing Toner', description: '210 ml', image: 'https://moonglow.md/wp-content/uploads/2022/12/Skin1004_Madagascar-Centella-Poremizing-Clear-Toner-210ml.webp' },
        { title: 'Purifying Toner ', description: '210 ml', image: 'https://moonglow.md/wp-content/uploads/2022/12/Skin1004_Madagascar-Centella-Tea-Trica-Purifying-Toner-210ml.webp' },
        { title: 'Centella Ampoule', description: '100 ml', image: 'https://moonglow.md/wp-content/uploads/2022/09/skin1004__madagascar_centella_ampoule100ml-_-1659683531.webp' },
        { title: 'Brightening Ampoule', description: '100 ml', image: 'https://moonglow.md/wp-content/uploads/2022/12/Skin1004_Madagascar-Centella-Tone-Brightening-Capsule-Ampoule.webp' },
        { title: 'Poremizing Ampoule', description: '50 ml', image: 'https://moonglow.md/wp-content/uploads/2023/09/Skin1004_Madagascar-Centella-Poremizing-Fresh-Ampoule-50ml.webp' },
        { title: 'Relief Ampoule', description: '100 ml', image: 'https://moonglow.md/wp-content/uploads/2022/12/Skin1004_Madagascar-Centella-Tea-Trica-Relief-Ampoule-100ml.webp' },
        { title: 'Soothing Cream ', description: '75 ml', image: 'https://moonglow.md/wp-content/uploads/2022/09/skin1004__madagascar_centella_soothing_cream-_-1659683530.webp' },
        { title: 'Centella Cream', description: '75 ml', image: 'https://moonglow.md/wp-content/uploads/2022/09/skin1004__madagascar_centella_cream-_-1659683531.webp' },
        { title: 'Water-Fit Sun Serum', description: '50 ml', image: 'https://moonglow.md/wp-content/uploads/2023/03/Skin1004_Madagascar-Centella-Air-Fit-Suncream-Light-SPF-50-PA.webp' },
        { title: 'Light SPF30 PA++++', description: '50 ml', image: 'https://moonglow.md/wp-content/uploads/2023/01/Skin1004_Madagascar-Centella-Hyalu-Cica-Water-Fit-Sun-Serum-50ml.webp' },

    ];

    return (
        <div style={{ padding: '30px' }} >
            <Row gutter={[14, 14]}>
                {products.map((product, index) => (
                    <Col key={index} xs={24} sm={12} md={8} lg={6}>
                        <Card
                            hoverable
                            style={{ width: '80%' }}
                            cover={<img alt={product.title} src={product.image} />}
                        >
                            <Meta title={product.title} description={product.description} />
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default ProductPage;
