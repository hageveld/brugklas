import React, { FunctionComponent, Fragment } from 'react';
import Layout from '../components/Layout';
import { Row, Col, Button, Icon, Checkbox, Alert } from 'antd';
import { Link } from 'gatsby';
import Title from '../components/Title';
import { useSelector, useDispatch } from '../hooks';
import { disableTimeCheck } from '../store/debug';
import moment from 'moment';

import '../sass/index.scss';

const Debug: FunctionComponent<any> = () => {
    const timeCheckDisabled = useSelector(state => state.debug.disableTimeCheck);
    const dispatch = useDispatch();
    const currentTime = moment().format('DD-MM-YYYY HH:mm:ss Z');

    return (
        <Layout>
            <Title centered={true}>Debugopties</Title>
            <Row style={{ marginLeft: '5%', marginRight: '5%' }}>
                <Col span={20} offset={2}>
                    <Alert
                        message="Waarschuwing"
                        description="Deze opties zijn alleen bedoeld voor gebruikers met expliciete instructies of technische kennis."
                        type="warning"
                        showIcon={true}
                    />
                    <br />
                    <h1>Informatie</h1>
                    <b>Tijd</b>: {currentTime}
                    <br />
                    <b>Schermgrootte</b>: {screen.width} x {screen.height} px
                    <br />
                    <br />
                    <h1>Opties</h1>
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
