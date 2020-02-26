import React, { FunctionComponent, Component, Fragment, useState } from 'react';
import Layout from '../../components/Layout';
import { Row, Col, Button, Icon, Spin, Breadcrumb, Form, Input, message } from 'antd';
import { Link, navigate } from 'gatsby';
import Title from '../../components/Title';
import Comments from '../../components/Comments';
import { useSelector, useDispatch } from '../../hooks';
import moment from 'moment';
import {
    getAdminData,
    deleteEntry,
    updateContactedEntry,
    changePassword as changePasswordAPI
} from '../../utils/api';
import { updateData, removeEntry, updateContacted, changePassword } from '../../store/admin';
import * as zxcvbn from 'zxcvbn';

import '../../sass/index.scss';

class PasswordForm extends Component<any> {
    state = {
        confirmDirty: false
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.props.changePassword(values.password);
            }
        });
    };

    handleConfirmBlur = e => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue('password')) {
            callback('Wachtwoorden komen niet overeen.');
        } else {
            callback();
        }
    };

    validateToNextPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    };

    validatePasswordStrength = (rule, value, callback) => {
        const strength = zxcvbn(value);
        if (strength.score < 3) {
            callback('Wachtwoord niet sterk genoeg.');
        } else {
            callback();
        }
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
                sm: { span: 16 }
            }
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24
                },
                sm: {
                    span: 16
                }
            }
        };

        return (
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                <Form.Item label="Wachtwoord" hasFeedback={true}>
                    {getFieldDecorator('password', {
                        rules: [
                            {
                                required: true,
                                message: 'Vul alsjeblieft een nieuw wachtwoord in.'
                            },
                            {
                                validator: this.validateToNextPassword
                            },
                            {
                                validator: this.validatePasswordStrength
                            }
                        ]
                    })(<Input.Password />)}
                </Form.Item>
                <Form.Item label="Bevestig wachtwoord" hasFeedback={true}>
                    {getFieldDecorator('confirm', {
                        rules: [
                            {
                                required: true,
                                message: 'Bevestig alsjeblieft je nieuwe wachtwoord.'
                            },
                            {
                                validator: this.compareToFirstPassword
                            }
                        ]
                    })(<Input.Password onBlur={this.handleConfirmBlur} />)}
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        Verander wachtwoord
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

const WrappedPasswordForm: any = Form.create({ name: 'password' })(PasswordForm);

const Account: FunctionComponent<any> = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.admin.isLoggedIn);
    const name = useSelector(state => state.admin.name);
    const [loading, setLoading] = useState(false);

    if (!isLoggedIn) {
        navigate('/admin');
    }

    const changePass = (password: string) => {
        changePasswordAPI(password).then(() => {
            dispatch(changePassword(password));
            message.success('Wachtwoord succesvol gewijzigd');
        });
    };

    return (
        <Layout>
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
                                <Breadcrumb.Item>Account</Breadcrumb.Item>
                            </Breadcrumb>
                            <br />
                            <h1>Account</h1>
                            <b>Naam</b>: {name}
                            <br />
                            <br />
                            <h1>Wachtwoord wijzigen</h1>
                            <WrappedPasswordForm changePassword={changePass} />
                        </Fragment>
                    )}
                </Col>
            </Row>
        </Layout>
    );
};

export default Account;
