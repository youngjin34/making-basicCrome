const insertNumber = document.querySelector("#insert-number");
const numberInput = document.querySelector("#input-value");
const result = document.querySelector("#result");
const numberValue = document.querySelector("#number-submit");
const choiceValue = document.querySelector("#my-choice");
const realSubmit = document.querySelector("#real-submit")

const NUMBER_INPUT = "number";
const MY_NUMBER = "myNumber";

function onNumSubmit(event) {
  event.preventDefault();
  const number = numberInput.value;
  localStorage.setItem(NUMBER_INPUT, parseInt(number));
  const myNumber = numberValue.value;
  localStorage.setItem(MY_NUMBER, parseInt(myNumber))
}

function mouseClick() {
  const savedNumber = localStorage.getItem(NUMBER_INPUT);
  const geussNum = localStorage.getItem(MY_NUMBER);
  const machineNum = Math.ceil(Math.random() * (savedNumber - 1) + 1);
  if (savedNumber >= 0 && geussNum >= 0) {
    if (geussNum == machineNum) {
      insertNumber.addEventListener("submit", onNumSubmit);
      choiceValue.innerText = `You chose: ${geussNum}, the machine chose: ${machineNum}`;
      result.innerText = "You won!";
    } else {
      insertNumber.addEventListener("submit", onNumSubmit);
      choiceValue.innerText = `You chose: ${geussNum}, the machine chose: ${machineNum}`;
      result.innerText = "You lost..";  
    }
  } else {
    alert("양수를 입력하세요");
  }
}

realSubmit.addEventListener("click", mouseClick);
