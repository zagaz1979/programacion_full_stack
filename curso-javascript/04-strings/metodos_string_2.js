// Metodos de cadenas de texto (parte II)

let input = "Saray";
let db = "saray";

// toLowerCase() - toUpperCase() 

console.log(input.toLowerCase());
console.log(input.toUpperCase());

console.log(input === db);
console.log(input.toLowerCase() === db.toLowerCase());

// Formas de concatenar dos cadenas de caracteres 
let str1 = "Hola soy la primera cadena.";
let str2 = "y yo soy la segunda cadena.";

console.log(str1.concat(" ", str2));
console.log(str1 + " " + str2);
console.log(`${str1} ${str2}`);

// Eliminar espacios al incio y al final
let str3 = "       Hola soy una cadena con espacios al final     ";
console.log(str3.length)

console.log(str3.trim().length);

// Eliminar espacios al inicio
console.log(str3.trimStart().length)

// Eliminar espacios al final
console.log(str3.trimEnd().length)


// Obtener el caracter que hay en cierta posicion
let str4 = "Hola soy el string numero 4";
console.log(str4.charAt(1));

// como listas
console.log(str4[5]);

// Obtener la posicion de una palabra dentro de una cadena de caracteres
let str5 = "Hola me llamo cesar y me gusta programar. Mi nombre es cesar y apellido garcia";
console.log(str5.indexOf("cesar"));
console.log(str5.lastIndexOf("cesar"));
console.log(str5.charAt(14));


