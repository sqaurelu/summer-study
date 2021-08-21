import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button';
import Input from '../../components/Input';
import InputLabel from '../../components/InputLabel';

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
				<Button type='submit'>회원가입</Button>
			</Form>
		</Wrapper>
	);
}

export default SignUpPage;