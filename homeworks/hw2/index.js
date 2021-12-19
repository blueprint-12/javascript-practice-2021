const screen = document.querySelector("body");
const content = document.querySelector("h2");

const YELLOWCLASS= "back-ground--yellow";
const BLUECLASS = "back-ground--blue";
const PINKCLASS = "back-ground--pink";
let screenWidth = window.innerWidth;

function removeOtherClass( a , b ){ 
    screen.classList.remove( a , b );
}

function windowResizeHandler(){
    const smallScreen = 600;
    const middleScreen = 800;
    const screenWidth = window.innerWidth;
    // const fullScreen = 1200;  조건식에서 사용 X
    
    //화면이 resize되면 폰트컬러 black -> white , 내용 Hello! 로 바뀝니다.// 
    content.innerText="Hello!"; 
    content.classList.add("font-color--white");

    //if else if 문을 사용해야 하기 때문에 toggle은 사용에 적합하지 않습니다. 
    //마지막조건문 else if((screenWidth > middleScreen) 필요없습니다. -> else로 대체 
    if (screenWidth <= smallScreen){
        removeOtherClass(YELLOWCLASS, BLUECLASS);
        screen.classList.add(PINKCLASS);
     
       
    }else if((screenWidth <= middleScreen) && (screenWidth >smallScreen)){
        removeOtherClass(PINKCLASS, YELLOWCLASS);
        screen.classList.add(BLUECLASS);
       
    }else {
        removeOtherClass(PINKCLASS, BLUECLASS);
        screen.classList.add(YELLOWCLASS);
        
    } 
}

window.addEventListener("resize", windowResizeHandler)

