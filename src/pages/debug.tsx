import React, { FunctionComponent, Fragment } from 'react';
import Layout from '../components/Layout';
import { Row, Col, Button, Icon, Checkbox, Alert } from 'antd';
import { Link } from 'gatsby';
import Title from '../components/Title';
import { useSelector, useDispatch } from '../hooks';
import { switchApiMock, switchDataMock, disableTimeCheck } from '../store/debug';
import moment from 'moment';

import '../sass/index.scss';

const Debug: FunctionComponent<any> = () => {
    const apiMockEnabled = useSelector(state => state.debug.mockAPI);
    const dataMockEnabled = useSelector(state => state.debug.mockData);
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
                    <Checkbox checked={apiMockEnabled} onChange={() => dispatch(switchApiMock())}>
                        Verzend data niet naar server
                    </Checkbox>
                    <br /> <br />
                    <Checkbox checked={dataMockEnabled} onChange={() => dispatch(switchDataMock())}>
                        Vul formulier met willekeurige data
                    </Checkbox>
                    <br /> <br />
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
