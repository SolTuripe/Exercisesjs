//Develop a function that writes each item of a shopping list in the HTML document.

let listaAnimales = ["perro", "gatos", "loros", "peces", "caballos"];

function print() {
  listaAnimales.forEach((element) => {
    let elemento = document.querySelector("#animales");
    elemento.innerHTML += "<li>" + element + "</li>";
  });
}

print(listaAnimales);

//Otra forma
/*
function print(lista) {
    for (let i = 0; i < lista.length; i++) {
        let elemento = document.querySelector(".animales");
        elemento.innerHTML += "<li>" + listaAnimales[i] + "</li>";
    }
    }
  
  
    print(listaAnimales);
*/
