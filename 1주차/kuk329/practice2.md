## ✨ html&css&javascript


### index.html

```javacript
<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Typing Text</title>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="./style.css">
</head>

<body>
    <div class="wrap">
        <h1>
            <span class="material-icons">language</span>
        </h1>
        <p id="dynamic" class="lg-text"></p>
        <p class="sm-text">KIMCODING | 100 Projects</p>
    </div>
    <script src="main.js"></script>

</body>

</html>
```

### style.css

```javasciprt
  *{
      margin:0;
      padding: 0;
      box-sizing: border-box;
  }

  body{
      background-color: darkslateblue;   
  }

  .wrap{
      position: absolute;
      top: 50%;
      left:50%;
      transform:translate(-50%,-50%);
      color:white;
      text-align: center;
  }

  .material-icons{
      font-size: 10rem;
  }

  .lg-text{
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 5px;
  }

  .sm-text{
      font-size: 1.5rem;
  }

  #dynamic{
      position:relative;
      display: inline-block;
  }

  #dynamic::after{
      content:""; 
      display: block;
      position: absolute;
      top:0;
      right:-10px;
      width:4px;
      height:100%;
      background-color: white;
  }

  #dynamic.active::after{
      display:none;
  }

```


### main.js

```javascript
let target = document.querySelector("#dynamic");

function randomString(){
    let stringArr = ["Learn to HTML","Learn to HTML","Learn to Javascript",
    "Learn to Python","Learn to Ruby"];

    let selectString = stringArr[Math.floor(Math.random()*stringArr.length)];
    let selectStringArr = selectString.split("");
    
    return selectStringArr;

}

// typing reset
function resetTyping(){
    target.textContent="";
    dynamic(randomString());

}

dynamic(randomString());

// 한글자씩 텍스트 출력 함수
function dynamic(randomArr){

    //console.log(randomArr)
    if(randomArr.length>0){
        target.textContent += randomArr.shift();
        setTimeout(function(){
            dynamic(randomArr);
        },80)
    }else{
        setTimeout(resetTyping,3000);

    }
}



// 커서 깜박임 효과
function blink(){
    target.classList.toggle("active");
}

setInterval(blink, 500);

```

### 결과

![2](https://user-images.githubusercontent.com/74480236/128169289-6ca5ece8-88b0-4773-8232-93c8198d9ccb.PNG)




