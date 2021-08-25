import React from 'react';
import styled from 'styled-components';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

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

const Logout = styled(ExitToAppIcon)`
    display: flex;
    align-self: center;
    cursor: pointer;
`;

function Header() {
    return (
        <Wrapper>
            <Logo>Dev-Immersion</Logo>
            <Logout />
        </Wrapper>
    );
}

export default Header;
