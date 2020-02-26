import React, { FunctionComponent, Fragment, useState } from 'react';
import { Row, Col, Button, Icon, Modal, Statistic, Table, Spin, Layout as AntLayout } from 'antd';
import { Link, navigate } from 'gatsby';
import Title from '../../components/Title';
import Geslacht from '../../components/Geslacht';
import { useSelector, useDispatch } from '../../hooks';
import { getAdminData } from '../../utils/api';
import { updateData } from '../../store/admin';
import AdminLayout from '../../components/Admin/Layout';
import * as zxcvbn from 'zxcvbn';

import '../../sass/index.scss';

const { Sider } = AntLayout;

const Admin: FunctionComponent<any> = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.admin.isLoggedIn);
    const stats = useSelector(state => state.admin.stats);
    const entries = useSelector(state => state.admin.entries);
    const updated = useSelector(state => state.admin.updated);
    const password = useSelector(state => state.admin.password);
    const [passModalVisible, setPassModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    if (!isLoggedIn) {
        navigate('/admin/inloggen');
    }

    if (!loading && isLoggedIn && Date.now() - updated > 5000) {
        setLoading(true);
        getAdminData().then(adminData => {
            dispatch(updateData(adminData.stats, adminData.entries));
            setLoading(false);
        });
    }

    if (isLoggedIn && zxcvbn(password).score < 3) {
        if (!passModalVisible) {
            setPassModalVisible(true);
            Modal.warning({
                title: 'Wachtwoord onveilig',
                content:
                    'Je wachtwoord is te onveilig, er moet een nieuw wachtwoord ingesteld worden.',
                okText: (
                    <Fragment>
                        Verder <Icon type="right" />
                    </Fragment>
                ),
                onOk: () => navigate('/admin/account')
            });
        }
    }

    return (
        <AdminLayout>
            {!isLoggedIn && <Title centered={true}>Inloggen</Title>}
            <Row style={{ marginLeft: '5%', marginRight: '5%' }}>
                <Col
                    style={{ paddingRight: '5%' }}
                    xs={{ span: 22, offset: 1 }}
                    sm={{ span: 22, offset: 1 }}
                    md={{ span: 22, offset: 1 }}
                    lg={{ span: 20, offset: 2 }}
                    xl={{ span: 20, offset: 2 }}
                    xxl={{ span: 20, offset: 2 }}
                >
                    {loading ? (
                        <Spin
                            indicator={
                                <Icon
                                    type="loading"
                                    style={{
                                        fontSize: '75px',
                                        textAlign: 'center',
                                        marginLeft: '75px',
                                        marginTop: '100px'
                                    }}
                                    spin={true}
                                />
                            }
                        />
                    ) : (
                        <Fragment>
                            <Row gutter={16} style={{ textAlign: 'center' }}>
                                <Col span={6}>
                                    <Statistic
                                        title="Gecontacteerd"
                                        value={stats.gecontacteerd}
                                        groupSeparator="."
                                        decimalSeparator=","
                                    />
                                </Col>
                                <Col span={6}>
                                    <Statistic
                                        title="Broer-zusregeling"
                                        value={stats.broerzusregeling}
                                        groupSeparator="."
                                        decimalSeparator=","
                                    />
                                </Col>
                                <Col span={6}>
                                    <Statistic
                                        title="vwo-advies"
                                        value={stats.vwoadvies}
                                        groupSeparator="."
                                        decimalSeparator=","
                                    />
                                </Col>
                                <Col span={6}>
                                    <Statistic
                                        title="Totaal"
                                        value={stats.totaal}
                                        groupSeparator="."
                                        decimalSeparator=","
                                    />
                                </Col>
                            </Row>
                            <Table
                                style={{ marginTop: '40px' }}
                                locale={{
                                    filterConfirm: 'Filter',
                                    filterReset: 'Reset',
                                    emptyText: 'Geen data'
                                }}
                                columns={[
                                    {
                                        title: 'ID',
                                        dataIndex: 'id',
                                        key: 'id',
                                        sorter: (a: any, b: any) => a.id - b.id
                                    },
                                    {
                                        title: 'Roepnaam',
                                        dataIndex: 'roepnaam',
                                        key: 'roepnaam'
                                    },
                                    {
                                        title: 'Officiële naam',
                                        dataIndex: 'naam',
                                        key: 'naam'
                                    },
                                    {
                                        title: 'Geslacht',
                                        dataIndex: 'geslacht',
                                        key: 'geslacht',
                                        filters: [
                                            {
                                                text: 'Man',
                                                value: 'M'
                                            },
                                            {
                                                text: 'Vrouw',
                                                value: 'V'
                                            },
                                            {
                                                text: 'Overig',
                                                value: 'X'
                                            }
                                        ],
                                        filterMultiple: false,
                                        onFilter: (value, record) => record.geslacht === value,
                                        render: (geslacht: string) => <Geslacht type={geslacht} />
                                    },
                                    {
                                        title: 'Geboortedatum',
                                        dataIndex: 'geboortedatum',
                                        key: 'geboortedatum'
                                    },
                                    {
                                        title: 'Advies',
                                        dataIndex: 'advies',
                                        key: 'advies',
                                        filters: [
                                            {
                                                text: 'vwo',
                                                value: 'vwo'
                                            },
                                            {
                                                text: 'havo/vwo',
                                                value: 'havo/vwo'
                                            }
                                        ],
                                        filterMultiple: false,
                                        onFilter: (value, record) => record.advies === value
                                    },
                                    {
                                        title: 'Tijd',
                                        dataIndex: 'tijd',
                                        key: 'tijd'
                                    },
                                    {
                                        title: <Icon type="phone" />,
                                        dataIndex: 'gecontacteerd',
                                        key: 'gecontacteerd',
                                        filters: [
                                            {
                                                text: 'Gecontacteerd',
                                                value: '1'
                                            },
                                            {
                                                text: 'Niet gecontacteerd',
                                                value: '0'
                                            }
                                        ],
                                        filterMultiple: false,
                                        onFilter: (value, record) => record.gecontacteerd === value,
                                        render: (gecontacteerd: string) =>
                                            gecontacteerd === '1' ? (
                                                <Icon
                                                    type="check-circle"
                                                    theme="twoTone"
                                                    twoToneColor="#52c41a"
                                                    style={{ fontSize: '24px' }}
                                                />
                                            ) : (
                                                <Icon
                                                    type="close-circle"
                                                    theme="twoTone"
                                                    twoToneColor="#f5222d"
                                                    style={{ fontSize: '24px' }}
                                                />
                                            )
                                    },
                                    {
                                        title: '',
                                        dataIndex: 'actions',
                                        key: 'actions'
                                    }
                                ]}
                                dataSource={entries.map((entry, index) => {
                                    const naam = `${entry.voornamen}${
                                        entry.tussenvoegsel ? ` ${entry.tussenvoegsel} ` : ' '
                                    }${entry.achternaam}`;
                                    return {
                                        key: index,
                                        id: entry.id,
                                        roepnaam: entry.roepnaam,
                                        naam,
                                        geslacht: entry.geslacht,
                                        geboortedatum: entry.geboortedatum,
                                        advies: entry.advies,
                                        tijd: entry.timestamp,
                                        gecontacteerd: entry.gecontacteerd,
                                        actions: (
                                            <Fragment>
                                                <Link to={`/admin/info/#${entry.id}`}>
                                                    <Button
                                                        type="primary"
                                                        shape="circle"
                                                        icon="right"
                                                    />
                                                </Link>
                                            </Fragment>
                                        )
                                    };
                                })}
                            />
                        </Fragment>
                    )}
                </Col>
            </Row>
        </AdminLayout>
    );
};

export default Admin;
