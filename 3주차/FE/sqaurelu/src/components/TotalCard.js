import React from 'react';
import styled from 'styled-components';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { concatDate, cutDate } from '../utils/helper';
import { fetchCovidState } from '../api/axios';

function TotalCard() {
    const { data, selectedDate } = useSelector(state => state.covidState);
    const dispatch = useDispatch();

    const total = data[data.length - 1]; // 총계 데이터는 data 맨 마지막에 있음

    const fetchData = async (date) => {
		dispatch({ type: 'LOADING' });
		try {
			const res = await fetchCovidState(date);
			
			dispatch({ type: 'FETCH_DATA', data: res.cityState, total: res.totalState, selectedDate: date });
		} catch (e) {
			console.error(e);
		}
	};

    const [year, month, date] = cutDate(selectedDate); // 
    
    const prev = () => {
        // api 요청 다시
        fetchData(concatDate(new Date(year, month - 1, date - 1)));
    }
    
    const next = () => {
        // api 요청 다시

        // 오늘날짜 이후인 경우 error
        if (new Date() < new Date(year, month - 1, date + 1)) {
            dispatch({ type: 'ERROR', error: true });
        } else fetchData(concatDate(new Date(year, month - 1, date + 1)));
    }

    return (
        <TotalWrapper>
            <DateWrapper>
                <LeftButton fontSize='small' onClick={prev}/>
                <TotalDate>{selectedDate} 기준</TotalDate>
                <RightButton fontSize='small' onClick={next}/>
            </DateWrapper>
            <TotalInfo>
                <Item>
                    사망자
                    <Content>{total.deathCnt.toLocaleString()}</Content>
                </Item>
                <Item>
                    감염자
                    <Content>{total.defCnt.toLocaleString()}</Content>
                </Item>
                <Item>
                    격리 중
                    <Content>{total.isolIngCnt.toLocaleString()}</Content>
                </Item>
                <Item>
                    격리 해제
                    <Content>{total.isolClearCnt.toLocaleString()}</Content>
                </Item>
            </TotalInfo>
        </TotalWrapper>
    );
}


const TotalWrapper = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0.5rem;
`;

const DateWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const TotalDate = styled.div `
    width: 9rem;
    text-align: center;
    color: #495057;
    font-size: 0.9rem;
`;
const LeftButton = styled(ArrowBackIosOutlinedIcon)`
    padding: 0.2rem;
    border-radius: 0.5rem;
    border: 1px solid #adb5bd;
    color: #adb5bd;
    background-color: white;
    margin-right: 0.3rem;
    cursor: pointer;
`;

const RightButton = styled(ArrowForwardIosOutlinedIcon)`
    padding: 0.2rem;
    border-radius: 0.5rem;
    border: 1px solid #adb5bd;
    color: #adb5bd;
    background-color: white;
    margin-left: 0.3rem;
    cursor: pointer;
`;

const TotalInfo = styled.div `
    color: black;
    display: flex;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    padding: 0.5rem;
    margin: 0.5rem;
    border-radius: 0.5rem;
`;

const Item = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 0.8rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
`;

const Content = styled.div`
    padding-top: 0.5rem;
    font-weight: bold;
    font-size: 1rem;
`;

export default TotalCard;