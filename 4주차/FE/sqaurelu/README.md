# Dev-Immersion 4주차 과제

## 새로 알게된 것

### 피드 페이지 리렌더링
사용자가 글을 쓰거나 수정, 삭제했을 경우 페이지가 리렌더링 되어야 한다. 3가지 상황이 일어났을 때 페이지를 리렌더링 시키려면 `post data`를 상태로 가지고 있어야 한다.

`/feed`페이지로 전환하면 피드 목록을 불러오는 api를 호출하는데, 이때 응답 받은 데이터들을 리덕스의 스토어에 저장해두었다. 글 작성, 수정, 삭제를 했을 때는 스토어의 post data를 수정시켜 페이지가 리렌더링되게 했다.

### axios 오류 처리
axios를 이용할 때 api 요청에서 에러가 난 경우 응답 메시지를 보려면 `error.response`를 사용해야한다. 그동안 받아온 `error`를 그냥 콘솔에 찍어서 에러 메시지를 볼 수 없었다. 그래서 로그인과 회원가입을 할 때 오류가 난 경우 서버에서 보내주는 에러를 구분하지 못해서 원인을 `alert`창에 띄울 수 없었다. 
```javascript
export const signupApi = (id, password, history) => {
    axiosApi
        .post('/users/sign-up', { id, password })
        .then(() => {
            history.push('/login');
        })
        .catch((error) => {
            const { statusCode, message } = error.response.data;
            alert(`${statusCode} ${message}`);
        });
};
```
- https://yamoo9.github.io/axios/guide/error-handling.html

### 사용자 인증
피드 페이지는 로그인된 사용자만 볼 수 있다. 사용자가 로그인할 때 세션 스토리지에 `userId`와 `token`을 저장했는데, `userId`의 존재 여부로 사용자 인증을 했다. 로그인이 안 된 경우에는 `/login` 페이지로 리다이렉트 시켰다.

```javascript
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function AuthRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) =>
                sessionStorage.getItem('userId') ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: props.location },
                        }}
                    />
                )
            }
        />
    );
}

export default AuthRoute;
```

## 페이지(login/signup/feed)

<p align="center">
  <img width="400" alt="스크린샷 2021-08-25 오후 11 56 33" src="https://user-images.githubusercontent.com/55270881/130814382-66039339-a401-4209-bc94-040729cd8f36.png"><img width="400" alt="스크린샷 2021-08-25 오후 11 56 23" src="https://user-images.githubusercontent.com/55270881/130814408-b6438d6a-997a-428f-b72e-4c01e05f56d9.png"><img width="400" alt="스크린샷 2021-08-25 오후 11 56 07" src="https://user-images.githubusercontent.com/55270881/131864431-57decae2-6cf1-4689-a84a-863e85f470bf.png">
</p>
