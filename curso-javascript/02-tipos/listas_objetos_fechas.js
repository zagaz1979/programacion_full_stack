// Listas ó array ó arreglo
const lista = [1, "Hola", true, undefined, null];
const lista2 = new Array(1, "Hola", true, undefined, null);

const lista3 = new Array(3);
lista3[0] = "Soy el primer elemento pos 0";

const lista4 = [lista, lista2, lista3];

console.log(lista);
console.log(lista2);
console.log(lista3);
console.log(lista4)

// Objetos
const movil = {
    altura: 10,
    anchura: 5,
    marca: "xiaomi",
    isWhite: false,
    contactos: ["Gorka", "Martin", "Jose"],
    tarjeta: {
        marca: "Sndisk",
        almacenamiento: 32
    },
    "altura-tarjeta": 4
}

movil.anio = 2023;
console.log(movil)

console.log(movil.contactos)

movil.marca = "Samsung";
console.log(movil.marca)

// Fechas
// Librerias de apoyo ... moment.js
const fecha = new Date();
console.log(fecha);

const fecha_milis = new Date(10);
console.log(fecha_milis)

const fecha_cadena = new Date("march 25 2023");
console.log(fecha_cadena);

const fecha_valores = new Date(2023, 1, 20);
console.log(fecha_valores);

const dia  = fecha.getDate();
const mes  = fecha.getMonth() + 1;
const anio = fecha.getFullYear();

console.log(`${dia}/${mes}/${anio}`);

