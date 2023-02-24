/* 
Este archivo debe calcular el factorial de 
10 utilizando un bucle while, una bifurcación if y una 
sentencia break
*/

let i = 1;
let factorial = 1;
while (true) {
    factorial = factorial * i;
    if (i == 10) {
        break;
    }
    i++;
}
console.log(factorial);