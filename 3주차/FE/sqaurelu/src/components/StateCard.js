import React from 'react';
import styled from 'styled-components';
import AttachFileSharpIcon from '@material-ui/icons/AttachFileSharp';
import { media } from '../utils/responsive';

function StateCard(item) {
    const {
        createDt, // 등록날짜
        deathCnt, // 사망자 수
        defCnt, // 확진자 수
        gubun, // 시도명
        isolClearCnt, // 격리 해제 수
        isolIngCnt, // 격리 중 환자수
        localOccCnt, // 지역 발생 수
        overFlowCnt, // 해외 유입 수
    } = item.item;

    return (
        <Wrapper>
            <Title>
                <AttachFileSharpIcon />{gubun}
            </Title>
            <InfoWrapper>
                <InfoTable>
                    <Info>사망자 <Content>{deathCnt.toLocaleString()}</Content></Info>
                    <Info>확진자 <Content>{defCnt.toLocaleString()}</Content></Info>
                    <Info>격리 중 <Content>{isolIngCnt.toLocaleString()}</Content></Info>
                </InfoTable>
                <InfoTable>
                    <Info>격리 해제 <Content>{isolClearCnt.toLocaleString()}</Content></Info>
                    <Info>지역 발생  <Content>{localOccCnt.toLocaleString()}</Content></Info>
                    <Info>해외 유입 <Content>{overFlowCnt.toLocaleString()}</Content></Info>
                </InfoTable>
            </InfoWrapper>
        </Wrapper>
    );
}


const Wrapper = styled.div`
    background-color: white;
    border-radius: 1rem;
    width: 19rem;
    height: 7rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    padding: 1rem;
    transition: transform 0.2s;

    &:hover {
        transform: scale(1.02);
    }

    ${media.mobile`
        width: 90%;
        margin-bottom: 1rem;
    `}
`;

const Title = styled.div`
    font-size: 1.2rem;
    display: flex;
    align-items: center;
`;

const InfoWrapper = styled.div`
    display: flex;
    padding: 1rem;
    justify-content: space-between;
`;

const InfoTable = styled.div`
    padding-right: 2rem;
`;

const Info = styled.div`
    font-size: 0.85rem;
    display: flex;
    flex-direction: row;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
`;

const Content = styled.div`
    font-weight: bold;
    padding-left: 1rem;
`;

export default StateCard;