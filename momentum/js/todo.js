const toDoForm = document.querySelector("form#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("ul#todo-list");

const TODOS_KEY = "todos";

const toDos = [];

//toDos array의 내용을 localStorage에 넣는 일을 하는 function 
function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
};

function deldteTodo(event){
  const li = event.target.parentElement;
  li.remove(); // deleting Todo
}

function paintToDo(newTodo){ 
   const li =  document.createElement("li");
   const span = document.createElement("span");
   span.innerText= newTodo; // span의 텍스트 변경
   const button = document.createElement("button");
   button.innerText= "❌" //window emoji
   button.addEventListener("click", deldteTodo );
   li.appendChild(span);
   li.appendChild(button);
   toDoList.append(li);
};

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    // 입력값을 받으면 input의 화면을 비우기, 입력칸을 비웠다고해서 input값이 실제로 사라지는 것은 아님 
    toDoInput.value= "";
    //paintToDo()하기 전에 array로 받은 값 보내기 : push
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();

};
toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null){
    const parsedToDos = JSON.parse(localStorage.getItem(TODOS_KEY));
    parsedToDos.forEach((item) => console.log("this is the turn of ", item));
}