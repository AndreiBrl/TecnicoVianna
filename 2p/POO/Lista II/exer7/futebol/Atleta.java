public class Atleta {
    protected String nome;
    private Double peso;
    
    
    public Atleta(){
        
    }
    public String getNome(){
        return this.nome;
    }
    public void setNome(String nome){
        this.nome=nome;
    }
    public double getPeso(){
        return this.peso;
    }
    public void setPeso(double peso){
        this.peso=peso;
    }
}