const LOADING = 'LOADING';
const FETCH_DATA = 'FETCH_DATA';
const ERROR = 'ERROR';

// action 생성자 함수
// export const loading = () => ({ type: LOADING });
// export const fetchData = ({ data, total, selectedDate }) => ({ type: FETCH_DATA, data, total, selectedDate });
// export const error = () => ({ tpye: ERROR });

const initialState = {
    loading: false,
    selectedDate: null,
    total: null,
    data: null,
    error: false
};

// reducer
export default function covidState(state = initialState, action) {
    switch (action.type) {
        case LOADING:
            return {
                loading: true,
                selectedDate: null,
                total: null,
                data: null,
                error: null,
            };
        case FETCH_DATA:
            return {
                loading: false,
                selectedDate: action.selectedDate,
                total: action.total,
                data: action.data,
                error: null,
            };
        case ERROR:
            return {
                loading: false,
                selectedDate: null,
                total: null,
                data: null,
                error: true,
            };
        default:
            return state;
    }
}