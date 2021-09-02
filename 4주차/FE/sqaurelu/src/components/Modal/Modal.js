import React from 'react';
import styled from 'styled-components';
import Button from '../Button';

function Modal({ toggleModal, postId, removePost, visible }) {
    if (!visible) return null;

    return (
        <Wrapper>
            <ModalBox>
                <Message>글을 삭제하시겠습니까?</Message>
                <ButtonWrapper>
                    <Button size="small" onClick={toggleModal}>
                        취소하기
                    </Button>
                    <Button size="small" onClick={() => removePost(postId)}>
                        삭제하기
                    </Button>
                </ButtonWrapper>
            </ModalBox>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
`;

const ModalBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: white;
    border-radius: 1rem;
    width: 60%;
    height: 8rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
        rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
`;

const Message = styled.h2`
    font-weight: 600;
    font-size: 1rem;
    padding-top: 2rem;
    padding-bottom: 1rem;
    text-align: center;
`;

const ButtonWrapper = styled.div`
    display: flex;
`;

export default Modal;
