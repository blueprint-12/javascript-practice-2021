// 조건
//1.  0에서 사용자가 지정한 숫자까지의 범위에서 랜덤 한 숫자를 찾으세요. (범위는 0 이상 입력값 이하가 됩니다.)
//2.  범위에는 음수가 포함될 수 없습니다.
//3.  실시간으로 범위 값을 업데이트해야 합니다.
//4.  유저가 숫자를 선택한 후에 게임을 플레이할 수 있습니다.
//5.  유저에게 게임의 승패를 알려야 합니다.


let numberForm = document.querySelector("form#number-form");
const settingNumber = numberForm.querySelector("#setNumber");
const guessNumber = numberForm.querySelector("#guessNumber");
const button = numberForm.querySelector("input#button");
// let divCont = numberForm.querySelector("#result");


function makeRandomNum(e){
    e.preventDefault();
    const rangeNum = settingNumber.value;
    const guessNum = guessNumber.value;
    const randomNum = Math.ceil(Math.random()* rangeNum);
    paintResult(guessNum, randomNum);
}
function resetResult(e){
   e.preventDefault();
   const body = document.querySelector("body");
   const div = document.querySelector("div");
   const span = document.querySelector("span");
   console.log(div, span, body);
   body.removeChild(body.div);
   body.removeChild(span);

   button.addEventListener("click", makeRandomNum);

}
function paintResult(guessNum, randomNum) {
    let div = document.createElement("div");
    let span = document.createElement("span")
    // randomNum은 숫자이고 guessNum은 인풋에서 받아온 것이라 String
   const guessNumNotString = parseInt(guessNum);
    if(guessNumNotString  === randomNum){
        div.innerHTML =`you chose : ${guessNum}, the machine chose :${randomNum}`;
        span.innerHTML =`You won ! `;
        document.body.appendChild(div);
        document.body.appendChild(span);
        button.addEventListener("click", resetResult);
        
       
    }else {
        div.innerHTML =`you chose : ${guessNum}, the machine chose :${randomNum}`;
        span.innerHTML =`You lose ! `;
        document.body.appendChild(div);
        document.body.appendChild(span);        
        button.addEventListener("click", resetResult);
        
    }
}


numberForm.addEventListener("submit", makeRandomNum);
