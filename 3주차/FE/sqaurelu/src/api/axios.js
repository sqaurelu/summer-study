import axios from "axios";
import CovidState from '../models/CovidState';

export const fetchCovidState = async (date) => {
    const API_SERVICE_KEY = process.env.REACT_APP_API_SERVICE_KEY;

    let queryParams = '?' + encodeURIComponent('ServiceKey') + '=' + API_SERVICE_KEY; /*Service Key*/
    queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
    queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /**/
    queryParams += '&' + encodeURIComponent('startCreateDt') + '=' + encodeURIComponent(date); /**/
    queryParams += '&' + encodeURIComponent('endCreateDt') + '=' + encodeURIComponent(date); /**/

    try {
        const res = await axios.get(`/openapi/service/rest/Covid19/getCovid19SidoInfStateJson${queryParams}`);
        const { item } = res.data.response.body.items;
        
        const cityState = [];
        const totalState = CovidState.make(item[18]); // 총계
        for (let i = 1; i < 17; i++) { // 날짜의 가장 최신 데이터
            cityState.push(CovidState.make(item[i]));
        }
        
        return { cityState, totalState };
    } catch (e) {
        console.error(e);
    }
} 