package ejercicio9;

public class Ejercicio9 {

    public static void main(String[] args) {

        System.out.println("------------------------------------------------------");
        System.out.println("Datos del Cliente");
        System.out.println("------------------------------------------------------");
        
        Cliente cliente = new Cliente();
        
        cliente.edad = 25;
        cliente.nombre = "Juana Pineda";
        cliente.telefono = "3104356576";
        cliente.credito = 50000;
        
        System.out.println("La edad del cliente es: " + cliente.edad);
        System.out.println("El nombre del cliente es: " + cliente.nombre);
        System.out.println("El telefono del cliente es: " + cliente.telefono);
        System.out.println("El credito del cliente es: " + cliente.credito);
        

        System.out.println("------------------------------------------------------");
        System.out.println("Datos del Trabajador");
        System.out.println("------------------------------------------------------");
        
        
        Trabajador trabajador = new Trabajador();
        
        trabajador.edad = 45;
        trabajador.nombre = "Anibal Montiel";
        trabajador.telefono = "3012234354";
        trabajador.salario = 5000000;

        System.out.println("La edad del trabajador es: " + trabajador.edad);
        System.out.println("El nombre del trabajador es: " + trabajador.nombre);
        System.out.println("El telefono del trabajador es: " + trabajador.telefono);
        System.out.println("El salario del trabajador es: " + trabajador.salario);
        
        
    }
    
}

class Persona {
    int edad;
    String nombre;
    String telefono;
}

class Cliente extends Persona {
    int credito;
}

class Trabajador extends Persona {
    int salario;
}
