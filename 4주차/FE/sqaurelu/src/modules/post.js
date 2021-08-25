const CHANGE_TITLE = 'post/CHANGE_TITLE';
const CHANGE_CONTENT = 'post/CHANGE_CONTENT';
const MODIFY_POST = 'post/MODIFY_POST';
const RESET_POST = 'post/RESET_POST';

export const changeTitle = (title) => ({ type: CHANGE_TITLE, title });
export const changeContent = (content) => ({
    type: CHANGE_CONTENT,
    content,
});
export const modifyPost = (post) => ({ type: MODIFY_POST, post });
export const resetPost = () => ({ type: RESET_POST });

const initialState = {
    modify: false,
    post: {
        postId: '',
        userId: '',
        title: '',
        content: '',
        updatedDate: '',
    },
};

export default function post(state = initialState, action) {
    switch (action.type) {
        case CHANGE_TITLE:
            return {
                ...state,
                post: {
                    ...state.post,
                    title: action.title,
                },
            };
        case CHANGE_CONTENT:
            return {
                ...state,
                post: {
                    ...state.post,
                    content: action.content,
                },
            };
        case MODIFY_POST:
            return {
                ...state,
                modify: true,
                post: action.post,
            };
        case RESET_POST:
            return {
                ...state,
                modify: false,
                post: initialState.post,
            };
        default:
            return state;
    }
}
