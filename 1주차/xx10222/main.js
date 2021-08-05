//dynamic이라는 id를 가진 문서 객체를 선택해라
let target=document.querySelector("#dynamic");


function randomString(){
    let stringArr = ["Learn to HTML","Learn to CSS","Learn to Javascript",
    "Learn to Python", "Learn to Ruby"]
    //배열 변수의 멤버를 랜덤하게 선택
    let selectString=stringArr[Math.floor(Math.random()*stringArr.length)];
    //단어를 한글자씩 쪼개서 배열에 저장
    let selectStringArr=selectString.split("");

    return selectStringArr;
}

//타이핑 리셋
function resetTyping(){
    target.textContent="";
    dynamic(randomString());
}

// 한글자씩 텍스트 출력하는 함수
function dynamic(randomArr){
    if(randomArr.length>0){
        //배열의 앞의 값부터 빼내라
        target.textContent+=randomArr.shift();
        setTimeout(function(){dynamic(randomArr);},80);
    }else{
        setTimeout(resetTyping,3000);
    }
}

dynamic(randomString());

//커서 깜빡이는 효과 처리 함수 - active 함수
function blink(){
    target.classList.toggle("active");
}
//반복함수 - blink함수 0.5초마다 반복
setInterval(blink, 500);
