import React from 'react';
import styled from "styled-components";

function NotFound({ location }) {

    return (
        <Wrapper>
            <NotFoundMessage>이 페이지는 존재하지 않습니다.</NotFoundMessage>
            <Path>{location.pathname}</Path>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const NotFoundMessage = styled.h1`
    font-size: 1.5rem;
    font-weight: 800;
    color: #fa5252;
`;

const Path = styled.p`
    margin: 1rem;
    font-size: 1rem;
`;


export default NotFound;