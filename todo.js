const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector(".js-toDoInput");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LOCAL_STORAGE = "toDos";

//const problem
// const toDosArray = [];
let toDosArray = [];

//save Local Storage
addToDo();

//Delete ToDo
function deleteToDo(event) {
  // console.log(event.target);
  // console.dir(event.target);
  console.log(event.target.parentNode);

  const deleteButton = event.target;
  const deleteli = deleteButton.parentNode;

  //how to delete child element mdn,Node.removeChild()
  //Parent 기준 하부 child HTML 까지 삭제
  toDoList.removeChild(deleteli);

  //Local Storage 에 들어가는 toDosArray에서 해당 부분 삭제
  const cleanToDos = toDosArray.filter(function (toDosArray) {
    console.log(toDosArray.id, deleteli.id);

    //toDosArray.id 는 number, deleteli.id 는 string
    // return toDosArray.id !== deleteli.id; // deleteli.id 가 string 이라서 문제발생
    return toDosArray.id !== parseInt(deleteli.id);
  });

  console.log("cleanToDos:", cleanToDos);
  toDosArray = cleanToDos; // const problem
}

// local Storage에 저장하기, only string data
function addToDo() {
  // localStorage.setItem(TODOS_LOCAL_STORAGE, toDosArray);// 저장에 문제로 stringify 사용
  localStorage.setItem(TODOS_LOCAL_STORAGE, JSON.stringify(toDosArray));
}

// 배열을 출력하기
function arrayPrint(toDosArray) {
  console.log(toDosArray.text);
  paintToDo(toDosArray.text);
}

//Local Storeag에서 toDo 가져오기
function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LOCAL_STORAGE);

  if (loadedToDos !== null) {
    // console.log("JSON stringify:", loadedToDos);
    const parsedToDos = JSON.parse(loadedToDos);
    // console.log("JSON parse:", parsedToDos);
    parsedToDos.forEach(arrayPrint);
  } else {
    console.log("TODO NULL");
  }
}

//HTML로 toDoList 그리기
function paintToDo(text) {
  // console.log("paintToDo:", text);

  const toDoli = document.createElement("li");
  const deleButton = document.createElement("button");
  const toDoSpan = document.createElement("span");
  const newId = toDosArray.length + 1;

  deleButton.innerHTML = "✔";
  deleButton.addEventListener("click", deleteToDo);
  toDoSpan.innerHTML = text;

  toDoli.appendChild(deleButton);
  toDoli.appendChild(toDoSpan);
  toDoList.appendChild(toDoli);

  toDoli.id = newId;

  const toDoObj = {
    id: newId,
    text: text,
  };

  //배열에 추가하기
  toDosArray.push(toDoObj);

  //Local Storage에 추가하기
  addToDo();
}

// 리플레쉬 submit방어 코드
function handleTodoSubmit(event) {
  event.preventDefault();
  const currentTodoValue = toDoInput.value;

  paintToDo(currentTodoValue);
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleTodoSubmit);
}

init();
