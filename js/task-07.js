const refs = {
  inputEl: document.querySelector("#font-size-control"),
  textEl: document.querySelector("#text"),
};
refs.inputEl.addEventListener("input", (fontValue) => {
  //   console.log(fontValue.target.value);
  refs.textEl.style.fontSize = `${fontValue.target.value}px`;
});
