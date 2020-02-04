/* tslint:disable:max-classes-per-file */
/* tslint:disable:no-http-string */
import React, { FunctionComponent, Component, useState } from 'react';
import Layout from '../components/Layout';
import Stepper from '../components/Stepper';
import ExternalLink from '../components/ExternalLink';
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

    componentDidMount() {
        this.props.form.setFieldsValue({
            ...this.props.formData
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;

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
                        rules: [
                            {
                                required: true,
                                message: 'Vul alsjeblieft de roepnaam in.',
                                whitespace: true
                            }
                        ]
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="Officiële voornamen">
                    {getFieldDecorator('voornamen', {
                        rules: [
                            {
                                required: true,
                                message: 'Vul alsjeblieft de voornamen in.',
                                whitespace: true
                            }
                        ]
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="Tussenvoegsel">
                    {getFieldDecorator('tussenvoegsel', {
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
                                message: 'Vul alsjeblieft de achternaam in.',
                                whitespace: true
                            }
                        ]
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="Geslacht">
                    {getFieldDecorator('geslacht', {
                        rules: [{ required: true, message: 'Vul alsjeblieft het geslacht in.' }]
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
                                message: 'Vul alsjeblieft het BSN in.'
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
                                message: 'Vul alsjeblieft de geboortedatum in.'
                            }
                        ]
                    })(<DatePicker format={'DD-MM-YYYY'} locale={locale} />)}
                </Form.Item>
                <Form.Item label="Geboorteplaats">
                    {getFieldDecorator('geboorteplaats', {
                        rules: [
                            {
                                required: true,
                                message: 'Vul alsjeblieft de geboorteplaats in.',
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
                                message: 'Vul alsjeblieft de postcode in.',
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
                                message: 'Vul alsjeblieft het huisnummer in.',
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
                                message: 'Vul alsjeblieft de straat in.',
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
                                message: 'Vul alsjeblieft de woonplaats in.',
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

    componentDidMount() {
        this.props.form.setFieldsValue({
            ...this.props.formData
        });
    }

    back = () => {
        const values = this.props.form.getFieldsValue();
        this.props.setFormData({ ...this.props.formData, ...values });
        this.props.back();
    };

    adviesStatus = (advies: string) => {
        switch (advies) {
            case 'vwo':
                return 'success';
            case 'havo/vwo':
                return 'warning';
            case 'overig':
                return 'error';
            default:
                return '';
        }
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const advies = this.props.form.getFieldValue('advies');
        const havoAdviesContact = (
            <span>
                De ouder(s)/ verzorger(s) van leerlingen met een HAVO/VWO advies worden gevraagd
                eerst contact op te nemen met L. Klatt, aannamecördinator klas 1. Indien u dit nog
                niet gedaan heeft kunt u een e-mail sturen naar lklatt@hageveld.nl.
                <br />
                <br />
                {getFieldDecorator('havo-advies-toestemming', {
                    valuePropName: 'checked',
                    initialValue: false
                })(
                    <Checkbox>
                        Ik heb contact opgenomen en toestemming gekregen om te vervolgen
                    </Checkbox>
                )}
            </span>
        );
        const validAdvies =
            advies === 'vwo' ||
            (advies === 'havo/vwo' && this.props.form.getFieldValue('havo-advies-toestemming'));

        return (
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                <Form.Item
                    label="Advies"
                    hasFeedback={true}
                    validateStatus={this.adviesStatus(advies)}
                    {...(advies === 'havo/vwo' ? { help: havoAdviesContact } : {})}
                >
                    {getFieldDecorator('advies', {
                        rules: [
                            {
                                required: true,
                                message: 'Vul alsjeblieft het advies in.'
                            },
                            {
                                message:
                                    'Om toegelaten te worden moet het gegeven advies havo/vwo of vwo zijn.',
                                validator: (rule, value, callback) => {
                                    if (value === 'overig') {
                                        callback(false);
                                        return;
                                    }
                                    callback();
                                }
                            }
                        ]
                    })(
                        <Select placeholder="Selecteer het basisschooladvies">
                            <Option value="vwo">vwo</Option>
                            <Option value="havo/vwo">havo/vwo</Option>
                            <Option value="overig">(overig advies)</Option>
                        </Select>
                    )}
                </Form.Item>
                <b>Basisschool</b>
                <Form.Item label="Naam">
                    {getFieldDecorator('basisschool-naam', {
                        rules: [
                            {
                                required: true,
                                message: 'Vul alsjeblieft de naam van de basisschool in.',
                                whitespace: true
                            }
                        ]
                    })(<Input disabled={!validAdvies} />)}
                </Form.Item>
                <Form.Item label="Locatie">
                    {getFieldDecorator('basisschool-locatie', {
                        rules: [
                            {
                                required: true,
                                message: 'Vul alsjeblieft de locatie van de basisschool in.',
                                whitespace: true
                            }
                        ]
                    })(<Input disabled={!validAdvies} />)}
                </Form.Item>
                <b>Leerkracht</b>
                <Form.Item label="Naam">
                    {getFieldDecorator('basisschool-leerkracht-naam', {
                        rules: [
                            {
                                required: true,
                                message: 'Vul alsjeblieft de naam van de leerkracht in.',
                                whitespace: true
                            }
                        ]
                    })(<Input disabled={!validAdvies} />)}
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
                        <Select disabled={!validAdvies}>
                            <Option value="M">Man</Option>
                            <Option value="V">Vrouw</Option>
                            <Option value="X">Overig</Option>
                        </Select>
                    )}
                </Form.Item>
                <Form.Item style={{ float: 'left' }}>
                    <Button type="primary" style={{ float: 'left' }} onClick={this.back}>
                        <Icon type="caret-left" /> Vorige
                    </Button>
                </Form.Item>
                <Form.Item style={{ float: 'right' }}>
                    <Button
                        type="primary"
                        htmlType="submit"
                        style={{ float: 'right' }}
                        disabled={!validAdvies}
                    >
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

    componentDidMount() {
        this.props.form.setFieldsValue({
            ...this.props.formData
        });
    }

    back = () => {
        const values = this.props.form.getFieldsValue();
        this.props.setFormData({ ...this.props.formData, ...values });
        this.props.back();
    };

    render() {
        const { getFieldDecorator } = this.props.form;

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
                                message: 'Vul alsjeblieft de voorletters in.',
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
                                message: 'Vul alsjeblieft de achternaam in.',
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
                                message: 'Vul alsjeblieft het geslacht in.'
                            }
                        ]
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
                    {getFieldDecorator('verzorger-1-telefoonnummer', {
                        rules: []
                    })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
                </Form.Item>
                <Form.Item label="Postcode">
                    {getFieldDecorator('verzorger-1-postcode', {
                        rules: [
                            {
                                required: true,
                                message: 'Vul alsjeblieft de postcode in.',
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
                                message: 'Vul alsjeblieft het huisnummer in.',
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
                                message: 'Vul alsjeblieft de straat in.',
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
                                message: 'Vul alsjeblieft de woonplaats in.',
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
                                message: 'Vul alsjeblieft het e-mailadres in.',
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
                                message: 'Vul alsjeblieft de voorletters in.',
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
                                message: 'Vul alsjeblieft de achternaam in.',
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
                                message: 'Vul alsjeblieft het geslacht in.'
                            }
                        ]
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
                    {getFieldDecorator('verzorger-2-telefoonnummer', {
                        rules: []
                    })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
                </Form.Item>
                <Form.Item label="Postcode">
                    {getFieldDecorator('verzorger-2-postcode', {
                        rules: [
                            {
                                required: true,
                                message: 'Vul alsjeblieft de postcode in.',
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
                                message: 'Vul alsjeblieft het huisnummer in.',
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
                                message: 'Vul alsjeblieft de straat in.',
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
                                message: 'Vul alsjeblieft de woonplaats in.',
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
                                message: 'Vul alsjeblieft het e-mailadres in.',
                                whitespace: true
                            }
                        ]
                    })(<Input />)}
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

    componentDidMount() {
        this.props.form.setFieldsValue({
            ...this.props.formData
        });
    }

    back = () => {
        const values = this.props.form.getFieldsValue();
        this.props.setFormData({ ...this.props.formData, ...values });
        this.props.back();
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
                    {getFieldDecorator('adres-toestemming-SRH', {
                        valuePropName: 'checked',
                        initialValue: true
                    })(
                        <Checkbox>
                            Ik ga er mee akkoord dat adresgegevens van de leerling (indien
                            toegelaten) gedeeld worden met{' '}
                            <ExternalLink to="https://www.srhageveld.nl/">
                                Stichting Reünisten Hageveld
                            </ExternalLink>{' '}
                            (optioneel)
                        </Checkbox>
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('toestemming-plaatsing-website', {
                        valuePropName: 'checked',
                        initialValue: true
                    })(
                        <Checkbox>
                            Ik ga er mee akkoord dat de naam en het geslacht van de leerling (indien
                            toegelaten) gepubliceerd wordt in de indeling van de brugklas
                            (optioneel)
                        </Checkbox>
                    )}
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
                            <span style={{ color: 'red' }}>*</span> Ik ben bekend met{' '}
                            <ExternalLink to="http://www.hageveld.nl/Groep8/Aanmelden/tabid/152/Default.aspx">
                                de procedure
                            </ExternalLink>
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

const WrappedPersoonsgegevens: any = Form.create({ name: 'persoonsgegevens' })(Persoonsgegevens);
const WrappedBasisschool: any = Form.create({ name: 'basisschool' })(Basisschool);
const WrappedVerzorgers: any = Form.create({ name: 'verzorgers' })(Verzorgers);
const WrappedOverig: any = Form.create({ name: 'overig' })(Overig);

const Aanmelden: FunctionComponent = () => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({});
    const [step, setStep] = useState(0);

    const back = () => setStep(step - 1);
    const forward = () => setStep(step + 1);

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
                    <Stepper step={step}>
                        <Step title="Gegevens" icon="user" description="Persoonsgegevens">
                            <Alert
                                message={
                                    <>
                                        <span>
                                            Door het invullen van je persoonsgegevens ga je ermee
                                            akkoord dat deze gegevens beveiligd opgeslagen en
                                            verwerkt worden.
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
                                forward={forward}
                            />
                        </Step>
                        <Step title="School" icon="bank" description="Basisschool">
                            <WrappedBasisschool
                                formData={formData}
                                setFormData={setFormData}
                                back={back}
                                forward={forward}
                            />
                        </Step>
                        <Step title="Ouders/verzorgers" icon="team" description="Persoonsgegevens">
                            <WrappedVerzorgers
                                formData={formData}
                                setFormData={setFormData}
                                back={back}
                                forward={forward}
                            />
                        </Step>
                        <Step title="Overig" icon="question" description="Extra informatie">
                            <WrappedOverig
                                formData={formData}
                                setFormData={setFormData}
                                sendData={sendData}
                                back={back}
                                forward={forward}
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
                                    subTitle={
                                        <h3>
                                            <br />
                                            Neem alstublieft contact met ons op om een afspraak te
                                            maken voor een aanmeldingsgesprek. U kunt bellen tussen
                                            9.00 uur en 16.30 uur naar telefoonnummer 023-5100100.
                                        </h3>
                                    }
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
