 
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //string만 포함된 변수는 대문자로 저장하는 관습
const USERNAME_KEY = 'username';
function onLoginSubmit(event) {
    event.preventDefault(); //event의 기본 행동을 방지함
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);// 백틱임!!!!! 1 왼쪽에 있는거 
    paintgreeting();
    
}
function paintgreeting() {
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

 //eventListner로 호출하는 함수는 default event 객체를 매개변수로 호출한다
// eventListner로 함수를 주면 자바스크립트가 함수를 실행시키는 것
//이때 매개변수인 이벤트 객체로 이벤트의 조건을 막거나 변경할 수 있음
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME); //show the form
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    //show greeting
    paintgreeting();
}


