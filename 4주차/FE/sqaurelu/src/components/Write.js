import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Wrapper = styled.div`
    position: sticky;
    bottom: 0;
    background-color: white;
`;

const TextArea = styled.textarea`
    outline: none;
    border: none;
    resize: none;
    overflow: hidden;
    background: transparent;
    
    width: 100%;
    display: flex;
    align-content: center;
    padding-top: 0.5rem;
    padding-left: 1rem;
    border-top: 1px solid #e9ecef;
    border-bottom: 1px solid #e9ecef;

    &::placeholder {
        /* color: inherit; */
    }
`;

const ButtonWrapper = styled.div`
    display: flex;
`;

function Write() {
    return (
        <Wrapper>
            <TextArea placeholder='글쓰기' />
            <ButtonWrapper>
                <Button size='small'>취소하기</Button>
                <Button size='small'>게시하기</Button>
            </ButtonWrapper>
        </Wrapper>
    );
}

export default Write;