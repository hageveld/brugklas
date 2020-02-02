import React, { Component, Fragment, ReactNode, cloneElement } from 'react';
import { Steps, Avatar } from 'antd';
import Step from './Step';

interface Props {
    children: ReactNode[];
}

interface State {
    step: number;
}

export default class Stepper extends Component<Props, State> {
    static Step = Step;

    constructor(props) {
        super(props);

        this.state = {
            step: 0
        };

        this.back = this.back.bind(this);
        this.forward = this.forward.bind(this);
    }

    back() {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    forward() {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    render() {
        const { children } = this.props;
        const { step } = this.state;

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
                {steps[step].children.length > 1
                    ? steps[step].children.map(child =>
                          cloneElement(child, { back: this.back, forward: this.forward })
                      )
                    : cloneElement(steps[step].children, {
                          back: this.back,
                          forward: this.forward
                      })}
            </Fragment>
        );
    }
}
