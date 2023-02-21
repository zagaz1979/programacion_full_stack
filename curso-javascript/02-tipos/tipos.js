// Tipos primitivos

// number
4;

// string
"Hola mundo";
'Hola mundo';
`Hola mundo`;

// booleanos
true;
false;

// nulo y undefined
null;
undefined;

// Cual es la diferencia entre
// null, undefined, false, 0  --- Todas son false 
if (null) {
    console.log("cumple");
}else {
    console.log("No cumple"); // se va por aquí
}

if (undefined) {
    console.log("cumple");
}else {
    console.log("No cumple"); // se va por aquí
}

if (0) {
    console.log("cumple");
}else {
    console.log("No cumple"); // se va por aquí
}

if (true) {
    console.log("cumple");
}else {
    console.log("No cumple"); // se va por aquí
}

console.log(null === undefined) // false