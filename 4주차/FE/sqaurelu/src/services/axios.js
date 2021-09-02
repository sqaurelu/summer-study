import axios from 'axios';

// token이 있는 경우 헤더에 토큰을 넣어서 요청
const axiosApi = axios.create({
    baseURL: 'http://localhost:3000',
});

axiosApi.interceptors.request.use(function (config) {
    const token = sessionStorage.getItem('token');
    config.headers = {
        Authorization: token ? `Bearer ${token}` : null,
    };
    return config;
});

export const signupApi = (id, password, history) => {
    axiosApi
        .post('/users/sign-up', { id, password })
        .then(() => {
            history.push('/login');
        })
        .catch((e) => {
            alert(e.message);
            console.log(e);
        });
};

export const loginApi = (id, password, history) => {
    axiosApi
        .post('/users/sign-in', {
            id,
            password,
        })
        .then((res) => {
            const token = res.data.token;
            sessionStorage.setItem('userId', id);
            sessionStorage.setItem('token', token);

            history.push('/feed');
        })
        .catch((e) => {
            alert(e.message);
            console.error(e);
        });
};

export const feedApi = async () => {
    try {
        const res = await axiosApi.get('/posts');

        return res.data;
    } catch (e) {
        console.log(e);
    }
};

export const createPostApi = async (data, dispatch, addPost) => {
    axiosApi
        .post('/posts', data)
        .then((res) => {
            const { content, postId, title, userId, updatedDate } = res.data;

            dispatch(
                addPost({
                    content,
                    postId,
                    title,
                    userId,
                    updatedDate,
                })
            );
        })
        .catch((e) => console.log(e));
};

export const modifyPostApi = (postId, data, dispatch, modifyPost) => {
    axiosApi
        .put(`/posts/${postId}`, data)
        .then((res) => {
            const { content, postId, title, updatedDate } = res.data;

            dispatch(modifyPost({ content, postId, title, updatedDate }));
        })
        .catch((e) => console.log(e));
};

export const removePostApi = (postId, dispatch, deletePost) => {
    axiosApi
        .delete(`/posts/${postId}`)
        .then(() => {
            dispatch(deletePost(postId));
        })
        .catch((e) => console.log(e));
};
