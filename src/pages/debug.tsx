import React, { FunctionComponent, Fragment } from 'react';
import Layout from '../components/Layout';
import { Row, Col, Button, Icon, Checkbox } from 'antd';
import { Link } from 'gatsby';
import Title from '../components/Title';
import { useSelector, useDispatch } from '../hooks';
import { disableTimeCheck } from '../store/debug';

import '../sass/index.scss';

const Debug: FunctionComponent<any> = () => {
    const timeCheckDisabled = useSelector(state => state.debug.disableTimeCheck);
    const dispatch = useDispatch();

    return (
        <Layout>
            <Title centered={true}>Debugopties</Title>
            <Row style={{ marginLeft: '5%', marginRight: '5%' }}>
                <Col span={24}>
                    <h1>Welkom</h1>
                    <Checkbox
                        checked={timeCheckDisabled}
                        onChange={() => dispatch(disableTimeCheck())}
                    >
                        Omzeil tijdscontrole formulier
                    </Checkbox>
                </Col>
            </Row>
        </Layout>
    );
};

export default Debug;
