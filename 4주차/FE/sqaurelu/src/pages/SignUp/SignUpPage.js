import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button';
import { InputLabel, Input } from '../../components/Input';

function SignUpPage() {
	return (
		<Wrapper>
			<Form>
				<InputLabel>아이디</InputLabel>
				<Input placeholder='아이디' type='text' />
				<InputLabel>비밀번호</InputLabel>
				<Input placeholder='비밀번호' type='password' />
				<InputLabel>비밀번호 확인</InputLabel>
				<Input placeholder='비밀번호 확인' type='password' />
				<Button type='submit' size='large'>회원가입</Button>
			</Form>
		</Wrapper>
	);
}


const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 10rem;
`;

const Form = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;


export default SignUpPage;