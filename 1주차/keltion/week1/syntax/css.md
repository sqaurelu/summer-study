# 수코딩 CSS

## CSS 개념
HTML태그에 스타일을 지정할 때 사용하는 언어

### CSS 실행 방법
html에서 css를 사용하는 방법
1. 내부 스타일 시트(Internal Style Sheet)
    html문서 내부 css 직접 작성
    ```html 
    <style></style>
    ```
2. 외부 스타일 시트(External Style Sheet)
    확장자가 css로 끝내는 별도의 파일을 연결해서 사용
    ```html 
    <link href="style.css" rel="stylesheet">
    ``` 
3. 인라인 스타일(Inline Style)
    태그의 스타일 속성으로 css코드를 작성하는 방법
    ```html 
    <p style="color:green;">
    ```

### CSS 기본문법
선택자: 스타일링하고 싶은 html태그를 선택하는 영역

선택자{선언부}
선택자{속성:속성값;}

### CSS font-size, 크기 단위
1. font-size:16px; 로 사용
2. rem : html 태그에 적용되어있는 폰트사이즈의 배수 (html 태그의 기본 크기는 16px)
3. em : rem과 비슷하지만 기준이 부모태그임
4. vw : 웹브라우저 화면 가로크기(1ww는 1/100)
5. vh :웹브라우저 화면 세로크기 

### 텍스트 관련 CSS속성
1. font-family: [글꼴],[글꼴유형]; 로 사용

글꼴유형 = generic-family (serif, sans-serif, cursive, fantasy, monospace)

```html 
    <p style="font-family: 'Times New Roman', Times, serif">
```

TNR없으면 다음 우선순위 Times-> serif(고딕계열인지, 명조인지 필기체인지를 나타냄)

2. font-weight: 굵기 단위; normal, bold, bolder, lighter (100~900)

3. line-hight : 크기 단위 or 배수; 글자의 줄높이 지정
```css 
p{
    font-size:20px;
    line-height: 1.5;  /*20*1.5 or 30px로 표현가능(항상 폰트size보다 크게 설정해야함)*/
}
```



## 이미지맵
하나의 이미지위에 여러개의 링크를 설정
```html
<img src="google.png" alt="구글이미지" usemap="#google"><!--적절한 이름-->
<map name="google">
    <area shape="rect" coords="0,0,272,92" href="https://google.com" target="_blank" alt="구글 홈페이지 이동 링크">
</map>
```

## 실습내용
### 전체 선택자
*{

} 


### margin vs padding
Margin은 Object와 화면과의 여백(외부여백)을 말하며 Padding은 Object내의 내부여백을 의미

### box-sizing 설정 값
box-sizing: content-box | border-box | initial | inherit

content-box : defalut
border와 padding을 제외하고 content 영역을 기준으로 박스 사이즈가 결정된다.

border-box
border와 padding을 모두 포함한 영역을 기준으로 박스 사이즈가 결정된다.
