//Desarrollar una función que escriba en la consola del navegador cada item de una lista de la compra.v

let lista = ["manzana", "fresas", "limones", "mermelada", "aguacate", "mangos"];

function print(listaCompra) {
  for (let i = 0; i < listaCompra.length; i++) {
    console.log(listaCompra[i]);
  }
}
print(lista);

//Desarrollar una función que escriba un Título h1 en el documento HTML.

function escribirTitulo(title) {
  document.querySelector(".saludar").innerHTML = "<h1>" + title + "</h1>";
}

escribirTitulo("Hola, Tobi");

//Teniendo un cuadrado de color rojo en el documento de HTML:
//Desarrollar una función que, al hacer click en el mismo, éste se transforme en una círculo de color verde

function changeColor() {
  let elemento = document.getElementById("circulo");
  elemento.classList.remove("cuadrado");
  elemento.classList.add("circle");
}
