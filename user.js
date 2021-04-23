const form = document.querySelector(".js-form");
// const input = document.querySelector("input");//ChangeTest
const input = form.querySelector("input"); //ChangeTest

const greeting = document.querySelector(".js-greetings");

const USER_LOCAL_STORAGE = "currentUser";
const SHOWING_CLASS_NAME = "showing";

//Hallo Wer sind Sie ?
//Guten Tag , Roy.

function saveName(text) {
  localStorage.setItem(USER_LOCAL_STORAGE, text);
}

//Prevent redrow submit Function
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  console.log(currentValue);
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CLASS_NAME);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  greeting.innerText = `Guten Tag, ${text}`;
  // greeting.classList.remove(SHOWING_CLASS_NAME);
  form.classList.remove(SHOWING_CLASS_NAME);
  greeting.classList.add(SHOWING_CLASS_NAME);
}
function loadName() {
  const currentUser = localStorage.getItem(USER_LOCAL_STORAGE);

  if (currentUser === null) {
    askForName();
    console.log("NO Name");
  } else {
    console.log("Have Name");
    paintGreeting(currentUser);
  }
}
function init() {
  loadName();
}

init();
