package ejercicio1;

public class Ejercicio1 {

    public static void main(String[] args) {
        
        //Ejercicios 1
        int resultado = sumar(3, 4, 8);
        System.out.println("La suma es: " + resultado);
        
        //Ejercicio 2 instanciando una clase Coche 
        Coche miCoche = new Coche();
        miCoche.AdicionarPuerta();
        System.out.println("Ahora hay " + miCoche.numeroPuertas + " puerta(s)");
        
    }
    
    public static int sumar(int num1, int num2, int num3) {
        
        return num1 + num2 + num3;
        
    }
    
    
}

class Coche {
    public int numeroPuertas = 4;
    
    public void AdicionarPuerta() {
        this.numeroPuertas++;
    }
}
