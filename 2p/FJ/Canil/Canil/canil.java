import java.util.ArrayList;


class canil{
    
    private static ArrayList <cachorro> cachorrosNoCanil = new ArrayList <cachorro>();
    
    
    
    
    public static  void getCachorrosCanil(){
        
    for (int i=0; i<cachorrosNoCanil.size();i++){
        
        System.out.println(cachorrosNoCanil.get(i).idade);
        
    }
    
    }
    
    public void aceitaCachorro(cachorro Cachorro){
        this.cachorrosNoCanil.add(Cachorro);
    }
}