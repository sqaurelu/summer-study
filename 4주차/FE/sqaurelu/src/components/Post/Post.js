import React from 'react';
import styled from 'styled-components';
import PostHeader from './PostHeader';

function Post({ post }) {
    return (
        <Wrapper>
            <PostHeader postInfo={post} />
            {/* <PostTitle>{post.title}</PostTitle> */}
            <PostBody>{post.content}</PostBody>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    margin-top: 0.5rem;
    background-color: white;
    padding: 1rem;
    color: black;
`;

// const PostTitle = styled.div`
//     padding-top: 1rem;
//     font-weight: 600;
// `;

const PostBody = styled.div`
    padding-top: 1.5rem;
    line-height: 1.15rem;
`;

export default Post;
