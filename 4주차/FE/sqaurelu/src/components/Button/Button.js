import styled, { css } from 'styled-components';
import { lighten } from 'polished';

const Button = styled.button`
    outline: none;
    padding: 1rem;
    width: 75%;

    border: none;
    font-size: 1rem;
    margin: 0.5rem;
    cursor: pointer;
    font-weight: 700;
    ${(props) =>
        props.size === 'small' &&
        css`
            width: 50%;
            padding: 0.1rem;
            font-size: 0.9rem;
            font-weight: 400;
            background-color: transparent;
        `}

    & + & {
        border-left: 1px solid #e9ecef;
    }

    ${(props) =>
        props.size === 'large' &&
        css`
            color: #20639b;
            border-radius: 0.3rem;
            box-shadow: rgba(32, 99, 155, 0) 0px 1px 3px 0px,
                rgba(32, 99, 155, 0.5) 0px 0px 0px 1.5px;

            &:hover {
                background: ${lighten(0.01, 'rgba(32, 99, 155, 0.5)')};
                color: white;
            }
        `}
`;

export default Button;
