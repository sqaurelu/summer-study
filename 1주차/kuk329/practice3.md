## ✨전역 속성


##### 각 tag의 요소들은 자신이 사용할수 있는 속성들이 정해저 있는데, 전역속성의 경우 모든 tag에서 사용할수 있는 속성을 말한다.
##### title : 요소의 정보나 설명을 지정
##### style : 요소에 적용할 스타일(css)을 지정
##### class : 요소를 지칭하는 중복 가능한 이름
##### id    : 요소를 지칭하는 고유한 이름
##### data-이름 : 요소에 데이터를 지정

```javascript
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    span {
      color: blue;
    }

    .bear {
      color: chartreuse;
    }

    #first {
      color: red;
    }
  </style>

</head>

<body>

  <a href="https://www.naver.com" title="네이버로 이동" style="background-color: rgb(123, 240, 248);">Naver</a>

  <p> <span class="bear" id="first">Bears </span> are carnivoran <span>mammals</span> of the family Ursidae. They are
    classified as caniforms, or doglike carnivorans.<br>
    Although only eight species of <span class="bear">bears</span> are extant, they are widespread, appearing in a wide
    variety of habitats throughout<br>
    the <span>Northern Hemisphere</span> and partially in the <span>Southern Hemisphere.</span><br>
    <span class="bear">Bears</span> are found on the continents of North America, South America, Europe, and Asia.<br>
    Common characteristics of modern <span class="bear">bears</span> include large bodies with stocky legs, .....<br>

    <div data-fruit-name="apple">사과</div>
    <div data-fruit-name="banana">바나나</div>


    <script>
      const els = document.querySelectorAll('div');
      els.forEach(el => {
        console.log(el.dataset.fruitName)

      });
    </script>
</body>

</html>

```

### 결과

![3](https://user-images.githubusercontent.com/74480236/128174678-b5311c55-0a1e-484c-88b1-425f94ed30d6.PNG)

