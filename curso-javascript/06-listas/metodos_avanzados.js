// Trabajar con metodos mas avanzados
// .map(), .filter(), .reduce()

const ciudades = ["Bucaramanga", "Monteria", "Cucuta", "Sincelejo", "Valledupar"];

// Metodo anterior
const val = ciudades.forEach( item => {
    console.log(item)
});

console.log(val);

/*
const newArray = ciudades.map( (valor, indice) => {
    return `${indice + 1}- ${valor}`;
});
*/

// map
const newArray = ciudades.map( (valor, indice) => `${indice + 1}- ${valor}`);
console.log(newArray);

// filter

const listaObjetos = [
    { nombre: "Maria", edad: 18 },
    { nombre: "Juana", edad: 20 },
    { nombre: "Ramon", edad: 22 },
    { nombre: "Santiago", edad: 48 }
]

/* 
const personasMayores = listaObjetos.filter( obj => {
    if (obj.edad > 30) {
        return true;
    }else {
        return false;
    }
});
 */

const personasMayores = listaObjetos.filter( obj => obj.edad > 30 );
console.log(personasMayores);

const nuevaLista = listaObjetos.filter( obj => obj.nombre !== 'Ramon' );
console.log(nuevaLista);

// Reduce
const valores = [1,2,3,4,5,6,7,8,9];
const suma = valores.reduce( (acumulado, curr, i, arrayOriginal) => {
    console.log(acumulado);
    console.log(curr);
    console.log(i);
    console.log(arrayOriginal);
    return acumulado + curr;
});

console.log(suma);
