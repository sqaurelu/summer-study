# Dev-Immersion 3주차 과제

- 사용한 api<br/>
[공공데이터활용지원센터_보건복지부 코로나19 시·도발생 현황](https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15043378)

## 1. 프로젝트 내용
공공 데이터 포털의 api를 이용해 코로나 현황을 알려주는 웹 페이지를 만들었습니다.

<p align="center">
  <img width="800" alt="사이트 이미지" src="https://user-images.githubusercontent.com/55270881/129881302-4bebe24e-71da-4d4d-973b-8e345177cdfa.png">
</p>

## 2. 사용된 기술
Javascript, React, Redux, styled-components 

## 3. 새로 알게 된 내용
### cors 발생
api를 호출했을 때 cors 오류가 났다. api 서버와 웹페이지의 origin이 달라서 생기는 문제이다. 서버 쪽에서 응답 헤더에 Access-Control-Allow-Origin을 세팅해주면 되는데 서버는 직접 수정할 수 없기 때문에 불가능했다. 그리고 따로 개발 서버를 만들지 않고 리액트만 이용해서 api 요청을 할 생각이었다. 그래서 웹팩 개발 서버의 proxy를 이용했다. CRA로 프로젝트를 만든 경우 package.json에 proxy 값으로 api 서버의 도메인을 추가 해주기만하면 쉽게 사용할 수 있다.
```json
{
  // ...
  "proxy": "http://openapi.data.go.kr"
}
```


### 비동기 작업
async await을 이용해서 api를 호출하는 비동기 작업을 처리했다. 그리고, api 호출에 오류가 났을 경우를 처리해주기 위해 try catch문을 이용했다.


## 4. 더 공부해야 할 내용(부족했던 부분)
- 좋은 변수명과 파일명(특히 styled components를 사용할 때 이름을 어떻게 정해야할지 모르겠다.)
- 프로젝트 구조
- 테스트 코드
- 여러 개의 컴포넌트에서 api로 요청한 데이터 값이 필요했기 때문에 api로 요청한 데이터 값을 store에 저장해서 조회하도록 했는데 이게 맞는 방법인지 확실하게 모르겠다. 리액트에서 데이터를 어떻게 처리하는지 좀 더 알아봐야할 것 같다.
