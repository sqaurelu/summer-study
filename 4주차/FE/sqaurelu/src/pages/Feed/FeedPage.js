import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Post from '../../components/Post';
import Write from '../../components/Write';

import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../../services/fetchData';

function FeedPage({ history }) {
    const postData = useSelector((state) => state.postList);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchData(dispatch);
    }, []);

    return (
        <Wrapper>
            <Header history={history} />
            <Body>
                {postData
                    .sort(
                        (a, b) =>
                            new Date(b.updatedDate) - new Date(a.updatedDate)
                    )
                    .map((post) => (
                        <Post key={post.postId} post={post} />
                    ))}
                <Write history={history} />
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
