import React from 'react';
import styled from 'styled-components';
import StateCard from './StateCard';
import { media } from '../utils/responsive';

import { useSelector } from 'react-redux';

function StateCardList() {
    const { data } = useSelector(state => state.covidState);

    return (
        <Wrapper>
            {data.map((item, i) => <StateCard key={i} item={item} />)}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: repeat(6, 10rem);
    grid-template-columns: repeat(3, 22rem);
    justify-content: center;
    margin: 1rem;
    transition: all .3s;

    ${media.mobile`
        display: flex;
        flex-direction: column;
        align-items: center;
    `}
`;

export default StateCardList;