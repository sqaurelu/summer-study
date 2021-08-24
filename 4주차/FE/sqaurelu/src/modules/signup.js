/**회원가입 과정
 * 1. api 호출
 * 2-1. 성공(토큰 저장)
 * 2-2. 실패(이미 회원가입된 ID 존재, 비밀번호 6자리 이하)
 */

const SUCCESS_SIGNUP = 'signup/SUCCESS_SIGNUP';
const EXIST_ID_ERROR = 'signup/EXIST_ID_ERROR';
const PASSWORD_ERROR = 'signup/PASSWORD_ERROR';

export const successLogin = () => ({ type: SUCCESS_SIGNUP });
export const existIdError = () => ({ type: EXIST_ID_ERROR });
export const passwordError = () => ({ type: PASSWORD_ERROR });

const initialState = {
    successSignup: false,
    existIdError: false,
    passwordError: false
};

export default function signup(state = initialState, action) {
    switch (action.type) {
        case SUCCESS_SIGNUP:
            return {
                successSignup: true,
                existIdError: false,
                passwordError: false,
            };
        case EXIST_ID_ERROR:
            return {
                successSignup: false,
                existIdError: true,
                passwordError: false,
            };
        case PASSWORD_ERROR:
            return {
                successSignup: false,
                existIdError: false,
                passwordError: true,
            };
        default:
            return state; // error(unhandled error?)
    }
}