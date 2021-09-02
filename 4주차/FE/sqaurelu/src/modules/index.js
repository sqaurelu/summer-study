import { combineReducers } from 'redux';
import login from './login';
import signup from './signup';
import post from './post';
import postList from './postList';

const rootReducer = combineReducers({
    login,
    signup,
    post,
    postList,
});

export default rootReducer;
