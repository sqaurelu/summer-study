## ✨ html 연습

### 1.

'''javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css">
    <!-- <link rel="stylesheet" href="./css/main2.css"> -->
    <style>
        body{
            padding: 10px;
        }
    
        p{
            margin: 20px;
        }
        span{ /* inline 요소 */
            color: red;
            background-color: black;
        }
        table{

        }
        tr{

        }
        td{
            border: 1px solid red;
            padding: 10px;
        }
        

    </style>
</head>
<body>
    <a href="https://naver.com" target="_blank">NAVER</a>
    <a href="https://google.com">GOOGLE</a>
    
    <!-- 애국가-->
    <p>
        동해물과 백두산이 마르고 닳도록<br>
        하나님이 보우하사 <span>우리나라</span> 만세
    </p>

    <input type="text" value="html"
    placeholder="이름을 입력하세요!">
    <label>
        <input type="checkbox"/>Apple
    </label>
    <input type="checkbox" checked/>
    <input type="checkbox" disabled/>
    <div>
        <label>
            <input type="radio" name="num">1
        </label>
        <label>
            <input type="radio" name="num">23
        </label>
        <label>
            <input type="radio" name="num">100
        </label>
    </div>

    <table>
        <tr>
            <td>A</td>
            <td>B</td>
            <td>B'</td>
        </tr>
        <tr>
            <td>C</td>
            <td colspan="2">D</td>
        </tr>
    </table>
    
</body>
</html>

'''

### 결과 

![1](https://user-images.githubusercontent.com/74480236/128168452-e4d95791-bde2-49e6-a185-c6617283dcfb.PNG)



