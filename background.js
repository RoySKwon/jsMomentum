const body = document.querySelector("body");

const IMAGES_NUMBER = 5;

/*  
//Image API
function handleImageLoad() {
  console.log("finished loading");
}
 */
function paintImage(imgNumber) {
  const image = new Image();
  //   image.src = `./images/1.jpg`;
  image.src = `./images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  //   image.addEventListener("loadend", handleImageLoad); //Image API
  body.appendChild(image);
  //   body.prepend(image);
}
function genRandom() {
  const number = Math.floor(Math.random() * IMAGES_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
