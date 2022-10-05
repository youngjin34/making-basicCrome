const clockTitle = document.querySelector(".js-clock");
const question = document.querySelector("#question input");

function countCristmas() {
  const christmas = new Date("2022-12-25")
  const date = new Date();
  const day = String(Math.floor((christmas - date) 
                  / (1000 * 60 * 60 * 24))).padStart(2, "0");
  const hour = String(Math.floor(((christmas - date) 
                  / (1000 * 60 * 60)) % 24)).padStart(2, "0");
  const minute = String(Math.floor(((christmas - date) 
                  / (1000 * 60)) % 60)).padStart(2, "0");
  const seconds = String(Math.floor((christmas - date) 
                  / 1000 % 60)).padStart(2, "0");
  clockTitle.innerText = `${day}d ${hour}h ${minute}m ${seconds}s`
}

function onClickBtn() {
  countCristmas();
  setInterval(countCristmas, 1000);
}

question.addEventListener("click", onClickBtn);
