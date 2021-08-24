import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`;

const Mobile = styled.div`
    display: none;

	@media only screen and (min-width: 768px) {	
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: black;
        color: white;
        font-size: 3rem;

        display: flex;
        align-items: center;
        justify-content: center;
	}
`;

function Layout({ children }) {
    return (
        <Wrapper>
            {/* <Mobile>화면 큼</Mobile> */}
            {children}
        </Wrapper>
    );
}

export default Layout;