import java.util.ArrayList;


class canil{
    
    private ArrayList <cachorro> cachorrosNoCanil = new ArrayList <cachorro>();
    
    
    
    
    public   void getCachorrosCanil(){
        
    for (int i=0; i<cachorrosNoCanil.size();i++){
        
        System.out.println(cachorrosNoCanil.get(i).nome);
        
    }
    
    }
    
    public void aceitaCachorro(cachorro Cachorro){
        this.cachorrosNoCanil.add(Cachorro);
    }
    public void retiraCachorro(int j){
    
    this.cachorrosNoCanil.remove(j);
for (int i=0; i<cachorrosNoCanil.size();i++){
        
        System.out.println(cachorrosNoCanil.get(i).nome);
        
    }    
    }
    public cachorro retornaCachorro(int i){
        return cachorrosNoCanil.get(i);
    }
}