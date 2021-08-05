let target = document.querySelector("#dynamic");
//dynamic 이라는 id 속성 값을 가지고 있는 문서 객체를 선택 

//연관있는 기능을 모아 재활용하기 위한 함수 작성
function randomString(){
    
    let stringArr = ["Learn to HTML", "Learn to CSS", "Learn to JavaScipt", "Learn to Python", "Learn to Ruby"];
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)]
    // stringArr.length로 만들어지는 랜덤 숫자는 5 미만이다. floor 함수를 사용해서 5를 넘지 않는 랜덤한 숫자 출력
    let selectStringArr = selectString.split("");
    // 해당 문자열을 ""을 기준으로 배열로 분리시킴 -> 단어 하나하나가 쪼개져서 배열로 만들어짐 

    return selectStringArr;

}


//타이핑 리셋
function resetTyping(){
    target.textContent = "";
    dynamic(randomString())
}

//한 글자씩 텍스트 출력
function dynamic(randomArr){
    if( randomArr.length > 0){
        target.textContent += randomArr.shift();
        // shift()를 이용해서 배열의 앞 부분부터 빼내서 출력

        setTimeout( function(){
            dynamic(randomArr);
        }, 80)
        // 재귀 함수를 이용해서 dynamic 함수를  0.08초 간격으로 호출
    }
    else{
        setTimeout( resetTyping, 3000);
        // resetTyping이라는 함수가 3초후에 실행
    }
}

dynamic(randomString())

// 커서 깜박임 효과
function blink(){
    target.classList.toggle("active");
}

setInterval(blink, 500);
// setInterval 함수를 사용해서 blink 라는 함수를 0.5초 마다 실행

