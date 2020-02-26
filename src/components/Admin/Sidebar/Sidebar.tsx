import React, { FunctionComponent } from 'react';
import { Icon, Menu } from 'antd';
import { Link } from 'gatsby';
import { useSelector, useDispatch } from '../../../hooks';

const Sidebar: FunctionComponent<any> = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.admin.isLoggedIn);
    const setSelectedItem = (item: any) => console.log(item);

    return (
        <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            style={{ height: '100%' }}
            theme="dark"
            onSelect={item => setSelectedItem(parseInt(item.key, 10))}
        >
            <p style={{ visibility: 'hidden', fontSize: '20px' }}>.</p>
            <span
                style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    marginLeft: '10px'
                }}
            >
                <Icon type="crown" style={{ marginRight: '5px' }} /> Admin
            </span>
            <Menu.ItemGroup title="Algemeen" style={{ marginTop: '20px' }}>
                <Menu.Item key="1">
                    <Link to="/admin">
                        <Icon type="dashboard" /> Overzicht
                    </Link>
                </Menu.Item>
                <Menu.Item key="2" disabled={true}>
                    <Icon type="pie-chart" /> Statistieken
                </Menu.Item>
                <Menu.Item key="3" disabled={true}>
                    <Icon type="profile" /> Aanmeldingen
                </Menu.Item>
                <Menu.Item key="4" disabled={true}>
                    <Icon type="team" /> Gebruikers
                </Menu.Item>
                <Menu.Item key="6" disabled={true}>
                    <Icon type="book" /> Logboek
                </Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="Overig">
                <Menu.Item key="13" disabled={true}>
                    <Icon type="tool" /> Instellingen
                </Menu.Item>
            </Menu.ItemGroup>
        </Menu>
    );
};

export default Sidebar;
