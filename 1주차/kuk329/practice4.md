## ✨ html, css, javascript (+ 반응형)

### 1. index.html

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap" rel="stylesheet">
    <title>Nav bar</title>
    <script src="https://kit.fontawesome.com/2754523a1a.js" crossorigin="anonymous"></script>
    <script src="main.js" defer></script>
</head>
<body>
    <nav class="navbar">
        <div class="navbar__logo"> 
            <i class="fab fa-accusoft"></i>
            <a href="">KimCoding</a>
        </div>
        <ul class="navbar__menu">
            <li><a href="">Home</a></li>
            <li><a href="">Gallery</a></li>
            <li><a href="">Weddings</a></li>
            <li><a href="">FAQ</a></li>
            <li><a href="">Bookings</a></li>

        </ul>
        <ul class="navbar__icons">
            <li><i class="fab fa-twitter"></i></li>
            <li><i class="fab fa-facebook"></i></li>

        </ul>

        <a href="#" class="navbar__toogleBtn">
            <i class="fas fa-bars"></i>
        </a>

    </nav>
    
</body>
</html>

```

### 2. style.css

```javascript
:root{
    --text-color : #f0f4f5;
    --background-color:#263343;
    --accent-color : #73d466;
}

body{
    margin: 0;
    font-family: 'Source Sans Pro', sans-serif;
}
a{
    text-decoration: none;
    color: var(--text-color);
}
.navbar{
    display:  flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--background-color);
    padding: 8px 12px;

}
.navbar__logo{
    font-size: 24px;
    color: var(--text-color);
}
.navbar__logo i{
    color: var(--accent-color);
}
.navbar__menu{
    display: flex;
    list-style: none;
    padding-left: 0;
}
.navbar__menu li{
    padding: 8px 12px;

}
.navbar__menu li:hover{
    background-color: var(--accent-color);
    border-radius: 4px;


}
.navbar__icons{
    list-style: none;
    color: var(--text-color);
    display: flex;
    padding-left: 0;
}
.navbar__icons li{
    padding: 8px 12px;
}

.navbar__toogleBtn{
    display: none;
    position: absolute;
    right: 32px;
    font-size: 24px;
    color: var(--accent-color);
}


@media screen and (max-width: 768px){
    .navbar{
        flex-direction: column;
        align-items: flex-start;
        padding: 8px 24px;
    }
    .navbar__menu{
        display: none;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
    .navbar__menu li{
        width: 100%;
        text-align: center;
    }
    .navbar__icons{
        display: none;
        justify-content: center;
        width: 100%;
    }
    .navbar__toogleBtn{
        display: block;
    }
    .navbar__menu.active,
    .navbar__icons.active{
        display: flex;
    }
}

```

### 3. main.js

```javascript
const toggleBtn=document.querySelector('.navbar__toogleBtn');
const menu=document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

toggleBtn.addEventListener('click',()=>{
    menu.classList.toggle('active');
    icons.classList.toggle('active');
})


```

### 결과

![4](https://user-images.githubusercontent.com/74480236/128352573-8cafd878-fe72-4392-9145-6fc3c32191fb.PNG)

![5](https://user-images.githubusercontent.com/74480236/128352588-6bb08107-a920-411a-b64f-73485aceef6b.PNG)
