function onGeoOK(position) {
    console.log(position);
    const lat = position.coords.latitude;
    const lon = position.coords.longitude; //onGeoOk는 success함수로 GeoLocationPosition을 매개변수로 받음(사용자 위치)
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText = `${data.weather[0].main}/${data.main.temp}C`;
        city.innerText = data.name;
    });
}

const API_KEY = "62f27fd8cff1aa3ca7a71b8c520163be"

function onGeoError() {
    alert("Can't find you. No weather available")
}


navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);