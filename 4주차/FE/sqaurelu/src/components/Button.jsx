import styled, { css } from "styled-components";
import { lighten } from 'polished';

const Button = styled.button`
	outline: none;
	padding: 1rem;
	width: 75%;
    
    border: none;
	font-size: 1rem;
	margin: 0.5rem;
    background-color: transparent;
    color: #dee2e6;
    cursor: pointer;
    font-weight: 900;

	${props => 
	props.size === 'small' && css`
		width: 50%;
		padding: 0.1rem;
		font-size: 0.9rem;
		font-weight: 400;
	`}

	& + & {
		border-left: 1px solid #444444;
	}

	&:hover {
		/* background: ${lighten(0.05, '#2B2B2B')}; */
	}
`;

export default Button;