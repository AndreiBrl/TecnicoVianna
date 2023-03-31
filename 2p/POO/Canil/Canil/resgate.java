class resgate{


    
    public void resgataCachorro(String nome, int idade, boolean vacinado, String raca,canil Canil ){
        
        cachorro cachorro = new cachorro(nome,idade,vacinado,raca );
        levaProCanil(Canil,cachorro);
        
    }
    
    public void levaProCanil(canil Canil, cachorro Cachorro){
        Canil.aceitaCachorro(Cachorro);
    }

}