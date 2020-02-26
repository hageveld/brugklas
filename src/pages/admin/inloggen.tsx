import React, { FunctionComponent, Component, useState } from 'react';
import Layout from '../../components/Layout';
import { Row, Col, Button, Input, Icon, Form, Spin } from 'antd';
import { navigate } from 'gatsby';
import Title from '../../components/Title';
import { useSelector, useDispatch } from '../../hooks';
import { FormComponentProps } from 'antd/lib/form';
import { requestLogin, getAdminData } from '../../utils/api';
import { login, updateData } from '../../store/admin';

import '../../sass/index.scss';

class LoginForm extends Component<FormComponentProps & any> {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                setTimeout(() => {
                    this.props.sendLogin(values.email, values.password);
                }, 100);
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <Form
                onSubmit={this.handleSubmit}
                labelCol={{ xs: { span: 24 }, sm: { span: 4 } }}
                wrapperCol={{ xs: { span: 24 }, sm: { span: 20 } }}
            >
                <Form.Item label="E-mailadres">
                    {getFieldDecorator('email', {
                        rules: [
                            {
                                type: 'email',
                                message: 'Vul alstublieft een geldig e-mailadres in.'
                            },
                            {
                                required: true,
                                message: 'Vul alstublieft uw e-mailadres in.'
                            }
                        ]
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="Wachtwoord" hasFeedback={true}>
                    {getFieldDecorator('password', {
                        rules: [
                            {
                                required: true,
                                message: 'Vul alstublieft uw wachtwoord in.'
                            }
                        ]
                    })(<Input.Password />)}
                </Form.Item>
                <Form.Item style={{ float: 'right' }}>
                    <Button type="primary" htmlType="submit">
                        Volgende <Icon type="caret-right" />
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

const WrappedLoginForm: any = Form.create({ name: 'login' })(LoginForm);

const Inloggen: FunctionComponent<any> = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.admin.isLoggedIn);
    const [loading, setLoading] = useState(false);

    const sendLogin = (email: string, password: string) => {
        setLoading(true);
        requestLogin(email, password).then(userData => {
            dispatch(login(email, password, userData.name));
            getAdminData().then(adminData => {
                dispatch(updateData(adminData.stats, adminData.entries));
                setLoading(false);
            });
        });
    };

    if (isLoggedIn) {
        navigate('/admin');
    }

    return (
        <Layout>
            <Title centered={true}>Inloggen</Title>
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
                        <WrappedLoginForm sendLogin={sendLogin} />
                    )}
                </Col>
            </Row>
        </Layout>
    );
};

export default Inloggen;
