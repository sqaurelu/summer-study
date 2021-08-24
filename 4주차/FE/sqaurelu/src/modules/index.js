import { combineReducers } from 'redux';
import login from './login';
import signup from './signup';

const rootReducer = combineReducers({
    login,
    signup
});

export default rootReducer;