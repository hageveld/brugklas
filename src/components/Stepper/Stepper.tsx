import React, { Component, Fragment, ReactNode, cloneElement } from 'react';
import { Steps, Avatar } from 'antd';
import Step from './Step';

interface Props {
    children: ReactNode[];
    step: number;
}

export default class Stepper extends Component<Props> {
    static Step = Step;

    constructor(props) {
        super(props);
    }

    render() {
        const { children } = this.props;
        const { step } = this.props;

        const steps = children.map((child: any) => child.props);

        return (
            <Fragment>
                <Steps current={step}>
                    {steps.map((stepData: any, index) => (
                        <Steps.Step
                            icon={
                                <Avatar
                                    icon={step > index ? 'check' : stepData.icon}
                                    style={{
                                        backgroundColor: step >= index ? '#5B34AD' : 'white',
                                        color: step < index ? '#d9d5e4' : 'default'
                                    }}
                                />
                            }
                            title={stepData.title}
                            description={stepData.description}
                            key={index}
                        />
                    ))}
                </Steps>
                <br />
                {children[step]}
            </Fragment>
        );
    }
}
