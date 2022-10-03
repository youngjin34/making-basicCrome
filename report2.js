const title = document.querySelector("body");
title.innerText = "Hello!";

function handleWindowResized() {
  if (window.innerWidth <= 600) {
    title.style.backgroundColor = "blue";
  } else if (window.innerWidth <= 900 && window.innerWidth > 600) {
    title.style.backgroundColor = "purple"
  } else {
    title.style.backgroundColor = "yellow"
  }
}

window.addEventListener("resize", handleWindowResized);