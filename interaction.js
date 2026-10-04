const button = document.querySelector("#button");
const message = document.querySelector("#header");

let splatInstance = 0;

function buttonClick() {
  const newImage = document.createElement("img");
  newImage.src = `images/tomato-splat-oneloop-speed.gif?play=${++splatInstance}`;
  newImage.alt = "tomato splat";
  newImage.classList.add("splat-image");
  document.body.appendChild(newImage);

  setTimeout(() => {
    newImage.remove();
  }, 5000);
}

button.addEventListener("click", buttonClick);