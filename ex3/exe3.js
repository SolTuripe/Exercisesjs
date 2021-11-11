//Having a red square in the HTML document: Develop a function that, when you click on it, it turns into a green circle.

let shape = document.querySelector(".target");

function clickFunction() {
  if (shape.classList.contains("cuadrado")) {
    shape.classList.remove("cuadrado");
    shape.classList.add("circle");
  } else {
    shape.classList.remove("circle");
    shape.classList.add("cuadrado");
  }
}

shape.addEventListener("click", clickFunction);
