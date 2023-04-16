public class Concessionaria{
private String [] vetModelos = new String[]{"cedan","hat","conversivel"};
    
    
 public void atendeCliente( boolean automatico,boolean vidroAutomatico, boolean alarme,boolean tetoSolar,boolean kitMultimidia,double potencia, double custo,String modelo,boolean ehImportado){
    Carro carro =new Carro( automatico, vidroAutomatico,  alarme, tetoSolar, kitMultimidia, potencia,  custo, modelo);
    System.out.println(calculaModelo(carro,modelo));
    System.out.println(carroImportado(carro,ehImportado));
    System.out.println(adicionaAcess(carro,automatico, vidroAutomatico,  alarme, tetoSolar, kitMultimidia));
    System.out.println(taxaIPI(carro));
}
public String calculaModelo(Carro carro, String modelo){
    if(modelo.equalsIgnoreCase("cedan")){
        carro.setCusto(carro.getCusto()+carro.getCusto()*0.15);
        return "Modelo cedan, adionado 15% ao custo base \n Custo Atualizado: " + carro.getCusto();
    }
    if(modelo.equalsIgnoreCase("hat")){
        carro.setCusto(carro.getCusto()+carro.getCusto()*0.35);
        return "Modelo hat, adionado 35% ao custo base \n Custo Atualizado: " + carro.getCusto();
    }
    if(modelo.equalsIgnoreCase("conversivel")){
        carro.setCusto(carro.getCusto()+carro.getCusto()*0.55);
        return "Modelo conversivel, adionado 55% ao custo base \n Custo Atualizado: " + carro.getCusto();
    }
    return "Modelo nao existe ";
    }
public String carroImportado(Carro carro, boolean ehImportado){
    if(ehImportado){
        carro.setCusto(carro.getCusto()+1000*0.30);
        return "O carro é importado, portanto seu custo é acrescido de 30% do custo base,\n Custo atualizado: "+carro.getCusto();
    }
    else{
        return"não é importado";
    }
    
    
}
public String adicionaAcess(Carro carro,boolean automatico,boolean vidroAutomatico, boolean alarme,boolean tetoSolar,boolean kitMultimidia){
    if(automatico){
        carro.setCusto(carro.getCusto()+5000);
    }
    if(vidroAutomatico){
        carro.setCusto(carro.getCusto()+800);
    }
    if(alarme){
        carro.setCusto(carro.getCusto()+800);
    }
    if(tetoSolar){
        carro.setCusto(carro.getCusto()+2500);
    }
    if(tetoSolar){
        carro.setCusto(carro.getCusto()+4000);
    }
    if(kitMultimidia){
        carro.setCusto(carro.getCusto()+1800);
    }
    return "Com os adionais temos Custo atualizado: "+carro.getCusto();
}
public String taxaIPI(Carro carro){
            carro.setCusto(carro.getCusto()+carro.getCusto()*0.20);
            return "O preço final acrescido do IPI é: "+carro.getCusto();
}
    
    
    
    
    
}




