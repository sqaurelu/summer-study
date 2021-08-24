import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Post from '../../components/Post';
import Write from '../../components/Write';

const Wrapper = styled.div`
	display: grid;
	width: 100%;
	min-height: 100vh;
	grid-template-rows: 3rem 2fr 5rem;
`;

const Body = styled.div`
`;

const Footer = styled.footer`
    background-color: transparent;
	display: flex;
	justify-content: center;
	align-items: center;
	
`;

function FeedPage() {
	return (
		<Wrapper>
			<Header />
			<Body>
				<Post />
				<Post />
				<Post />
				<Post />
				<Write />
			</Body>
			<Footer><p>Dev-Immersion FE 4주차 과제 이화진</p></Footer>
		</Wrapper>
	);
}

export default FeedPage;