import React, { useState }  from 'react';
import styled from 'styled-components';
import { Input } from '../../components/Input';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

function LoginPage() {
	const [login, setLogin] = useState({
		id: '',
		password: '',
	});

	const { id, password } = login;

	const onChange = (e) => {
		const { value, name } = e.target;
		setLogin({
			...login,
			[name]: value,
		});
	};
	
	// onChange, onSubmit -> hooks로 리팩토링?
	const onSubmit = (e) => {
		e.preventDefault();
		alert('dsfdsf')
		// api 처리
	};

	return (
		<Wrapper>
			<Form onSubmit={onSubmit}>
				<Input name='id' value={id} placeholder='아이디' type='text' onChange={onChange}/>
				<Input name='password' value={password}  placeholder='비밀번호' type='password' onChange={onChange}/>
				<Button type='submit' size='large'>로그인</Button>
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
	padding-bottom: 1.2rem;
`;

const Form = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export default LoginPage;