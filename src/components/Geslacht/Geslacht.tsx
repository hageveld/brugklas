import React, { FunctionComponent } from 'react';
import { Icon } from 'antd';

interface Props {
    type: string;
}

const Geslacht: FunctionComponent<Props> = ({ type }) => {
    switch (type) {
        case 'M':
            return <Icon type="man" style={{ fontSize: '24px', color: '#2f54eb' }} />;
        case 'V':
            return <Icon type="woman" style={{ fontSize: '24px', color: '#eb2f96' }} />;
        case 'X':
        default:
            return <Icon type="question" style={{ fontSize: '24px', color: '#000000' }} />;
    }
};

export default Geslacht;
