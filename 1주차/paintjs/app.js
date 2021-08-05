const canvas = document.getElementById("jsCanvas");
const cxt = canvas.getContext("2d");
const colors = document.querySelectorAll(".jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode")
const saveBtn = document.getElementById("jsSave");

const INITIAL_COLOR = "#2C2C2C";

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;


let painting = false;
let filling = false;

cxt.fillStyle = "white";
cxt.fillRect(0, 0, canvas.width, canvas.height);
cxt.strokeStyle =INITIAL_COLOR;
cxt.fillStyle = INITIAL_COLOR;
cxt.lineWidth = 2.5;

function stopPainting() {
    painting = false;
}

function startPainting() {
    painting = true;
}

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    if (!painting) {
        cxt.beginPath();
        cxt.moveTo(x, y);
    } else {
        cxt.lineTo(x, y);
        cxt.stroke();
    }
}
function onMousedown(event) {
    startPainting();
}

function handleColorClick(event) {
    const color = event.target.style.backgroundColor;
    cxt.strokeStyle = color;
    cxt.fillStyle = color;
}
function handleRangeChange(event) {
    const range = event.target.value;
    cxt.lineWidth = range;
}
function handleModeClick() {

    if (filling === true) {
        filling = false;
        mode.innerText = "Fill";
    } else {
        filling = true;
        mode.innerText = "Paint";
        
    }
}
function handleCanvasClick() {
    if (filling) {
        cxt.fillRect(0, 0, canvas.width, canvas.height);
    } else {        
    }
}
function handleSaveClick(){
    const image = canvas.toDataURL("image/jpeg");
    const link = document.createElement("a");
    link.href = image;
    link.download = "image"; // download는 파일명 href가 파일주소
    link.click();
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMousedown);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click", handleCanvasClick);
    canvas.addEventListener("contextmenu", event => event.preventDefault());
}

if (range) {
    range.addEventListener("input", handleRangeChange);
}
if (mode) {
    mode.addEventListener("click", handleModeClick);
}
if (saveBtn) {
    saveBtn.addEventListener("click", handleSaveClick);
}


colors.forEach(item=>
    item.addEventListener("click", handleColorClick)
);