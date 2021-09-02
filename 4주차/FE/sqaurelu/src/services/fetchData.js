import { feedApi } from '../services/axios';
import { loadPostList } from '../modules/postList';

export const fetchData = async (dispatch) => {
    try {
        const data = await feedApi();
        dispatch(loadPostList(data));
    } catch (e) {
        console.log(e);
    }
};
