const input = document.getElementById("sadist");
const span = document.getElementById("love");
const submitbtn = document.getElementById("submit");
const main = document.getElementsByTagName("main");
const dismissbtn = document.getElementById("Dismiss");
console.log(main);
const sucess = document.querySelector(".success-message");
function newsletter() {
  const getInputValue = input.value;
  span.textContent = getInputValue;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (emailRegex.test(getInputValue)) {
    main[0].style.display = "none";
    sucess.style.display = "block";
  } else {
    main.style.display = "flex";
    sucess.style.display = "none";
  }
}

function dismissButton() {
  main[0].style.display = "flex";
  sucess.style.display = "none";
}

dismissbtn.addEventListener("click", dismissButton);
submitbtn.addEventListener("click", newsletter);
// dismissbtn.addEventListener("click", dismissButton);
