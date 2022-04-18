const toDoForm = document.querySelector('form#todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('ul#todo-list');

const TODOS_KEY = 'todos';

let toDos = [];

//toDos array의 내용을 localStorage에 넣는 일을 하는 function
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove(); // deleting Todo
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement('li');
  li.id = newTodo.id;
  const span = document.createElement('span');
  span.innerText = newTodo.text; //obj 의 text
  const button = document.createElement('button');
  button.innerText = '✖'; //window emoji
  button.addEventListener('click', deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.append(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  // 입력값을 받으면 input의 화면을 비우기, 입력칸을 비웠다고해서 input값이 실제로 사라지는 것은 아님
  toDoInput.value = '';
  //toDos에 text가 아닌 id를 가진 객체 넣기
  const newTodoObj = {
    text: newTodo,
    id: Date.now(), //return type : number
  };
  //paintToDo()하기 전에 array로 받은 값 보내기 : push
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}
toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(localStorage.getItem(TODOS_KEY));
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
