/*

Crea un nuevo archivo JS que contenga una lista con los 
siguientes elementos:

--- Tu nombre (string)
--- Tu edad (number)
--- ¿Eres desarrollador? (boolean)
--- Tu fecha de nacimiento (Date)
--- Tu libro favorito (Objeto con propiedades: titulo, autor, 
    fecha, url)

*/

const fecha = new Date(1979, 9, 5);

const libro = {
    titulo: "Javascript Al maximo",
    author: "El mejor autor",
    fecha: "2023-02-20",
    url: "https://javascript-al-maximo.com.es"
};

const datos = [
    "Cesar",
    43,
    true,
    fecha,
    libro
];

console.log(datos);