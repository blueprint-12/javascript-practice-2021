
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
/*
✅ event명을 서칭하는 것에 있어서 미흡했습니다. 검색을 해서 원하는 event를 찾아도 
eventListener과 함께 사용할 때 작성하는 것에 있어서 혼란을 겪었습니다.
✅ 배열과 객체의 개념을 제대로 파악하지 못했습니다. 사용법 또한 마찬가지 입니다. 
✅객체 작성법과 이벤트 리스너 작성법이 한 가지가 아님을 명심하세요.
✅colors 배열을 활용해서 조건식을 활용해봅시다. 
✅js파일에 css를 import 하는 것은 메리트가 없습니다. 웹브라우저에서 확인해보니 import 에러가 뜹니다
✅contextmenu 이벤트가 어느 범위에서 사용되는 지 확인해야 합니다. -> 확인, window 도 작동하지만 MDN예시에 따르면 document입니다.
*/
const title = document.querySelector("h2");
// function mouseEnterHandler() {
//   title.innerText = "mouse is here!";
//   title.style.color = colors[0];
// }
// title.addEventListener("mouseenter", mouseEnterHandler);

// function mouseLeaveHandler() {
//   title.innerText = "mouse is gone!";
//   title.style.color = colors[1];
// }
// title.addEventListener("mouseleave", mouseLeaveHandler);

// function windowResizeHandler() {
//   title.innerText = "You just resized!";
//   title.style.color = colors[2];
// }
// window.addEventListener("resize", windowResizeHandler);

// function contextMenuHandler() {
//   title.innerText = "That was a right click!";
//   title.style.color = colors[4];
// }
// window.addEventListener("contextmenu", contextMenuHandler);

function fontColorChange() {
    title.style.color = colors[Math.floor(Math.random() * colors.length)];
}
//   let i = 0;
//   if(currentColor != randomColor){
//     title.style.color= randomColor;
//   }else {
//     title.style.color = colors[i];
//     i++;
//   }
   
// };
const superEventHandler = {
// colorChangeHandler :function(){
//     title.style.color = colors[Math.floor(Math.random() * colors.length)];
// },

  mouseEnterHandler: function () {
    title.innerText = "mouse is here!";
    title.style.color = fontColorChange();
  },
  mouseLeaveHandler: function () {
    title.innerText = "mouse is gone!";
    title.style.color = fontColorChange();
  },
  windowResizeHandler: function () {
    title.innerText = "You just resized!";
    title.style.color = fontColorChange();
  },
  contextMenuHandler: function () {
    title.innerText = "That was a right click!";
    title.style.color = fontColorChange();
  }
};
title.addEventListener("mouseenter", superEventHandler.mouseEnterHandler);
title.addEventListener("mouseleave", superEventHandler.mouseLeaveHandler);
window.addEventListener("resize", superEventHandler.windowResizeHandler);
document.addEventListener("contextmenu", superEventHandler.contextMenuHandler);
