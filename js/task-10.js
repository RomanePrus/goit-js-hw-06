function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  inputEl: document.querySelector("input"),
  btnCreate: document.querySelector("[data-create]"),
  btnDestroy: document.querySelector("[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};
refs.inputEl.addEventListener("input", e);
// console.log(refs.inputEl);
// const amount = refs.inputEl.value;
function e() {
  const inputValue = refs.inputEl.value;
  console.log(inputValue);
}
// for (let i = 0; i < amount; i += 1) {
//   const element = array[i];
// }
