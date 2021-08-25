import React, { useState } from 'react';
import styled from 'styled-components';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Modal } from '../Modal';
import { modifyPost } from '../../modules/post';
import { useDispatch } from 'react-redux';
import dayjs from 'dayjs';

function PostHeader({ postInfo }) {
    const { userId, updatedDate } = postInfo;
    const [modal, setModal] = useState(false);

    const dispatch = useDispatch();

    const toggleModal = () => {
        setModal(!modal);
    };

    const handleModifyPost = () => {
        dispatch(modifyPost(postInfo));
    };

    return (
        <Wrapper>
            <Left>
                <AccountCircleIcon fontSize="large" />
                <LeftInfo>
                    <UserName>{userId}</UserName>
                    <WriteDate>
                        {dayjs(updatedDate).format('YYYY년 MM월 DD일 HH:mm')}
                    </WriteDate>
                </LeftInfo>
            </Left>

            <Right>
                <Button onClick={handleModifyPost}>수정</Button>
                <Button onClick={toggleModal}>삭제</Button>
                {modal && <Modal toggleModal={toggleModal} />}
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
    align-items: center;
`;

const LeftInfo = styled.div`
    padding-left: 0.5rem;
`;

const UserName = styled.p`
    color: inherit;
    font-weight: 600;
    font-size: 0.95rem;
`;

const WriteDate = styled.p`
    color: #495057;
    margin-top: 0.3rem;
    font-size: 0.8rem;
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
