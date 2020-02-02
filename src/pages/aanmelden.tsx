/* tslint:disable:max-classes-per-file */
/* tslint:disable:no-string-literal */
import React, { FunctionComponent, Component, useState } from 'react';
import Layout from '../components/Layout';
import Stepper from '../components/Stepper';
import {
    Row,
    Col,
    Button,
    Input,
    Result,
    Icon,
    Form,
    Select,
    Tooltip,
    Alert,
    Checkbox,
    DatePicker
} from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import Title from '../components/Title';
import { sendFormData } from '../utils/api';
import { validateBSN } from '../utils/bsn';

import locale from 'antd/es/date-picker/locale/nl_NL';

const { Option } = Select;
const { Step } = Stepper;

class Persoonsgegevens extends Component<FormComponentProps & any> {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.props.setFormData({ ...this.props.formData, ...values });
                this.props.forward();
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 }
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 20 }
            }
        };

        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '31'
        })(
            <Select style={{ width: 70 }}>
                <Option value="1">+1</Option>
                <Option value="31">+31</Option>
            </Select>
        );

        return (
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                <Form.Item label="Roepnaam">
                    {getFieldDecorator('roepnaam', {
                        initialValue: this.props.formData['roepnaam'],
                        rules: [
                            {
                                required: true,
                                message: 'Vul alsjeblieft je roepnaam in.',
                                whitespace: true
                            }
                        ]
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="Officiële voornamen">
                    {getFieldDecorator('voornamen', {
                        initialValue: this.props.formData['voornamen'],
                        rules: [
                            {
                                required: true,
                                message: 'Vul alsjeblieft je voornamen in.',
                                whitespace: true
                            }
                        ]
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="Tussenvoegsel">
                    {getFieldDecorator('tussenvoegsel', {
                        initialValue: this.props.formData['tussenvoegsel'],
                        rules: [
                            {
                                whitespace: true
                            }
                        ]
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="Achternaam">
                    {getFieldDecorator('achternaam', {
                        rules: [
                            {
                                required: true,
                                message: 'Vul alsjeblieft je achternaam in.',
                                whitespace: true
                            }
                        ]
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="Geslacht">
                    {getFieldDecorator('geslacht', {
                        rules: [{ required: true, message: 'Vul alsjeblieft je geslacht in.' }]
                    })(
                        <Select>
                            <Option value="M">Man</Option>
                            <Option value="V">Vrouw</Option>
                            <Option value="X">Overig</Option>
                        </Select>
                    )}
                </Form.Item>
                <Form.Item
                    label={
                        <span>
                            Telefoonnummer&nbsp;
                            <Tooltip title="Telefoonnummer ouder/verzorger voor calamiteiten">
                                <Icon type="question-circle-o" />
                            </Tooltip>
                        </span>
                    }
                >
                    {getFieldDecorator('telefoonnummer', {
                        rules: []
                    })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
                </Form.Item>
                <Form.Item label="BSN">
                    {getFieldDecorator('bsn', {
                        rules: [
                            {
                                required: true,
                                message: 'Vul alsjeblieft je BSN in.'
                            },
                            {
                                message: 'Vul alsjeblieft een geldig BSN in.',
                                validator: (rule, value, callback) => {
                                    const validBSN = validateBSN(value);
                                    if (!validBSN) {
                                        callback(false);
                                        return;
                                    }
                                    callback();
                                }
                            }
                        ]
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="Geboortedatum">
                    {getFieldDecorator('geboortedatum', {
                        rules: [
                            {
                                type: 'object',
                                required: true,
                                message: 'Vul alsjeblieft je geboortedatum in.'
                            }
                        ]
                    })(<DatePicker format={'DD-MM-YYYY'} locale={locale} />)}
                </Form.Item>
                <Form.Item label="Geboorteplaats">
                    {getFieldDecorator('geboorteplaats', {
                        rules: [
                            {
                                required: true,
                                message: 'Vul alsjeblieft je geboorteplaats in.',
                                whitespace: true
                            }
                        ]
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="Postcode">
                    {getFieldDecorator('postcode', {
                        rules: [
                            {
                                required: true,
                                message: 'Vul alsjeblieft je postcode in.',
                                whitespace: true
                            }
                        ]
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="Huisnummer">
                    {getFieldDecorator('huisnummer', {
                        rules: [
                            {
                                required: true,
                                message: 'Vul alsjeblieft je huisnummer in.',
                                whitespace: true
                            }
                        ]
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="Straat">
                    {getFieldDecorator('straat', {
                        rules: [
                            {
                                required: true,
                                message: 'Vul alsjeblieft je straat in.',
                                whitespace: true
                            }
                        ]
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="Woonplaats">
                    {getFieldDecorator('woonplaats', {
                        rules: [
                            {
                                required: true,
                                message: 'Vul alsjeblieft je woonplaats in.',
                                whitespace: true
                            }
                        ]
                    })(<Input />)}
                </Form.Item>
                <Form.Item style={{ float: 'right' }}>
                    <Button type="primary" htmlType="submit" style={{ float: 'right' }}>
                        Volgende <Icon type="caret-right" />
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

class Basisschool extends Component<FormComponentProps & any> {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.props.setFormData({ ...this.props.formData, ...values });
                this.props.forward();
            }
        });
    };

    back = e => {
        this.props.back();
    };

    render() {
        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 }
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 20 }
            }
        };

        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '31'
        })(
            <Select style={{ width: 70 }}>
                <Option value="1">+1</Option>
                <Option value="31">+31</Option>
            </Select>
        );

        return (
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                <Form.Item label="Naam basisschool">
                    {getFieldDecorator('basisschool-naam', {
                        rules: [
                            {
                                required: true,
                                message: 'Vul alsjeblieft de naam van de basisschool in.',
                                whitespace: true
                            }
                        ]
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="Naam leerkracht">
                    {getFieldDecorator('basisschool-leerkracht-naam', {
                        rules: [
                            {
                                required: true,
                                message: 'Vul alsjeblieft de naam van de leerkracht in.',
                                whitespace: true
                            }
                        ]
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="Geslacht">
                    {getFieldDecorator('basisschool-leerkracht-geslacht', {
                        rules: [
                            {
                                required: true,
                                message: 'Vul alsjeblieft het geslacht van de leerkracht in.'
                            }
                        ]
                    })(
                        <Select>
                            <Option value="M">Man</Option>
                            <Option value="V">Vrouw</Option>
                        </Select>
                    )}
                </Form.Item>
                <Form.Item
                    label={
                        <span>
                            Telefoonnummer&nbsp;
                            <Tooltip title="Telefoonnummer ouder/verzorger voor calamiteiten">
                                <Icon type="question-circle-o" />
                            </Tooltip>
                        </span>
                    }
                >
                    {getFieldDecorator('basisschool-leerkracht-telefoonnummer', {
                        rules: []
                    })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
                </Form.Item>
                <Form.Item style={{ float: 'left' }}>
                    <Button type="primary" style={{ float: 'left' }} onClick={this.back}>
                        <Icon type="caret-left" /> Vorige
                    </Button>
                </Form.Item>
                <Form.Item style={{ float: 'right' }}>
                    <Button type="primary" htmlType="submit" style={{ float: 'right' }}>
                        Volgende <Icon type="caret-right" />
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

class Verzorgers extends Component<FormComponentProps & any> {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.props.setFormData({ ...this.props.formData, ...values });
                this.props.forward();
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 }
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 20 }
            }
        };

        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '31'
        })(
            <Select style={{ width: 70 }}>
                <Option value="1">+1</Option>
                <Option value="31">+31</Option>
            </Select>
        );

        return (
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                <b>Ouder/verzorger 1</b>
                <Form.Item label="Voorletters">
                    {getFieldDecorator('verzorger-1-voorletters', {
                        rules: [
                            {
                                required: true,
                                message: 'Vul alsjeblieft je voorletters in.',
                                whitespace: true
                            }
                        ]
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="Tussenvoegsel">
                    {getFieldDecorator('verzorger-1-tussenvoegsel', {
                        rules: [{ whitespace: true }]
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="Achternaam">
                    {getFieldDecorator('verzorger-1-achternaam', {
                        rules: [
                            {
                                required: true,
                                message: 'Vul alsjeblieft je achternaam in.',
                                whitespace: true
                            }
                        ]
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="Geslacht">
                    {getFieldDecorator('verzorger-1-geslacht', {
                        rules: [
                            {
                                required: true,
                                message: 'Vul alsjeblieft het geslacht van de leerkracht in.'
                            }
                        ]
                    })(
                        <Select>
                            <Option value="M">Man</Option>
                            <Option value="V">Vrouw</Option>
                        </Select>
                    )}
                </Form.Item>
                <Form.Item
                    label={
                        <span>
                            Telefoonnummer&nbsp;
                            <Tooltip title="Telefoonnummer ouder/verzorger voor calamiteiten">
                                <Icon type="question-circle-o" />
                            </Tooltip>
                        </span>
                    }
                >
                    {getFieldDecorator('verzorger-1-telefoonnummer', {
                        rules: []
                    })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
                </Form.Item>
                <Form.Item label="Postcode">
                    {getFieldDecorator('postcode', {
                        rules: [
                            {
                                required: true,
                                message: 'Vul alsjeblieft je postcode in.',
                                whitespace: true
                            }
                        ]
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="Huisnummer">
                    {getFieldDecorator('verzorger-1-huisnummer', {
                        rules: [
                            {
                                required: true,
                                message: 'Vul alsjeblieft je huisnummer in.',
                                whitespace: true
                            }
                        ]
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="Straat">
                    {getFieldDecorator('verzorger-1-straat', {
                        rules: [
                            {
                                required: true,
                                message: 'Vul alsjeblieft je straat in.',
                                whitespace: true
                            }
                        ]
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="Woonplaats">
                    {getFieldDecorator('verzorger-1-woonplaats', {
                        rules: [
                            {
                                required: true,
                                message: 'Vul alsjeblieft je woonplaats in.',
                                whitespace: true
                            }
                        ]
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="E-mailadres">
                    {getFieldDecorator('verzorger-1-email', {
                        rules: [
                            {
                                required: true,
                                message: 'Vul alsjeblieft je e-mailadres in.',
                                whitespace: true
                            }
                        ]
                    })(<Input />)}
                </Form.Item>
                <b>Ouder/verzorger 2</b>
                <Form.Item label="Voorletters">
                    {getFieldDecorator('verzorger-2-voorletters', {
                        rules: [
                            {
                                required: true,
                                message: 'Vul alsjeblieft je voorletters in.',
                                whitespace: true
                            }
                        ]
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="Tussenvoegsel">
                    {getFieldDecorator('verzorger-2-tussenvoegsel', {
                        rules: [{ whitespace: true }]
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="Achternaam">
                    {getFieldDecorator('verzorger-2-achternaam', {
                        rules: [
                            {
                                required: true,
                                message: 'Vul alsjeblieft je achternaam in.',
                                whitespace: true
                            }
                        ]
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="Geslacht">
                    {getFieldDecorator('verzorger-2-geslacht', {
                        rules: [
                            {
                                required: true,
                                message: 'Vul alsjeblieft het geslacht van de leerkracht in.'
                            }
                        ]
                    })(
                        <Select>
                            <Option value="M">Man</Option>
                            <Option value="V">Vrouw</Option>
                        </Select>
                    )}
                </Form.Item>
                <Form.Item
                    label={
                        <span>
                            Telefoonnummer&nbsp;
                            <Tooltip title="Telefoonnummer ouder/verzorger voor calamiteiten">
                                <Icon type="question-circle-o" />
                            </Tooltip>
                        </span>
                    }
                >
                    {getFieldDecorator('verzorger-2-telefoonnummer', {
                        rules: []
                    })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
                </Form.Item>
                <Form.Item label="Postcode">
                    {getFieldDecorator('verzorger-2-postcode', {
                        rules: [
                            {
                                required: true,
                                message: 'Vul alsjeblieft je postcode in.',
                                whitespace: true
                            }
                        ]
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="Huisnummer">
                    {getFieldDecorator('verzorger-2-huisnummer', {
                        rules: [
                            {
                                required: true,
                                message: 'Vul alsjeblieft je huisnummer in.',
                                whitespace: true
                            }
                        ]
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="Straat">
                    {getFieldDecorator('verzorger-2-straat', {
                        rules: [
                            {
                                required: true,
                                message: 'Vul alsjeblieft je straat in.',
                                whitespace: true
                            }
                        ]
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="Woonplaats">
                    {getFieldDecorator('verzorger-2-woonplaats', {
                        rules: [
                            {
                                required: true,
                                message: 'Vul alsjeblieft je woonplaats in.',
                                whitespace: true
                            }
                        ]
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="E-mailadres">
                    {getFieldDecorator('verzorger-2-email', {
                        rules: [
                            {
                                required: true,
                                message: 'Vul alsjeblieft je e-mailadres in.',
                                whitespace: true
                            }
                        ]
                    })(<Input />)}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Volgende
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

class Overig extends Component<FormComponentProps & any> {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.props.setFormData({ ...this.props.formData, ...values });
                setTimeout(() => {
                    this.props.sendData();
                    this.props.forward();
                }, 100);
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Item label="Gezinssamenstelling (aantal kinderen)">
                    {getFieldDecorator('gezinssamenstelling', {
                        rules: [
                            {
                                required: true,
                                message: '* Vereist'
                            }
                        ]
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="Gezinsplaats kind">
                    {getFieldDecorator('gezinsplaats-kind', {
                        rules: [
                            {
                                required: true,
                                message: '* Vereist'
                            }
                        ]
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="Aantal kinderen op Hageveld">
                    {getFieldDecorator('aantal-kinderen-hageveld', {
                        rules: [
                            {
                                required: true,
                                message: '* Vereist'
                            }
                        ]
                    })(<Input />)}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('adres-gegevens-SRH', {
                        valuePropName: 'checked',
                        initialValue: true
                    })(<Checkbox>Adresgegevens SRH gebruik (optioneel)</Checkbox>)}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('toestemming-plaatsing-website', {
                        valuePropName: 'checked',
                        initialValue: true
                    })(<Checkbox>Toestemming plaatsing website (optioneel)</Checkbox>)}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('bekend-met-procedure', {
                        valuePropName: 'checked',
                        initialValue: false,
                        rules: [
                            {
                                required: true,
                                transform: value => value || undefined,
                                type: 'boolean',
                                message: 'Vereist'
                            }
                        ]
                    })(
                        <Checkbox>
                            <span style={{ color: 'red' }}>*</span> Ik ben bekend met de procedure
                        </Checkbox>
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('naar-waarheid-ingevuld', {
                        valuePropName: 'checked',
                        initialValue: false,
                        rules: [
                            {
                                required: true,
                                transform: value => value || undefined,
                                type: 'boolean',
                                message: 'Vereist'
                            }
                        ]
                    })(
                        <Checkbox>
                            <span style={{ color: 'red' }}>*</span> Ik heb dit formulier naar
                            waarheid ingevuld
                        </Checkbox>
                    )}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Volgende
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

const WrappedPersoonsgegevens: any = Form.create({ name: 'persoonsgegevens' })(Persoonsgegevens);
const WrappedBasisschool: any = Form.create({ name: 'basisschool' })(Basisschool);
const WrappedVerzorgers: any = Form.create({ name: 'verzorgers' })(Verzorgers);
const WrappedOverig: any = Form.create({ name: 'overig' })(Overig);

const Aanmelden: FunctionComponent = () => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({});

    const sendData = () => {
        setLoading(true);
        sendFormData(formData).then(response => {
            setLoading(false);
        });
    };

    return (
        <Layout>
            <Title centered={true}>Aanmelden</Title>
            <Row>
                <Col span={12} offset={6}>
                    <Stepper>
                        <Step title="Gegevens" icon="user" description="Persoonsgegevens">
                            <Alert
                                message={
                                    <>
                                        <span>
                                            Door het invullen van je persoonsgegevens ga je ermee
                                            akkoord dat deze gegevens beveiligd opgeslagen en
                                            verwerkt worden.
                                        </span>
                                        <br />
                                        <br />
                                        <span>
                                            <b>Let op</b>: Indien u een account maakt voor uw zoon
                                            of dochter, vul dan zijn/haar gegevens in.
                                        </span>
                                    </>
                                }
                                type="info"
                                showIcon={true}
                            />
                            <br />
                            <WrappedPersoonsgegevens
                                formData={formData}
                                setFormData={setFormData}
                            />
                        </Step>
                        <Step title="School" icon="bank" description="Basisschool">
                            <WrappedBasisschool formData={formData} setFormData={setFormData} />
                        </Step>
                        <Step title="Ouders/verzorgers" icon="team" description="Persoonsgegevens">
                            <WrappedVerzorgers formData={formData} setFormData={setFormData} />
                        </Step>
                        <Step title="Overig" icon="question" description="Extra informatie">
                            <WrappedOverig
                                formData={formData}
                                setFormData={setFormData}
                                sendData={sendData}
                            />
                        </Step>
                        <Step
                            title="Einde"
                            icon={loading ? 'loading' : 'check'}
                            description="Klaar!"
                        >
                            {loading ? (
                                <Result
                                    title="Aanmelding voltooien..."
                                    subTitle="Een moment geduld alstublieft"
                                    icon={<Icon type="loading" />}
                                />
                            ) : (
                                <Result
                                    status="success"
                                    title="Succesvol aangemeld!"
                                    subTitle="Wij zullen zo spoedig mogelijk contact met u opnemen."
                                />
                            )}
                        </Step>
                    </Stepper>
                </Col>
            </Row>
        </Layout>
    );
};

export default Aanmelden;
