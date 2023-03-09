// Operador .valueOf

let a = 2;
let b = new Number(3);
console.log(a);
console.log(b);
console.log(a + b);
console.log(a.valueOf() + b.valueOf());

console.log(b.valueOf());

let str = new String("Hola soy un string");
console.log(str);
console.log(str.valueOf());


// NAN - Infinity
//Not a Number

let n = new Number("adios");
console.log(n);
console.log(isNaN(n));

let numerador = 19;
let divisor = 0;
console.log(numerador / divisor);

let divisor2 = null;
console.log(numerador / divisor2);

// Como convertir los string a valores numericos - number, paserInt, parseFloat
let numero = '5.89';
let num2 = 17.2;
console.log(typeof numero);
console.log(numero + num2); // Error de concepto

console.log(Number(numero) + num2);

console.log(parseInt(numero))
console.log(parseFloat(numero))

let num3 = 4;
console.log(parseInt(num3))
console.log(parseFloat(num3))


// Numeros hexadecimales (base 16)
let numhex = '0x3a5b7';
console.log(parseInt(numhex, 16));


// Como obtener los valores maximos y minimos en js

let min_presicion = Number.EPSILON;
let minimo_valor_js = Number.MIN_VALUE;
let max_valor_js = Number.MAX_VALUE;

console.log(min_presicion);
console.log(minimo_valor_js);
console.log(max_valor_js);

console.log(2 ** 1023);
