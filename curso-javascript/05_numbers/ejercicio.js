/*

Crea un archivo JS que contenga las siguientes líneas

--Una variable que contenga tu altura en centímetros (entero)
--Una variable que contenga tu altura en metros (número de coma flotante)
--Una variable que contenga tu peso en kilogramos (número de coma flotante)
--Una variable que contenga tu altura en metros redondeada hacia arriba
--Una variable que contenga tu peso en kilogramos redondeado hacia abajo

--Una variable que contenga si "el máximo valor que se puede obtener en 
  Javascript + 1" es igual al máximo valor que se puede obtener en Javascript

*/

let altura_centimetro = 180;
console.log(altura_centimetro); // 100

let altura_metro = parseFloat(1.69);
console.log(altura_metro); // 1.69

let peso = parseFloat(78.9);
console.log(peso); // 78.9

let altura_metro_round = Math.ceil(1.69);
console.log(altura_metro_round); // 2

let kilogramos_round = Math.floor(78.9);
console.log(kilogramos_round); // 78

let max_valor_js1 = Number.MAX_VALUE + 1;
let max_valor_js2 = Number.MAX_VALUE;
console.log(max_valor_js1 === max_valor_js2); // true
