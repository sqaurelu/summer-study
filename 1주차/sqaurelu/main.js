let target = document.querySelector('#dynamic');

// making random string
function randomString() {
    let stringArr = ['Learn to HTML', 'Learn to Python', 'Learn to JavaScript'];
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
    let selectStringArr = selectString.split('');

    return selectStringArr;
}

// tpying reset
function resetTyping() {
    target.textContent = '';
    dynamic(randomString());
}

// printing text
function dynamic(randomArr) {
    if (randomArr.length > 0) {
        target.textContent += randomArr.shift();
        setTimeout(() => {
            dynamic(randomArr);
        }, 80);
    } else {
        setTimeout(resetTyping, 3000);
    }
}

dynamic(randomString());

function blink() {
    target.classList.toggle('active');
}

setInterval(blink, 500);