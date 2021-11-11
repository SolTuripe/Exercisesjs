// Develop a function that writes in the browser console each item of a shopping list.

let list = ["manzana", "fresas", "limones", "mermelada", "aguacate", "mangos"];

function printList(lista) {
  for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
  }
}

printList(list);
