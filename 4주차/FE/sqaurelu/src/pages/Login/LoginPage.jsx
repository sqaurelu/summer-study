import React from 'react';
import styled from 'styled-components';
import Input from '../../components/Input';
import Button from '../../components/Button';

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

function LoginPage() {
	return (
		<Wrapper>
			<Form>
				<Input placeholder='아이디' type='text'/>
				<Input placeholder='비밀번호' type='password' />
				<Button type='submit' size='large'>로그인</Button>
			</Form>
		</Wrapper>
	);
}

export default LoginPage;