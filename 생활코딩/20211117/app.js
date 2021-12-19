const h1 = document.querySelector(".hello-one h1");

function handleTitleClick() {
    const clickedClass = "clicked";
    /**만약에 clickedClass가 h1의 classList에 포함되어 있다면  */
  if( h1.classList.contains(clickedClass)){
      h1.classList.remove(clickedClass);
  }else {
      h1.classList.add(clickedClass);
  }
};


h1.addEventListener("click", handleTitleClick);

