/**로그인 과정
 * 1. api 호출
 * 2-1. 성공(토큰 저장)
 * 2-2. 실패(비밀번호 틀림 or 존재하지 않는 아이디)
 */

/**사용자 로그인 여부 store login
 * -> token이 있으면 로그인 상태, 
 * -> null이면 로그인 안된 상태
 */

const SUCCESS_LOGIN = 'login/SUCCESS_LOGIN';
const WRONG_PASSWORD_ERROR = 'login/WRONG_PASSWORD_ERROR';
const NOT_EXIST_ID_ERROR = 'login/NOT_EXIST_ID_ERROR';

export const successLogin = ({ token }) => ({ type: SUCCESS_LOGIN, token });
export const wrongPasswordError = () => ({ type: WRONG_PASSWORD_ERROR });
export const notExistIdError = () => ({ type: NOT_EXIST_ID_ERROR });

const initialState = {
    token: null,
    wrongPasswordError: false,
    notExistIdError: false,
};

export default function login(state = initialState, action) {
    switch (action.type) {
        case SUCCESS_LOGIN:
            return {
                token: action.token,
                wrongPasswordError: false,
                notExistIdError: false,
            };
        case WRONG_PASSWORD_ERROR:
            return {
                token: null,
                wrongPasswordError: true,
                notExistIdError: false,
            };
        case NOT_EXIST_ID_ERROR:
            return {
                token: null,
                wrongPasswordError: false,
                notExistIdError: true,
            };
        default:
            return state; // error(unhandled error?)
    }
}