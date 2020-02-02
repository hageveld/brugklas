import React, { FunctionComponent } from 'react';
import Layout from '../components/Layout';
import { Link } from 'gatsby';
import { Result, Button, Icon } from 'antd';

const NotFound: FunctionComponent = () => (
    <Layout>
        <Result
            status="404"
            title="404"
            subTitle="Pagina niet gevonden"
            extra={
                <Link to="/">
                    <Button type="primary">
                        <Icon type="left" /> Keer terug
                    </Button>
                </Link>
            }
        />
    </Layout>
);

export default NotFound;
