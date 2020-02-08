// tslint:disable:no-http-string

import React, { FunctionComponent, Fragment } from 'react';
import ExternalLink from '../ExternalLink';
import { Row, Col, Divider } from 'antd';
import Favicon from '../../images/favicon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';

import './Footer.scss';

const socials: any = [
    {
        label: 'E-mailadres',
        icon: ['fas', 'envelope'],
        url: 'mailto:college@hageveld.nl'
    },
    {
        label: 'Instagram',
        icon: ['fab', 'instagram'],
        url: 'https://www.instagram.com/college.hageveld/'
    },
    {
        label: 'Facebook',
        icon: ['fab', 'facebook-square'],
        url: 'https://nl-nl.facebook.com/Hageveld/'
    },
    {
        label: 'LinkedIn',
        icon: ['fab', 'linkedin'],
        url: 'https://www.linkedin.com/school/college-hageveld/'
    },
    {
        label: 'YouTube',
        icon: ['fab', 'youtube'],
        url: 'https://www.youtube.com/channel/UCU0sMRDZcW6MGujyGeqHXFA'
    },
    {
        label: 'Telefoonnummer',
        icon: ['fas', 'phone'],
        url: 'tel:+310235100100'
    },
    {
        label: 'Locatie',
        icon: ['fas', 'map-marker-alt'],
        url: 'https://goo.gl/maps/GrvUce5ri1kZPBhN8'
    }
];

const position = [52.348391, 4.6321063];

const Footer: FunctionComponent = () => (
    <Fragment>
        <Divider />
        <Row>
            <Col
                xs={{ span: 22, offset: 1 }}
                sm={{ span: 22, offset: 1 }}
                md={{ span: 6, offset: 1 }}
                lg={{ span: 6, offset: 1 }}
                xl={{ span: 6, offset: 1 }}
                xxl={{ span: 6, offset: 1 }}
            >
                <div>
                    <img
                        width="32"
                        src={Favicon}
                        style={{ float: 'left' }}
                        alt="Hageveld Koepel Icon"
                    />
                    <h2>Hageveld</h2>
                </div>
                <div style={{ fontSize: '11px', marginTop: '5px', marginBottom: '10px' }}>
                    Atheneum College Hageveld is gelegen op landgoed Hageveld en is gehuisvest in
                    een gebouw dat voorheen een klein-seminarie herbergde. Het is een sfeervol
                    monumentaal gebouw dat wordt omzoomd door veel groen. Ook de sportvelden liggen
                    rondom de school. College Hageveld is het enige zelfstandige atheneum dat
                    Nederland telt.
                </div>
                <div>
                    <Row style={{ width: '100%' }}>
                        {socials.map((social, index) => (
                            <Col span={3} key={index}>
                                <ExternalLink to={social.url} aria-label={social.label}>
                                    <FontAwesomeIcon icon={social.icon} size="2x" color="#FA9B3D" />
                                </ExternalLink>
                            </Col>
                        ))}
                    </Row>
                </div>
                <div style={{ marginTop: '10px' }}>
                    <Row>
                        <Col span={12}>
                            <p>© {new Date().getFullYear()} Hageveld</p>
                        </Col>

                        <Col style={{ float: 'right' }} span={12}>
                            <ExternalLink to="http://www.hageveld.nl/Disclaimer/tabid/276/Default.aspx">
                                Disclaimer
                            </ExternalLink>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col
                xs={{ span: 0, offset: 2 }}
                sm={{ span: 0, offset: 2 }}
                md={{ span: 6, offset: 2 }}
                lg={{ span: 6, offset: 2 }}
                xl={{ span: 6, offset: 2 }}
                xxl={{ span: 6, offset: 2 }}
            >
                <Map center={position} zoom={15} height={200}>
                    <Marker
                        anchor={position}
                        payload={1}
                        onClick={({ event, anchor, payload }) => {}}
                    />
                </Map>
            </Col>
            <Col
                xs={{ span: 0, offset: 3 }}
                sm={{ span: 0, offset: 3 }}
                md={{ span: 6, offset: 3 }}
                lg={{ span: 6, offset: 3 }}
                xl={{ span: 6, offset: 3 }}
                xxl={{ span: 6, offset: 3 }}
            >
                <h2>Contact</h2>
                <div>
                    Atheneum College Hageveld
                    <br />
                    Hageveld 15
                    <br />
                    2102 LM Heemstede
                    <br />
                    <br />
                    Tel. 023 5 100 100
                    <br />
                    <br />
                    Mail college@hageveld.nl
                    <br />
                </div>
            </Col>
        </Row>
    </Fragment>
);

export default Footer;
