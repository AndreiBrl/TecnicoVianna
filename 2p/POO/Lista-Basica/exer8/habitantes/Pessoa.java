public class Pessoa{
    private String sexo;
    private String corOlhos;
    private String corCabelo;
    private int idade;
    private double altura;
    
    
    public Pessoa(String sexo,String corOlhos,String corCabelo, int idade,double altura){
        this.sexo=sexo;
        this.corOlhos=corOlhos;
        this.corCabelo=corCabelo;
        this.idade=idade;
        this.altura = altura;
    }
    
    public double getAltura(){
        return this.altura;
    }
    public String getSexo(){
        return this.sexo;
    }
    public int getIdade(){
        return this.idade;
    }
    public String getOlhos(){
        return this.corOlhos;
       
        
    }
    
    public String getCabelo(){
        return this.corCabelo;
    }
}