import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import { Menu, Icon, Badge } from 'antd';
import { useSelector } from '../../hooks';

const { SubMenu } = Menu;

const Header: FunctionComponent = () => {
    const isLoggedIn = useSelector(state => state.admin.isLoggedIn);
    const name = useSelector(state => state.admin.name);

    return (
        <Menu
            onClick={() => false}
            selectedKeys={[]}
            mode="horizontal"
            style={{ lineHeight: '64px' }}
        >
            <Menu.Item key="home">
                <Link to="/">
                    <Icon type="home" />
                    Brugklas
                </Link>
            </Menu.Item>
            {isLoggedIn && (
                <SubMenu
                    title={
                        <span className="submenu-title-wrapper">
                            <Icon type="user" />
                            {name}
                        </span>
                    }
                    style={{
                        float: 'right'
                    }}
                >
                    <Menu.Item key="admin">
                        <Link to="/admin">
                            <Icon type="crown" /> Admin
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="account">
                        <Link to="/admin/account">
                            <Icon type="user" /> Account
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="uitloggen">
                        <Link to="/admin/uitloggen">
                            <Icon type="user-delete" /> Uitloggen
                        </Link>
                    </Menu.Item>
                </SubMenu>
            )}
            {isLoggedIn && false && (
                <SubMenu
                    title={
                        <Badge count={5} dot={true}>
                            <Icon type="bell" style={{ marginRight: '0px' }} />
                        </Badge>
                    }
                    style={{
                        float: 'right'
                    }}
                >
                    <Menu.Item key="test1">Test</Menu.Item>
                    <Menu.Item key="test2">Test2</Menu.Item>
                </SubMenu>
            )}
        </Menu>
    );
};

export default Header;
