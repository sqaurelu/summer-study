import { combineReducers } from 'redux';
import login from './login';
import signup from './signup';
// import modifyPost from './modifyPost';
import post from './post';

const rootReducer = combineReducers({
    login,
    signup,
    post,
});

export default rootReducer;
