const toDoForm = document.querySelector("form#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("ul#todo-list");

function paintToDo(newTodo){ 
   const li =  document.createElement("li");
   const span = document.createElement("span");
   li.appendChild(span);
   span.innerText= newTodo;
   toDoList.append(li);
};

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    // 입력값을 받으면 input의 화면을 비우기, 입력칸을 비웠다고해서 input값이 실제로 사라지는 것은 아님 
    toDoInput.value= "";
    paintToDo(newTodo);

};
toDoForm.addEventListener("submit", handleToDoSubmit);