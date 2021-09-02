import React from 'react';
import styled, { css } from 'styled-components';
import Button from './Button';

import { useSelector, useDispatch } from 'react-redux';
import { changeContent, changeTitle, resetPost } from '../modules/post';
import { createPostApi, modifyPostApi } from '../services/axios';

import { addPost, modifyPost } from '../modules/postList';

function Write() {
    const dispatch = useDispatch();
    const { modify, post } = useSelector((state) => state.post);

    const cancelSubmit = (e) => {
        e.preventDefault();
        alert('수정 취소');
        dispatch(resetPost());
    };

    // const token = sessionStorage.getItem('token');
    const userId = sessionStorage.getItem('userId');
    const submitPost = (e) => {
        e.preventDefault();

        if (!modify) {
            // modify 아닌 경우 POST
            const data = {
                userId,
                title: post.title,
                content: post.content,
            };

            createPostApi(data, dispatch, addPost);
            dispatch(resetPost());
        } else {
            // modify인 경우 PUT
            const data = {
                title: post.title,
                content: post.content,
            };
            modifyPostApi(post.postId, data, dispatch, modifyPost);
            dispatch(resetPost());
        }
    };

    const onChangeTitle = (e) => {
        dispatch(changeTitle(e.target.value));
    };
    const onChangeContent = (e) => {
        dispatch(changeContent(e.target.value));
    };

    return (
        <Form onSubmit={submitPost}>
            <Input
                placeholder="제목"
                onChange={onChangeTitle}
                value={post.title}
            />
            <TextArea
                modify={modify}
                placeholder="글쓰기"
                onChange={onChangeContent}
                value={post.content}
            />

            <ButtonWrapper>
                <Button size="small" onClick={cancelSubmit}>
                    취소하기
                </Button>
                <Button size="small" onClick={submitPost}>
                    게시하기
                </Button>
            </ButtonWrapper>
        </Form>
    );
}

const Form = styled.form`
    position: sticky;
    bottom: 0;
    background-color: white;
`;

const Input = styled.input`
    outline: none;
    border: none;
    padding-left: 1rem;
    padding-top: 0.5rem;
    border-top: 1px solid #e9ecef;
    width: 100%;
`;

const TextArea = styled.textarea`
    outline: none;
    border: none;
    resize: none;
    overflow: hidden;
    background: transparent;

    width: 100%;
    padding-top: 0.5rem;
    padding-left: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #e9ecef;

    &::placeholder {
        /* color: inherit; */
    }

    transition: all 0.3s;

    ${(props) =>
        props.modify &&
        css`
            height: 5rem;
        `}
`;

const ButtonWrapper = styled.div`
    display: flex;
`;

export default Write;
