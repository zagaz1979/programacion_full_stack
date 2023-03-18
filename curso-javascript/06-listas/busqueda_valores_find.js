// Iterar los valores de una lista

const array = ["hola", 2, 60, undefined, null, false];

// forma tradicional (menos eficiente) - for
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);    
}

// Forma moderna es6 (Mas eficiente) - forEach
array.forEach(valor => {
    console.log(valor);
})

let suma = 0;
const arrayNum = [1,2,3,4,5,6,7,8,9];
arrayNum.forEach(valor => {
    suma += valor;
    console.log(valor);
})
console.log(suma);

// Busqueda de un valor dentro de una lista - find()
// quiero encontra el elemento 5

const variable = arrayNum.find(valor => {
    if (valor === 5) {
        return true;
    }
})

console.log(variable);

const listaObjetos = [
    { nombre: "Maria", edad: 18 },
    { nombre: "Juana", edad: 20 },
    { nombre: "Ramon", edad: 22 },
    { nombre: "Santiago", edad: 48 }
]

/*
const objeto = listaObjetos.find(o => {
    if (o.nombre === "Ramon") {
        return true;
    }
});

console.log(objeto);
console.log(objeto.edad);
*/

/*
const objeto = listaObjetos.find(o => {
    return o.nombre === "Ramon";
});

console.log(objeto);
console.log(objeto.edad);
*/

/*
const objeto = listaObjetos.find(o => o.nombre === "Ramon");

console.log(objeto);
console.log(objeto.edad);
*/

const { edad } = listaObjetos.find(o => o.nombre === "Ramon");
console.log(edad);
