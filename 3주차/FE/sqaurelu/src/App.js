import React, { useEffect } from 'react';
import styled from 'styled-components';
import StateCardList from './components/StateCardList';
import TotalCard from './components/TotalCard';

import { useSelector, useDispatch } from 'react-redux';
import { fetchCovidState } from './api/axios';

import { concatDate } from './utils/helper';

function App() {
	const dispatch = useDispatch();
	// 앱 처음 로딩시 현재 날짜로 api 요청
	const today = concatDate(new Date());

	const fetchData = async (date) => {
		dispatch({ type: 'LOADING' });
		try {
			const res = await fetchCovidState(date);
			
			dispatch({ type: 'FETCH_DATA', data: res.cityState, total: res.totalState, selectedDate: date });
		} catch (e) {
			console.error(e);
		}
	};

	useEffect(() => {
		fetchData(today);
	}, []);
	
	const { loading, data, error } = useSelector(state => state.covidState);

	if (loading) return <Loading> 로딩중.. </Loading>
	if (error) return <Error>아직 생성되지 않은 데이터입니다. 새로고침 해주세요!</Error>
	if (!data) return null;

	return (
		<div>
			<Title>
				코로나19 현황
			</Title>
			<TotalCard />
			<StateCardList />
		</div>
	);
}

const Title = styled.div`
    padding: 2rem;
    font-weight: bold;
    font-size: 2rem;
    text-align: center;
    color: #0ca678;
`;

const Loading = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	padding: 0.5rem;

	display: flex;
    align-items: center;
    justify-content: center;

	font-size: 2rem;
	color: #0ca678;
`;

const Error = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	padding: 0.5rem;

	display: flex;
    align-items: center;
    justify-content: center;

	font-size: 2rem;
	color: #fa5252;
`;

export default App;
