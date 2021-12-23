const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];
 
  const button = document.querySelector("#color-button");
//   let twoColoArr = [];
 // 두 값이 겹치지 않게 while문 써서 해보기 



function onbtnClickHandler(){
    const firstColor =  colors[Math.floor(Math.random() * colors.length)];
    const secondColor =  colors[Math.floor(Math.random() * colors.length)];
    document.body.style.background = `linear-gradient(.25turn,${firstColor}, ${secondColor})`

   
}


button.addEventListener("click", onbtnClickHandler);


