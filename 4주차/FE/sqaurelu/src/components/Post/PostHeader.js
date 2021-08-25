import React from 'react';
import styled from 'styled-components';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

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

function PostHeader() {
    return (
        <Wrapper>
            <Left>
                <AccountCircleIcon fontSize="large" />
                <LeftInfo>
                    <UserName>유저 이름</UserName>
                    <WriteDate>2021-08-22</WriteDate>
                </LeftInfo>
            </Left>

            <Right>
                <MoreHorizIcon />
            </Right>
        </Wrapper>
    );
}

export default PostHeader;
