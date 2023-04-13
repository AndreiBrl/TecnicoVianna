import java.util.ArrayList;
public class Pesquisa{
    private ArrayList <Pessoa> vetPessoas = new ArrayList();
    
    
    public Pesquisa(){
        

        
    }
    public void cadastraPessoa(String sexo,String corOlhos,String corCabelo, int idade,double altura){
        
        Pessoa pessoa = new Pessoa(sexo,corOlhos,corCabelo,idade,altura);
        vetPessoas.add(pessoa);
    }
    
    
    public String calculaAltura(){
    double maiorAltura=vetPessoas.get(0).getAltura(),menorAltura=maiorAltura;
    for(Pessoa pessoa : vetPessoas){
        if(pessoa.getAltura()>maiorAltura){
            maiorAltura=pessoa.getAltura();
        }
        if(pessoa.getAltura()<menorAltura){
            menorAltura=pessoa.getAltura();
        }

    }
    return "A maior altura é "+ maiorAltura+" metros e a menor algura é "+ menorAltura +" metros";
    }
    
    public String mediaAlturaMulheres(){
        double media=0;
        int qtdmulheres=0;
        
        for(Pessoa pessoa:vetPessoas){
            if(pessoa.getSexo().equalsIgnoreCase("feminino")){
                media+=pessoa.getAltura();
                qtdmulheres++;
            }
        }
        return "A media de altura entre as mulheres é "+String.format("%2f",media/qtdmulheres) + " de um total de " + qtdmulheres+" mulheres";
    }
    public String numeroHomens(){
        int qtdHomens=0;
        for(Pessoa pessoa:vetPessoas){
            if (pessoa.getSexo().equalsIgnoreCase("masculino")){
             qtdHomens++;   
            }
        }
        return "O numero de homens é "+qtdHomens;
    }
    
    public String porcentagemHomensMulheres(){
        double pHomens=0;
        double pMulheres=0;
        int qtdHomens=0;
        int qtdMulheres =0;
        
        for(Pessoa pessoa:vetPessoas){
            if(pessoa.getSexo().equalsIgnoreCase("feminino")){
                qtdMulheres++;
            }
            else{
                qtdHomens++;
            }
        }
        pHomens=(qtdHomens*100)/vetPessoas.size();
        pMulheres=(qtdMulheres*100)/vetPessoas.size();
        
        return "a porcetagem de homens é "+pHomens+"%"+ " e a porcentagem de mulheres é" + pMulheres+"%";
    }
    public String porcentagemFemininoPorIdade(){
        double pMulheres=0;
        int qtdMulheres =0;
        
        for(Pessoa pessoa:vetPessoas){
            if(pessoa.getSexo().equalsIgnoreCase("feminino") && pessoa.getIdade()>=18 && pessoa.getIdade()<=35 && pessoa.getOlhos().equalsIgnoreCase("verdes") && pessoa.getCabelo().equalsIgnoreCase("Louros")){
                qtdMulheres++;
            }
            
        }
        pMulheres=(qtdMulheres*100)/vetPessoas.size();
        
        
        return"A porcentagem de mulheres dentro desta faixa etária é "+pMulheres +"%";
    }
}