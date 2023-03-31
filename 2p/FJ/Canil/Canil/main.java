class main{
    
    public static void main( String [] args){
        
        canil canil1 = new canil();
        resgate resgate1 = new resgate();
        resgate1.resgataCachorro("Alfa",2,true,"Pastor",canil1);
        resgate1.resgataCachorro("Beta",2,true,"Pastor",canil1);
        resgate1.resgataCachorro("treta",2,true,"Pastor",canil1);
        canil1.getCachorrosCanil();
        Adocao adocao1 = new Adocao();
        adocao1.adotaCachorro(canil1,2);
    }
}