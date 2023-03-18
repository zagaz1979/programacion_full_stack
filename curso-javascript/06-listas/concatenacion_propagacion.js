// Como unir dos listas

let lista1 = ["Hola", 2, true];
let lista2 = ["Adios", 5, 8, [1,2,3]];

console.log(lista1.concat(lista2));

console.log(lista1);
console.log(lista2);

const lista3 = lista1.concat(lista2);
console.log(lista3);

// Como unir dos listas por medio del factor de propagacion
console.log(...lista3);

const lista4 = [...lista1, ...lista2];
console.log(lista4);

const lista5 = [lista1, lista2];
console.log(lista5);

