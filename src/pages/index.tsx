import React, { FunctionComponent, Fragment } from 'react';
import Layout from '../components/Layout';
import { Row, Col, Button, Carousel, Icon } from 'antd';
import { Link } from 'gatsby';
import Title from '../components/Title';
import { useSelector } from '../hooks';

import Hageveld from '../images/hageveld_front.jpg';
import Kluisjes from '../images/1_kluisjes.jpg';
import LO_Instr from '../images/2_lo_instr.jpg';
import Mediath from '../images/3_mediath.jpg';
import Lokaal from '../images/4_lokaal.jpg';

import '../sass/index.scss';

const Index: FunctionComponent<any> = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    return (
        <Layout>
            <Title centered={true}>Hageveld</Title>
            <Row style={{ marginLeft: '5%', marginRight: '5%' }}>
                <Col span={12} style={{ paddingRight: '5%' }}>
                    <Carousel autoplay={true}>
                        <div>
                            <img width="100%" height="100%" src={Hageveld} alt="Hageveld" />
                        </div>
                        <div>
                            <img width="100%" height="100%" src={Kluisjes} alt="Kluisjes" />
                        </div>
                        <div>
                            <img width="100%" height="100%" src={LO_Instr} alt="LO Instructies" />
                        </div>
                        <div>
                            <img width="100%" height="100%" src={Mediath} alt="Mediatheek" />
                        </div>
                        <div>
                            <img width="100%" height="100%" src={Lokaal} alt="Lokaal" />
                        </div>
                    </Carousel>
                </Col>
                <Col span={12}>
                    <h1>Welkom</h1>
                    <div>Schrijf je nu in voor de brugklas!</div>
                    <br />
                    <Link to="/aanmelden">
                        <Button type="primary" disabled={true}>
                            <Icon type="edit" /> Aanmelden
                        </Button>
                    </Link>
                    <br />
                    <br />
                    <i>Aanmelden is mogelijk vanaf 10 februari 2020.</i>
                </Col>
            </Row>
        </Layout>
    );
};

export default Index;
