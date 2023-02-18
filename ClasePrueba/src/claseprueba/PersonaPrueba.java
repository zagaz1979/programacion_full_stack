package claseprueba;

public class PersonaPrueba {

    public static void main(String[] args) {
        
        Persona persona1 = new Persona();
        Persona persona2 = new Persona();
        
        System.out.println("Persona 1:");
        persona1.setNombre("Maria");
        System.out.println(persona1.getNombre());
        
        persona1.setEdad(19);
        System.out.println((int)persona1.getEdad());
        
        persona1.setTelefono("3003456787");
        System.out.println(persona1.getTelefono());
        
        System.out.println("------------------------------------");
        
        System.out.println("Persona 2:");
        persona2.setNombre("Marco");
        System.out.println(persona2.getNombre());
        
        persona2.setEdad(38);
        System.out.println((int)persona2.getEdad());
        
        persona2.setTelefono("3103456797");
        System.out.println(persona2.getTelefono());
        
    }
    
}

class Persona {
    
    private int edad;
    private String nombre;
    private String telefono;
    
    public void setEdad(int edad){
        this.edad = edad;
    }
    
    public int getEdad(){
        return this.edad;
    }
    
    public void setNombre(String nombre){
        this.nombre = nombre;
    }
    
    public String getNombre(){
        return this.nombre;
    }
    
    public void setTelefono(String telefono){
        this.telefono = telefono;
    }
    
    public String getTelefono(){
        return this.telefono;
    }
    
}
