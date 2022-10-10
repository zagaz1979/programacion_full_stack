package claseprueba;

public class ClasePrueba {

    public static void main(String[] args) {
        
        //Abstracto
        
        
        /*
        Vehiculo coche = new Vehiculo();
        coche.setTipo("Coche");
        coche.setVelocidadMaxima(120);
        coche.setRapido(true);
        
        Vehiculo moto = new Vehiculo();
        moto.setTipo("Moto");
        moto.setVelocidadMaxima(50);
        moto.setRapido(false);
        
        System.out.println(coche.getTipo() + " " + coche.getVelocidadMaxima());
        System.out.println(moto.getTipo() + " " + moto.getVelocidadMaxima());
        
        System.out.println("El coche es: " + coche.isRapido());
        */

        //String tipo = "Coche";
        //vehiculo.setTipo(tipo);
        //System.out.println(vehiculo.getTipo());
        
        //vehiculo.tipo = "Coche";
        //System.out.println(vehiculo.tipo);

    }
    
}

abstract class Vehiculo {

    private String tipo; 
    private int velocidadMaxima;
    private String sonido;

    
    abstract public void setSonido(String sonido);
    abstract public String getSonido();
    
    //private int estado;
    //private boolean rapido;
    
    /*
    public void setRapido(boolean rapido){
        this.rapido = rapido;
    }
    
    public boolean isRapido(){
        return this.rapido;
    }
    */
    
    
    public void setTipo(String tipo){
        this.tipo = tipo;
    }    
    
    public String getTipo(){
        return this.tipo;
    }

    public void setVelocidadMaxima(int velocidadMaxima){
        this.velocidadMaxima = velocidadMaxima;
    }

    public int getVelocidadMaxima(){        
        return this.velocidadMaxima;
    }
        
}

