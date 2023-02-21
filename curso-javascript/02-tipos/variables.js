var variable;
let variablelet_;

const constante = "Hola Soy una constante";

var a = 1;
console.log(a);

a = 4;
console.log(a);

console.log(constante);
//constante = "Adios";

let b = 3;
console.log(b);

b = 5;
console.log(b);

//Diferencia entre let y var
// Var afecta a todo el código
// let solamente afecta en el bloque donde esté declarado

var variable = "Hola soy una variable VAR";

for (var i = 0; i < 3; i++) {
    var variable = "Soy la segunda variable";
}

console.log(variable);

let variablelet = "Hola soy una variable LET";

for (var i = 0; i < 3; i++) {
    let variablelet = "Soy la segunda variable LET";
}

console.log(variablelet);

///////////////////////////////////////////////////////
// typeof

var num = 4;

// Nos dice el tipo de dato de una variable
console.log(typeof 1);
console.log(typeof "Hola");
console.log(typeof true);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof variable);
console.log(typeof variablelet_);
console.log(typeof num);

///////////////////////////////////////////////////////
// Escritura dinamica

num = "Hola soy alfanumerico"
console.log(typeof num);
