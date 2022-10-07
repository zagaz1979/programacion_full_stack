package sentenciasdecontrol;

public class SentenciasDeControl {

    public static void main(String[] args) {
        
        // Condicionesles if - else if - else
        int numeroIf = 3;
        numeroNPC(numeroIf);
        
        // Bucle while
        int numeroWhile = 1;
        bucleWhile(numeroWhile);
        
        // Bucle do while
        int numeroDoWhile = 2;
        bucleDoWhile(numeroDoWhile);
        
        // Bucle for
        bucleFor();
        
        // Switch
        String estacion = "verano";
        sentenciaSwitch(estacion);
        
    }
    
    public static void numeroNPC(int numero) {
        
        //Usando un if, crear una condición que compare 
        //si la variable numeroIf es positivo, negativo, o 0.
        
        System.out.println("--- Condicionales ---");

        if (numero < 0) {
            System.out.println("El número es negativo");
        }else if (numero > 0){
            System.out.println("El número es positivo");
        }else{
            System.out.println("El numero es Cero");
        }

        System.out.println("--- Fin Condicionales ---");
        System.out.println("");
        System.out.println("");
        
    }
    
    public static void bucleWhile(int numero) {
        
        /*        
        Crea un bucle While, este bucle tendrá que tener como condición que la 
        variable numeroWhile sea inferior a 3, el bloque de código que tendrá 
        el bucle deberá:
        
        - Incrementar el valor de la variable en uno cada vez que se ejecute.
        - Mostrarlo por pantalla cada vez que se ejecute.
        */

        System.out.println("--- Bucle while ---");
        
        while (numero < 3) {
            numero++;
            System.out.println(numero);
        }
        
        System.out.println("--- Fin Bucle while ---");
        System.out.println("");
        System.out.println("");

        
    }
    
    public static void bucleDoWhile(int numero) {
    
        /*
        Para el bucle Do While, deberás crear la misma estructura que en el While, 
        pero solo se debe ejecutar una vez.
        */
        
        System.out.println("--- Bucle do while ---");
        
        do {
            numero++;
            System.out.println(numero);
        }while (numero < 3);
        
        System.out.println("--- Fin Bucle do while ---");
        System.out.println("");
        System.out.println("");
        
    }
    
    
    public static void bucleFor() {

        /*
        Para el bucle For, crea una variable numeroFor, esta variable 
        tendrá como valor 0 y su condición será que la variable sea igual o 
        menor que 3, se irá incrementando en 1 su valor cada vez que se 
        ejecute y deberá mostrarse por pantalla.
        */
        
        System.out.println("--- Bucle for ---");
        
        for (int numeroFor = 0; numeroFor <= 3; numeroFor++) {
            System.out.println(numeroFor);
        }
        
        System.out.println("--- Fin Bucle for ---");
        System.out.println("");
        System.out.println("");
                
    }
    
    
    public static void sentenciaSwitch(String estacion) {
        
        /*
        Por último, para el Switch, deberás crear la variable estacion, y 
        distintos case para las cuatro estaciones del año. Dependiendo del valor 
        de la variable estacion se deberá mandar un mensaje por consola informando 
        de la estación en la que está. También habrá que poner un default 
        para cuando el valor de la variable no sea una estación.
        */

        System.out.println("--- Sentencia switch ---");
                
        switch (estacion) {
            
            case "verano":
                System.out.println("Es verano");
                break;
            case "invierno":
                System.out.println("Es invierno");
                break;
            case "Otoño":
                System.out.println("Es otoño");
                break;
            case "primavera":
                System.out.println("Es primavera");
                break;
            default:
                System.out.println("No es una estacion");
                break;
                            
        }

        System.out.println("--- Fin Sentencia switch ---");
        System.out.println("");
        System.out.println("");
        
        
    }
}
