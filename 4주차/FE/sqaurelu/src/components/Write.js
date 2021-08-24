import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Wrapper = styled.div`
    background-color: white;
    margin-bottom: 0.4rem;
`;

const TextArea = styled.textarea`
    outline: none;
    border: none;
    resize: none;
    overflow: hidden;
    background: transparent;
    
    width: 100%;
    padding: 1rem;
    border-bottom: 0.2px solid #e9ecef;

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