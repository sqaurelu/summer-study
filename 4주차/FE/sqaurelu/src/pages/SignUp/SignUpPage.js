// import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../components/Button';
import { InputLabel, Input } from '../../components/Input';
import { signupApi } from '../../services/axios';

function SignUpPage({ history }) {
    const [signUp, setSignUp] = useState({
        id: '',
        password: '',
        checkPassword: '',
    });

    const { id, password, checkPassword } = signUp;

    const onChange = (e) => {
        const { name, value } = e.target;
        setSignUp({
            ...signUp,
            [name]: value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        // api 처리
        signupApi(id, password, history);
    };

    return (
        <Wrapper>
            <Form onSubmit={onSubmit}>
                <InputLabel>아이디</InputLabel>
                <Input
                    placeholder="아이디"
                    type="text"
                    name="id"
                    value={id}
                    onChange={onChange}
                />
                <InputLabel>비밀번호</InputLabel>
                <Input
                    placeholder="비밀번호"
                    type="password"
                    name="password"
                    value={password}
                    onChange={onChange}
                />
                <InputLabel>비밀번호 확인</InputLabel>
                <Input
                    placeholder="비밀번호 확인"
                    type="password"
                    name="checkPassword"
                    value={checkPassword}
                    onChange={onChange}
                />
                <Button type="submit" size="large">
                    회원가입
                </Button>
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
