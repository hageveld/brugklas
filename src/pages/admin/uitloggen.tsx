import React, { FunctionComponent, useEffect } from 'react';
import Layout from '../../components/Layout';
import { Button, Icon, Result } from 'antd';
import { Link } from 'gatsby';
import { useSelector, useDispatch } from '../../hooks';
import { logout } from '../../store/admin';

import '../../sass/index.scss';

const Uitloggen: FunctionComponent<any> = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.admin.isLoggedIn);

    useEffect(() => {
        dispatch(logout());
    });

    return (
        <Layout>
            <br />
            {isLoggedIn ? (
                <Result
                    title="Uitloggen..."
                    subTitle="Een moment geduld alstublieft."
                    icon={<Icon type="loading" />}
                />
            ) : (
                <Result
                    status="success"
                    title="U bent succesvol uitgelogd"
                    extra={
                        <Link to="/admin">
                            <Button type="primary">
                                <Icon type="left" />
                                Keer terug
                            </Button>
                        </Link>
                    }
                />
            )}
        </Layout>
    );
};

export default Uitloggen;
