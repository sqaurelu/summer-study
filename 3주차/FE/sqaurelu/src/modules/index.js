import { combineReducers } from 'redux';
import covidState from './covidState';

const rootReducer = combineReducers({
    covidState,
});

export default rootReducer;