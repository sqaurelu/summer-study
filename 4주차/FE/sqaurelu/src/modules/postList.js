// post를 추가, 수정, 삭제 -> 리덕스로 관리?
// 추가, 수정, 삭제를 할 때마다 api를 다시 호출?

const LOAD_POST_LIST = 'postList/LOAD_POST_LIST';
const ADD_POST = 'postList/ADD_POST';
const MODIFY_POST = 'postList/MODIFY_POST';
const DELETE_POST = 'postList/DELETE_POST';

export const loadPostList = (posts) => ({ type: LOAD_POST_LIST, posts });
export const addPost = (post) => ({ type: ADD_POST, post });
export const modifyPost = (post) => ({
    type: MODIFY_POST,
    post,
});
export const deletePost = (postId) => ({ type: DELETE_POST, postId });

const initialState = [];

export default function postList(state = initialState, action) {
    switch (action.type) {
        case LOAD_POST_LIST:
            return action.posts; // ??
        case ADD_POST:
            return state.concat(action.post);
        case MODIFY_POST:
            return state.map((post) =>
                post.postId === action.post.postId
                    ? {
                          ...post,
                          postId: action.post.postId,
                          title: action.post.title,
                          content: action.post.content,
                          updatedDate: action.post.updatedDate,
                      }
                    : post
            );
        case DELETE_POST:
            return state.filter((post) => post.postId !== action.postId);
        default:
            return state;
    }
}
