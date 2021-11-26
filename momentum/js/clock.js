const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    clock.innerText = (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
}
//1초의 대기 시간 후 에 internval 이 발생하기 때문에 한번 호출해 줘야 합니다.
getClock();
setInterval(getClock, 1000 );