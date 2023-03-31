class main{
    public static void main(String [] args){
        empresa empresa = new empresa();
        


        funcGenerico obj1 = new funcGenerico("Andrei",true,5,1000,false);
        
        funcGenerico obj2 = new funcGenerico("Paulo",false,2,2000,true);
        
        funcGenerico obj3 = new funcGenerico("Matheus",true,3,1500,true);
        
        funcGenerico obj4= new funcGenerico("Joao",false,1,3000,true);
        
        empresa.adicionaFunc(obj1);
        empresa.adicionaFunc(obj2);
        empresa.adicionaFunc(obj3);
        empresa.adicionaFunc(obj4);
        
        
        empresa.mostraSalario();
        
        
        
    }
}