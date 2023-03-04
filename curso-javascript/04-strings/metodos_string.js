// Metodos mas utilizados con cadenas de caracteres

// Longitud de string
let str = "Hola soy un string";
console.log(str.length);

// Obtener partes de cadenas de caracteres
// slice() substring() substr()

let slice_str = str.slice(0, 10);
console.log(slice_str);

let substring_str = str.substring(5, 10);
console.log(substring_str);

let substr_str = str.substr(5, 10);
console.log(substr_str);

// Remplazar parte del contenido de una cadena de texto
let cadena = "Hola mi nombre es Cesar";
console.log(cadena);

// Al utilizar cadenas solo remplaza la primera instancia
console.log(cadena.replace("Cesar", "Querit"));

let texto_largo = "Bueno en estos momentos la aplicación está en un 80%. faltan completar alguna funcionalidades para que cumpla lo requerido, es necesario que el tiempo sea un poco mayor para cumplir con la entrega";

console.log(texto_largo.replace("es", "y "));

// Al utilizar la expresión regular global remplaza toas las instancias
console.log(texto_largo.replace(/es/g, "y "));
