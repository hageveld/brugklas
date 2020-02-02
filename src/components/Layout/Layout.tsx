import React, { FunctionComponent, Fragment, ReactNode } from 'react';
import MetaData from '../MetaData';
import Header from '../Header';
import Footer from '../Footer';
import { Layout as AntLayout } from 'antd';

interface Props {
    title?: string;
    noMargin?: boolean;
    children: ReactNode;
}

const Layout: FunctionComponent<Props> = ({ title, noMargin, children }: Props) => (
    <Fragment>
        <MetaData title={title} />
        <AntLayout>
            <AntLayout.Header style={{ padding: '0', marginBottom: noMargin ? '0' : '25px' }}>
                <Header />
            </AntLayout.Header>
            <AntLayout.Content>{children}</AntLayout.Content>
            <AntLayout.Footer style={{ padding: '0' }}>
                <Footer />
            </AntLayout.Footer>
        </AntLayout>
    </Fragment>
);

export default Layout;
