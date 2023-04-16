
public class Carro{
    private boolean automatico;
    private boolean vidroAutomatico;
    private boolean alarme;
    private boolean tetoSolar;
    private boolean kitMultimidia;
    private double potencia;
    private double custo=15000;
    private String modelo;
    

    
    public Carro(boolean automatico,boolean vidroAutomatico, boolean alarme,boolean tetoSolar,boolean kitMultimidia,double potencia, double custo,String modelo){
        this.automatico=automatico;
        this.vidroAutomatico=vidroAutomatico;
        this.alarme=alarme;
        this.tetoSolar=tetoSolar;
        this.kitMultimidia=kitMultimidia;
        this.potencia=potencia;
        this.modelo=modelo;
    }
    
    public double getCusto(){
        return this.custo;
    }
    
    //sets
    public void setCusto(double custo){
        this.custo=custo;
    }
    
}