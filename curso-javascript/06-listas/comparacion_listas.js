// Como podemos comparar listas
// .every()

const array = [1,2,3,4,5,6,7,8,9];

/*
const resultado = array.every( valor => {
    if (typeof valor === "number") {
        return true
    }else {
        return false
    }
})
*/

// otra forma simplificada
const resultado = array.every( valor => valor > 0 )

console.log(resultado);

// Comparacion de listas
const ar1 = [1, 2, 3, 4];
const ar2 = [1, 2, 3, 4];


console.log(ar1 === ar2);

/*
const compararArrays = (array1, array2) => {
    if (array1.length !== array2.length) return false
    const res = array1.every( (valor, i) => {
        if (valor === array2[i]) return true
        return false 
    })     
}
*/

const compararArrays = (array1, array2) => {
    if (array1.length !== array2.length) return false
    const res = array1.every( (valor, i) => valor === array2[i])
    return res     
}

console.log(compararArrays(ar1, ar2));

const ar3 = [1, 2, 3, 6];

console.log(compararArrays(ar1, ar3));
