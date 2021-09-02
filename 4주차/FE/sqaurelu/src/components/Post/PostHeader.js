import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal } from '../Modal';
import { modifyPost } from '../../modules/post';
import { useDispatch } from 'react-redux';
import dayjs from 'dayjs';
import { removePostApi } from '../../services/axios';
import { deletePost } from '../../modules/postList';

function PostHeader({ postInfo }) {
    const { title, updatedDate, postId } = postInfo;
    const [modal, setModal] = useState(false);
    const dispatch = useDispatch();

    const toggleModal = () => {
        setModal(!modal);
    };

    const handleModifyPost = () => {
        dispatch(modifyPost(postInfo));
    };

    const removePost = (postId) => {
        removePostApi(postId, dispatch, deletePost);
        toggleModal();
        alert('삭제 완료');
    };

    return (
        <Wrapper>
            <Left>
                <Title>{title}</Title>
                <UpdatedDate>
                    {dayjs(updatedDate).format('YYYY년 MM월 DD일 HH:mm')}
                </UpdatedDate>
            </Left>

            <Right>
                <Button onClick={handleModifyPost}>수정</Button>
                <Button onClick={toggleModal}>삭제</Button>

                <Modal
                    visible={modal}
                    toggleModal={toggleModal}
                    postId={postId}
                    removePost={removePost}
                />
            </Right>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Left = styled.div`
    display: flex;
    flex-direction: column;
`;

const Title = styled.h1`
    color: inherit;
    font-weight: 600;
    font-size: 1rem;
`;

const UpdatedDate = styled.p`
    color: #495057;
    margin-top: 0.3rem;
    font-size: 0.7rem;
`;

const Right = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const Button = styled.button`
    border: none;
    cursor: pointer;
`;

export default PostHeader;
