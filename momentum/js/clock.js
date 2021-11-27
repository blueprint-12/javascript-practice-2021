const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
//1초의 대기 시간 후 에 internval 이 발생하기 때문에 한번 호출해 줘야 합니다.
getClock();
setInterval(getClock, 1000 );

