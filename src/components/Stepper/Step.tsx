import React, { FunctionComponent, Fragment, ReactNode } from 'react';

interface Props {
    title: string;
    icon: string;
    description: string;
    children: ReactNode;
}

const Step: FunctionComponent<Props> = ({ children }) => <Fragment>{children}</Fragment>;

export default Step;
