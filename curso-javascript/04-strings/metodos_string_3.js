// Metodos de cadenas de texto parte III

// Expresiones regulares
// https://regex.com

let texto_largo = "Bueno en estos momentos la aplicación está en un 80%. faltan completar alguna funcionalidades para que cumpla lo requerido, es necesario que el tiempo sea un poco mayor para cumplir con la entrega";

// Cuantas veces está una palabra
console.log(texto_largo.match(/es/g));

// Existe la palabra dentro del texto
console.log(texto_largo.includes("Bueno"));

// Si un texto inicia con una palabra
console.log(texto_largo.startsWith("Bueno"));

// Si un texto termina con una palabra
console.log(texto_largo.endsWith("Bueno"));

