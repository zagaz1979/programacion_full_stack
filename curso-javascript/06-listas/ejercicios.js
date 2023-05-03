//Crea un archivo JS que contenga las siguientes líneas

//- Una variable que contenga la lista de la compra (mínimo 5 elementos)

const compra = ["Arroz", "Carne", "Pan", "Leche", "Huevos"];

//- Modifica la lista de la compra y añádele "Aceite de Girasol"

compra.push("Aceite de Girasol");
console.log(compra);

//- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

compra.pop();
console.log(compra);

//- Una lista de tus 3 películas favoritas (objetos con propiedades: 
//  titulo, director, fecha)

const peliculas = [
    {
        titulo: "La paloma blanca",
        director: "Jose Mercado",
        fecha: "2023-01-01"
    },
    {
        titulo: "El lo sabe todo",
        director: "Jesucristo",
        fecha: "2013-01-01"
    },
    {
        titulo: "Cuan Grande Es El",
        director: "El TodoPoderoso",
        fecha: "2020-01-01"
    }
];


//- Una nueva lista que contenga las películas posteriores 
// al 1 de enero de 2010 (utilizando filter)

const peliculas_posteriores = peliculas.filter( pelicula => pelicula.fecha > "2010-01-01");
console.log(peliculas_posteriores)

//- Una nueva lista que contenga los directores de la lista  
//  de películas original (utilizando map)

const directores = peliculas.map( director => director.director );
console.log(directores)

//- Una nueva lista que contenga los títulos de la lista 
//  de películas original (utilizando map)

const titulos = peliculas.map( titulo => titulo.titulo );
console.log(titulos);

//- Una nueva lista que concatene la lista de directores y la  
//  lista de los títulos (utilizando concat)

const directores_titulos = directores.concat(titulos);
console.log(directores_titulos)

//- Una nueva lista que concatene la lista de directores y la  
//  lista de los títulos (utilizando el factor de propagación)

const directores_titulos2 = [...directores, ...titulos];
console.log(directores_titulos2)
