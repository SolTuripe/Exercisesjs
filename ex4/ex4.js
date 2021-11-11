//Having a text input and a button: Develop a function that when clicking on it, writes the content (value) of the input as a title in the document.
let button = document.querySelector(".click");


function render() {
  let input = document.querySelector(".escribir").value;
  let impres = document.querySelector(".impress");
  impres.innerHTML += `<h1>${input}</h1>`;
}

button.addEventListener("click", render);
