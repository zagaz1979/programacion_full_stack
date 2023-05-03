// .some()

const array = [1, 2, 7, 4, 5, -6, 7, 8, -9, 34, 0];

const res = array.some(valor => valor < 0);
console.log(res);

const existe = array.some(valor => valor === -6);
console.log(existe);

const listaObjetos = [
    { nombre: "Maria", edad: 18 },
    { nombre: "Juana", edad: 20 },
    { nombre: "Ramon", edad: 22 },
    { nombre: "Santiago", edad: 48 }
]

const existeRamon = listaObjetos.some(persona => persona.nombre === "Ramon");
console.log(existeRamon);

// Como obtener una lista a partir de un objeto iterable
const str = "hola soy Cesar";
console.log(str[0]);

const arr_str = Array.from(str);
console.log(arr_str);

const set = new Set([2, 3, 5, "Juan", 3]);
const arr_set = Array.from(set);
console.log(arr_set);

const keys = array.keys();
console.log(keys);
console.log(typeof keys);

const arr_keys = Array.from(keys);
console.log(arr_keys);


