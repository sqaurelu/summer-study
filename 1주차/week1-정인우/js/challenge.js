const clock = document.querySelector("h3");


function getClock() {
    const christmas = new Date('2021 12-25 00:00:00');
    const curtime = new Date();
    const timeLeft = christmas - curtime;

    const _sec = 1000;
    const _min = _sec * 60;
    const _hour = _min * 60;
    const _day = _hour * 24;

    const days = String(Math.floor(timeLeft / _day)).padStart(2, "0");
    const hours = String(Math.floor((timeLeft % _day) / _hour)).padStart(2, "0");
    const minutes = String(Math.floor((timeLeft % _hour) / _min)).padStart(2, "0");
    const seconds = String(Math.floor((timeLeft % _min) / _sec)).padStart(2, "0");

    clock.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
getClock();
setInterval(getClock, 1000);
