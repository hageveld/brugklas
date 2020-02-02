import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import { Menu, Icon } from 'antd';
const Header: FunctionComponent = () => {
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
        </Menu>
    );
};

export default Header;
