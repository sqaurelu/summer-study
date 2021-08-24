import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 10rem;
`;

const StyledLink = styled(Link)`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

function MainPage() {
    return (
        <Wrapper>
            <StyledLink to='/login'>
                <Button size='large'>로그인</Button>
            </StyledLink>
            <StyledLink to='/signup'>
                <Button size='large'>회원가입</Button>
            </StyledLink>
        </Wrapper>
    );
}

export default MainPage;