import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Wrapper = styled.div`
    background-color: #2B2B2B;
    margin-bottom: 0.4rem;
`;

const TextArea = styled.textarea`
    outline: none;
    border: none;
    resize: none;
    overflow: hidden;
    background: transparent;
    color: #dee2e6;
    width: 100%;
    padding: 1rem;
    border-bottom: 0.2px solid #444444;

    &::placeholder {
        color: #dee2e6;
    }
`;

const ButtonWrapper = styled.div`
    display: flex;
    /* border-bottom: 0.2px solid #444444; */
`;

function Write() {
    return (
        <Wrapper>
            <TextArea placeholder='무슨 생각을 하고 계신가요?' />
            <ButtonWrapper>
                <Button size='small'>취소하기</Button>
                <Button size='small'>게시하기</Button>
            </ButtonWrapper>
        </Wrapper>
    );
}

export default Write;