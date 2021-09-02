import { combineReducers } from 'redux';
import post from './post';
import postList from './postList';

const rootReducer = combineReducers({
    post,
    postList,
});

export default rootReducer;
