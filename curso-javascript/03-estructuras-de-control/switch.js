// Sentencia switch

let nota = 111;

switch (nota) {
    case 5:
        console.log("Excelente trabajo, sobresaliente");
        break;
    case 4:
        console.log("Buen trabajo, pero podrias hacerlo mejor");
        break;
    case 3:
        console.log("Haz obtenido un suficiente");
        break;
    case 2:
        console.log("No haz aprobado por poco");
        break;
    case 1:
        console.log("No haz estudiado nada, trabaja un poco mas");
        break;
    default:
        console.log("Error, la nota debe de estar comprendida entre el 1 y 5");
        break;

        
}