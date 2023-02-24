// Bucle for

// i = i + 1
// i += 1
// i++

for (let i = 0; i < 10; i++) {
    console.log(i);
}

let lista = [2, 7, 0, -4, 6, 15];

for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
}

// Estrutura for of

for (valor of lista) {
    console.log(valor);
}

// Estructura forEach

lista.forEach(valor => {
    console.log(valor);
})

// Estructura for in

let persona = {
    nombre: "Cesar",
    apellido: "Garcia",
    edad: 43,
    desarrollador: true
}

console.log(persona.nombre);

let prop = "edad";
console.log(persona[prop]);

for (propiedad in persona) {
    console.log(propiedad);
    console.log(persona[propiedad])
}

