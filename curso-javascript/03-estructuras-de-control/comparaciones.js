// Comparaciones

// Igualdad

// Igualdd debil
if (5 == 5) {
    console.log("5 es igual a 5");
}

// Igualdad fuerte
if (5 === 5) {
    console.log("5 es muy igual a 5");
}

let a = 5;
console.log(typeof a)
let b = "5";
console.log(typeof b)

// Solo chequea el valor
if ( a == b ) {
    console.log("a es igual a b -- debil");
}

// chequea el valor y el tipo de datos
if ( a === b ) {
    console.log("a es muy igual a b -- fuerte");
}

// Desigualdad
let c = 4;
let d = "4";

if ( c != d ) {
    console.log("c es diferente de d -- debil");
}

if ( c !== d ) {
    console.log("c es muy diferente de d -- fuerte");
}

// Comparaciones mayor que y menor que
let max = 10;
let min = 5;

if ( max > min ) {
    console.log("max es mayor que min");
}

if ( max >= 10 ) {
    console.log("max es mayor que min");
}

if ( min < max ) {
    console.log("min es menor que max");
}

if ( min <= 5 ) {
    console.log("mnn es menor o igual que max");
}

 
