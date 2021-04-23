const clockContainer = document.querySelector(".js-clock");
// const clockTitle = clockContainer.querySelector(".js-title");

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  //   clockContainer.innerHTML = `${hours} : ${minutes} : ${seconds}`;
  clockContainer.innerHTML = `${hours < 10 ? `0${hours}` : hours} 
    : ${minutes < 10 ? `0${minutes}` : minutes} 
    : ${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  console.log("Moment init");
  //   getTime();
  setInterval(getTime, 1000);
}

init();
