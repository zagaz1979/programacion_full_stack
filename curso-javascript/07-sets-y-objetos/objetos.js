// Trabajando con objetos

const obj = {
    id: 1,
    nombre: "Maria",
    apellido: "Gonzalez",
    isDeveloper: true,
    libros_favoritos: ["Uno dos tres", "Picapiedra"],
    "4-juegos": [1,2,3,4]
}

// Acceder a los objetos en javascript
console.log(obj.apellido);
console.log(obj["4-juegos"]);

// Acceder a propiedades a traves de variables
const prop = "isDeveloper";
console.log(obj[prop]);

// Como replicar un objeto - copia la referencia
const obj2 = obj;
console.log(obj2);

// Hacer un cambio en obj2
obj2.nombre = "Julian";
console.log(obj2.nombre);
console.log(obj.nombre);

let val = 4;
let val2 = val;
val2 = 6;

console.log(val);
console.log(val2);

// Copiar un objeto dentro de otro
const obj3 = {...obj}
console.log(obj.nombre);
console.log(obj2.nombre);

obj3.nombre = "Susana";
console.log(obj3.nombre);
console.log(obj.nombre);
console.log(obj2.nombre);

// Como ordenar lista de objetos en funcion de un propiedad
const listaPeliculas = [
    {
        titulo: "Lo que el viento se llevo",
        anio: 1939

    },
    {
        titulo: "Titanic",
        anio: 1997

    },
    {
        titulo: "Mohana",
        anio: 2016

    },
    {
        titulo: "El efecto mariposa",
        anio: 2004

    },
    {
        titulo: "Ted",
        anio: 2012

    },
];

console.log(listaPeliculas);

// sort() - muta el valor original
listaPeliculas.sort((a, b) => a.anio - b.anio);
console.log(listaPeliculas);