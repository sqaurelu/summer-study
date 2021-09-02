import React from 'react';
import styled from 'styled-components';

function Header({ history }) {
    const logout = () => {
        sessionStorage.clear();
        alert('로그아웃 성공');
        history.push('/');
    };
    return (
        <Wrapper>
            <Logo>Dev-Immersion</Logo>
            <Logout onClick={logout}>logout</Logout>
        </Wrapper>
    );
}

const Wrapper = styled.header`
    background-color: white;
    display: grid;
    grid-template-columns: 10fr 1fr;
`;

const Logo = styled.div`
    display: flex;
    padding-left: 1.5rem;
    align-items: center;
    font-weight: 900;
    font-size: 1.3rem;
    color: #ffd43b;
`;

const Logout = styled.button`
    border: none;
    cursor: pointer;
`;

export default Header;
