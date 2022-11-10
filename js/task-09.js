function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  btnEl: document.querySelector("button.change-color"),
  bodyEl: document.querySelector("body"),
  btnColorValue: document.querySelector("span.color"),
};

refs.btnEl.addEventListener("click", onBtnClick);

function onBtnClick(event) {
  let randomColor = getRandomHexColor();
  refs.bodyEl.style.backgroundColor = randomColor;
  refs.btnColorValue.textContent = randomColor;
}
