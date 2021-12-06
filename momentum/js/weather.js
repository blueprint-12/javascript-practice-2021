const API_KEY ="68de1d9c799906ce4441e0fb10644395";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
 // url 마지막에 &units=metric 을 추가하여 화씨->섭씨로 전환했습니다. 
   const url  = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

   fetch(url).then(response => response.json()).then(data => {
       const weather = document.querySelector("#weather span:first-child");
       const city =document.querySelector("#weather span:last-child"); 
       
       city.innerText = data.name;
       weather.innerText =  `${data.weather[0].main} / ${data.main.temp}℃, `;
    });
};
function onGeoError(){
    alert("can't find you, no weather for you");
};


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);