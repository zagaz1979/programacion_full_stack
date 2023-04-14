// .sort() -> MODIFICA EL ARRAY
const array = [6, 2, 7, 23, 3, 0, 100];
console.log(array);

// Invierte el array
/*
array.sort( () => {
    return -1
});
*/

// el array permanece igual
/*
array.sort( () => {
    return +1
});
*/

// Vamos a ordenar
// Ordenando de menor a mayor
/*
array.sort( (a, b) => {
    if (a < b) {
        return -1;
    }else if (a > b) {
        return +1;
    }else {
        return 0;
    }
});
*/

// Hay una forma sencilla de hacerlo
// Ordenar únicamente arrays numéricos
// Ordenar de menor a mayor
const arrayNumerico = [5, 8, 0, 200, 99, 3, 2, 7];
arrayNumerico.sort( (a, b) => a - b )
console.log(arrayNumerico);

// Ordenar de mayor a menor
const arrayNumerico2 = [5, 8, 0, 200, 99, 3, 2, 7];
arrayNumerico2.sort( (a, b) => b - a )
console.log(arrayNumerico2);

// Interesante en array de objetos
const listaObjetos = [
    { nombre: "Maria", edad: 18 },
    { nombre: "Juana", edad: 20 },
    { nombre: "Ramon", edad: 22 },
    { nombre: "Santiago", edad: 48 }
]

/*
listaObjetos.sort( (a, b) => {
    if (a.edad < b.edad) {
        return -1
    }else if (a.edad > b.edad) {
        return +1
    }else {
        return 0
    }
});
*/

listaObjetos.sort( (a, b) => a.edad - b.edad );

console.log(listaObjetos);


