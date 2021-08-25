import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Post from '../../components/Post';
import Write from '../../components/Write';

function FeedPage() {
    // 임시 데이터
    const postData = [
        {
            postId: '1jdiddkxuejrl39',
            userId: 'campusfriends1',
            title: '첫 게시글',
            content: '안녕하세요1',
            updatedDate: '2021-08-21T12:00:00Z',
        },
        {
            postId: '1jkxuejrl39',
            userId: 'campusfriends2',
            title: '두번째 게시글',
            content: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
            updatedDate: '2021-08-22T12:00:00Z',
        },
        {
            postId: '1jrl39',
            userId: 'campusfriends3',
            title: '세번째 게시글',
            content: '안녕하세요3',
            updatedDate: '2021-08-23T12:00:00Z',
        },
        {
            postId: '1jdiddkxue',
            userId: 'campusfriends4',
            title: '네번째 게시글',
            content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
            updatedDate: '2021-08-24T12:00:00Z',
        },
    ];

    return (
        <Wrapper>
            <Header />
            <Body>
                {postData.reverse().map((post) => (
                    <Post key={post.postId} post={post} />
                ))}
                <Write />
            </Body>
            <Footer>
                <p>Dev-Immersion FE 4주차 과제 이화진</p>
            </Footer>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: grid;
    width: 100%;
    min-height: 100vh;
    grid-template-rows: 3rem 2fr 5rem;
`;

const Body = styled.div`
    position: relative;
`;

const Footer = styled.footer`
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default FeedPage;
