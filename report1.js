const h1 = document.querySelector(".title");

h1.innerText = "hey~";

console.log(h1);

const superEventHandler = {
  handleMouseEnter: function () {
    h1.innerText = "The mouse is Here!";
    h1.style.color = "green";
  },
  handleMouseLeave: function () {
    h1.innerText = "The mouse is Gone!";
    h1.style.color = "blue";
  },
  handleContextMenu: function () {
    h1.innerText = "That was a right Click!";
    h1.style.color = "orange";
  },
  handleWindowResize: function () {
    h1.innerText = "You just resized";
    h1.style.color = "purple";
  },
}


h1.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
h1.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
h1.addEventListener("contextmenu", superEventHandler.handleContextMenu);
window.addEventListener("resize", superEventHandler.handleWindowResize);