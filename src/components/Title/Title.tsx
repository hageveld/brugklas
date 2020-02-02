import React, { FunctionComponent, ReactNode } from 'react';
import { Typography } from 'antd';
import styled from 'styled-components';

/*
Passing boolean prop fromm React to styled-components doesn't work:

```
Warning: Received `true` for a non-boolean attribute `centered`.

If you want to write it to the DOM, pass a string instead: centered="true" or centered={value.toString()}.
```

See: https://github.com/styled-components/styled-components/issues/1198
*/

interface StyledComponentProps {
    centered: number;
}

interface Props {
    children?: ReactNode;
    centered?: boolean;
}

const TitleWrapper = styled(Typography.Title)`
    font-size: 40px;
    color: #362e95 !important;
    text-align: ${(props: StyledComponentProps) => (props.centered ? 'center' : 'inherit')};
`;

const Title: FunctionComponent<Props> = ({ children, ...props }: Props) => (
    <TitleWrapper {...props} centered={props.centered ? 1 : 0}>
        {children ? children : 'Hageveld Experience'}
    </TitleWrapper>
);

export default Title;
