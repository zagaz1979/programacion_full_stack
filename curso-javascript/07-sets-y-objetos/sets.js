// sets o conjuntos

// Creamos un array
const array = [1,2,3,4,5,1,2,5, "hola", {id:5}, {id:5}, "hola"];

console.log({id:5} == {id:5})

// Creamos un set y le pasamos como argumento un objeto iterable
const miSet = new Set(array);

console.log(array);
console.log(miSet);

// Añadir valores al set
// .add()
miSet.add(9);
console.log(miSet);

// Eliminar vaores en el set
// .delete()
miSet.delete("hola");
console.log(miSet);

// Eliminar todo del set
// .clear()
//miSet.clear();
//console.log(miSet);

// Como buscar un valor en set
// .has()

console.log(miSet.has(4)); 

// En el array seria
console.log(array.includes(2))

// Cual es el tamaño del set
// .size  --- propiedad
console.log(miSet.size)

// iterar un set
// forEach
miSet.forEach(element => {
    console.log(element)
});

const it_miSet = miSet.values();
console.log(it_miSet);

// Convertir a array
const ar_miSet = [...miSet];
console.log(ar_miSet);

