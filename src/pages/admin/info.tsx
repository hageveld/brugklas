import React, { FunctionComponent, Fragment, useState } from 'react';
import { Row, Col, Button, Icon, Spin, Breadcrumb, Popconfirm } from 'antd';
import { Link, navigate } from 'gatsby';
import Title from '../../components/Title';
import Comments from '../../components/Comments';
import AdminLayout from '../../components/Admin/Layout';
import { useSelector, useDispatch } from '../../hooks';
import moment from 'moment';
import { getAdminData, viewEntry, deleteEntry, updateContactedEntry } from '../../utils/api';
import { updateData, removeEntry, updateContacted } from '../../store/admin';

import '../../sass/index.scss';

const ViewEntry: FunctionComponent<any> = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.admin.isLoggedIn);
    const entries = useSelector(state => state.admin.entries);
    const updated = useSelector(state => state.admin.updated);
    const [loading, setLoading] = useState(false);
    const [retrievedData, setRetrievedData] = useState(false);
    const id = location.hash.substring(1);
    const entry = entries.find((entryData: any) => entryData.id.toString() === id);

    if (!entry) {
        navigate('/admin');
    }

    if (!retrievedData) {
        setRetrievedData(true);
        viewEntry(id);
    }

    const adres = `${entry.straat} ${entry.huisnummer}, ${entry.postcode} ${entry.woonplaats}`;
    const basisschool = `${entry['basisschool-naam']} (${entry['basisschool-locatie']})`;
    const leerkracht = `${entry['basisschool-leerkracht-naam']} (${
        entry['basisschool-leerkracht-geslacht']
    })`;
    const verzorger1adres = `${entry['verzorger-1-straat']} ${entry['verzorger-1-huisnummer']}, ${
        entry['verzorger-1-postcode']
    } ${entry['verzorger-1-woonplaats']}`;
    const verzorger2adres = `${entry['verzorger-2-straat']} ${entry['verzorger-2-huisnummer']}, ${
        entry['verzorger-2-postcode']
    } ${entry['verzorger-2-woonplaats']}`;

    const remove = () => {
        deleteEntry(entry.id).then(() => {
            dispatch(removeEntry(entry.id));
            navigate('/admin');
        });
    };

    const changeContacted = (contacted: boolean) => {
        updateContactedEntry(entry.id, contacted).then(() => {
            dispatch(updateContacted(entry.id, contacted));
        });
    };

    return (
        <AdminLayout>
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
                            <Breadcrumb>
                                <Breadcrumb.Item>
                                    <Link to="/admin">Aanmeldingen</Link>
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>#{id}</Breadcrumb.Item>
                            </Breadcrumb>
                            <br />
                            <Popconfirm
                                title="Wilt u deze aanmelding verwijderen?"
                                okText="Ja"
                                cancelText="Nee"
                                onConfirm={() => remove()}
                            >
                                <Button type="danger" style={{ float: 'right' }}>
                                    <Icon type="delete" />
                                    Verwijder
                                </Button>
                            </Popconfirm>
                            <Popconfirm
                                title="Is de verzender van deze aanmelding gecontacteerd?"
                                okText="Ja"
                                cancelText="Nee"
                                onCancel={() => changeContacted(false)}
                                onConfirm={() => changeContacted(true)}
                            >
                                <Button
                                    type="primary"
                                    style={{ float: 'right', marginRight: '15px' }}
                                >
                                    <Icon type="phone" />
                                    Gecontacteerd
                                </Button>
                            </Popconfirm>
                            <b>Gecontacteerd</b>: {entry.gecontacteerd === '1' ? 'Ja' : 'Nee'}
                            <br />
                            <br />
                            <b>Roepnaam</b>: {entry.roepnaam}
                            <br />
                            <b>Voornamen</b>: {entry.voornamen}
                            <br />
                            <b>Tussenvoegsel</b>: {entry.tussenvoegsel}
                            <br />
                            <b>Achternaam</b>: {entry.achternaam}
                            <br />
                            <b>Geslacht</b>: {entry.geslacht}
                            <br />
                            <b>Telefoonnummer</b>: {entry.telefoonnummer}
                            <br />
                            <b>BSN</b>: {entry.bsn}
                            <br />
                            <b>Geboortedatum</b>: {entry.geboortedatum}
                            <br />
                            <b>Geboorteplaats</b>: {entry.geboorteplaats}
                            <br />
                            <b>Adres</b>: {adres}
                            <br />
                            <br />
                            <i>Basisschool</i>
                            <br />
                            <b>Advies</b>: {entry.advies}
                            <br />
                            <b>Basisschool</b>: {basisschool}
                            <br />
                            <b>Leerkracht</b>: {leerkracht}
                            <br />
                            <br />
                            <i>Ouder/verzorger 1</i>
                            <br />
                            <b>Voorletters</b>: {entry['verzorger-1-voorletters']}
                            <br />
                            <b>Tussenvoegsel</b>: {entry['verzorger-1-tussenvoegsel']}
                            <br />
                            <b>Achternaam</b>: {entry['verzorger-1-achternaam']}
                            <br />
                            <b>Geslacht</b>: {entry['verzorger-1-geslacht']}
                            <br />
                            <b>Telefoonnummer</b>: {entry['verzorger-1-telefoonnummer']}
                            <br />
                            <b>E-mailadres</b>: {entry['verzorger-1-email']}
                            <br />
                            <b>Adres</b>: {verzorger1adres}
                            <br />
                            <br />
                            <i>Ouder/verzorger 2</i>
                            <br />
                            <b>Voorletters</b>: {entry['verzorger-2-voorletters']}
                            <br />
                            <b>Tussenvoegsel</b>: {entry['verzorger-2-tussenvoegsel']}
                            <br />
                            <b>Achternaam</b>: {entry['verzorger-2-achternaam']}
                            <br />
                            <b>Geslacht</b>: {entry['verzorger-2-geslacht']}
                            <br />
                            <b>Telefoonnummer</b>: {entry['verzorger-2-telefoonnummer']}
                            <br />
                            <b>E-mailadres</b>: {entry['verzorger-2-email']}
                            <br />
                            <b>Adres</b>: {verzorger2adres}
                            <br />
                            <br />
                            <i>Extra informatie</i>
                            <br />
                            <b>Kinderen op Hageveld</b>: {entry['aantal-kinderen-hageveld']}
                            <br />
                            <b>Toestemming adres SRH</b>: {entry['adres-toestemming-SRH']}
                            <br />
                            <b>Toestemming plaatsing website</b>:{' '}
                            {entry['toestemming-plaatsing-website']}
                            <br />
                            <br />
                            <br />
                            <i>Ingevuld op {entry.timestamp}</i>
                            <br />
                            <Comments id={entry.id} />
                        </Fragment>
                    )}
                </Col>
            </Row>
        </AdminLayout>
    );
};

export default ViewEntry;
