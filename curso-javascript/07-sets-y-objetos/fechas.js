// Trabajando con fechas
const fecha = new Date();
console.log(fecha);

// Inicializar fechas
// Los meses inician en cero (0 - Enero, 11 - Diciembre)
const fecha2 = new Date(1980, 0, 10, 10, 23, 23, 100);
console.log(fecha2);

// Otra forma de iniicializar fechas
// A traves de los milisegundos
const fecha3 = new Date(0);
console.log(fecha3);

//Forma de definir fecha con string  
const fecha4 = new Date("October 13, 1979 12:14:44");
console.log(fecha4);

// Como comparar dos fechas
console.log(fecha > fecha2);

const fecha5 = new Date(1980, 0, 10, 10, 23, 23, 100);

// Error no se pueden comparar fechas de esta manera
console.log(fecha2 === fecha5);

// Forma correcta de comparar fecha iguales
console.log(fecha2.getTime() === fecha5.getTime());

// Obtener el dia, mes y año de una fecha

// Obtener el dia
console.log(fecha2.getDate());

// Obtener el mes
console.log(fecha2.getMonth() + 1);

// Obtener el año
console.log(fecha2.getFullYear());

// Mostrar una fecha en un string
console.log(fecha2.toLocaleDateString());

