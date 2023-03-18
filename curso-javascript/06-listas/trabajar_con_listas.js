// Como trabajar con listas (Arrays, arreglos, vectores)
let var1 = 45;
let array = [1,2,3,4,5,6, false, undefined, null, {id: 2}, "Hola", var1, [1,2,3]];
console.log(array);

// Acceder a los valores de un array a traves de su posicion

console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);

// Metodos para introducr nuevos valores en nuestro array
// push() y unshift()  --- mutan el array
array.push("final");
console.log(array);

//Valores al final push
array.push(4,5,6);
console.log(array);

// Valores al principio
array.unshift(6);
console.log(array);

// Metodos para eliminar valores en el array
// pop(), shift()

const array2 = [1,2,3,4,5];

// valore al final
array2.pop();
console.log(array2);

// elimina valor al inicio
array2.shift();
console.log(array2);

// Para eliminar, modificar o añadir valores en el array
// splice(x, y, z)
const array3 = [1,2,3,4,5,6];

// Elimna valores
array3.splice(2, 1);
console.log(array3);

// Añadir valores
array3.splice(2, 0, "lola");
console.log(array3);

//array3.splice(2, 0, "hola", "Mar", "Luna");
//console.log(array3);

// Modificar valores con splice
array3.splice(2, 1, 3);
console.log(array3);

