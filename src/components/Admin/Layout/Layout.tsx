import React, { FunctionComponent, Fragment, ReactNode } from 'react';
import DefaultLayout from '../../Layout';
import Sidebar from '../Sidebar';
import { Layout as AntLayout } from 'antd';

const { Sider } = AntLayout;

interface Props {
    children: ReactNode;
}

const Layout: FunctionComponent<Props> = ({ children }: Props) => (
    <DefaultLayout noMargin={true}>
        <hr style={{ margin: '0', border: '2px solid #001529', height: '0px' }} />
        <AntLayout style={{ padding: '0px 0', background: '#fff' }}>
            <Sider width={200} style={{ background: '#fff' }}>
                <Sidebar />
            </Sider>
            <AntLayout.Content style={{ padding: '0 24px', minHeight: 280 }}>
                <br />
                {children}
            </AntLayout.Content>
        </AntLayout>
    </DefaultLayout>
);

export default Layout;
