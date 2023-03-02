class Salario{
    
    
    private double salario;
    
    private static double total;
    


   
    
    public void calcSalario(boolean noturno, int qtdFilhos,double salario){
        if(noturno){
            
            salario=salario-(salario*0.13)+(salario*0.06)+(salario*0.05)+(qtdFilhos*50);
        
        }
        

        else{
            salario=salario-(salario*0.13)+(salario*0.06)+(qtdFilhos*50);

        }
        
        this.salario=salario;
        System.out.println("O Salario dele é "+ this.salario);
        System.out.println(totalPago(this.salario));

        
    }
         public double getSalario(){
        return this.salario;
    }
    
    public void setSalario(double salario){
        this.salario=salario;
    }
    
    
    

    
    
    
    public static double totalPago(double salario){
        
        total+=salario;
        return total;

        
    }
}