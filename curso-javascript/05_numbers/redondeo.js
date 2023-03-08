// Principales operaciones aritmeticas
let a = 3.5;
let b = 4.8;

// suma (+)
console.log(a + b);

// resta (-)
console.log(a - b);

// multiplica (*)
console.log(a * b);

// division (/)
console.log(a / b);

//Representacion de los numeros a cadenas de texto
console.log(typeof a);
let a_s = a.toString();
console.log(a_s);
console.log(typeof a_s);

//Redondeos de numeros
let c = 3.3;
let d = c * 3;

console.log(d);
console.log(typeof d);

// toFixed(x) limitar el numero de decimales al valor x
console.log(d.toFixed(2));
console.log(typeof d.toFixed(2));

let e = 344.3454657;
console.log(e.toFixed(2));

let f = 2334556678;
console.log(f.toFixed(2));


//toPresicion(x) tien en cuenta las cifras significativas
console.log(e.toPrecision(2));
console.log(typeof e.toPrecision(2));

