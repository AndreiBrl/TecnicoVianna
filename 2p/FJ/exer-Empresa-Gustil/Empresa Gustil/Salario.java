class Salario{
    
    
    private double salario;
    private Contabilidade rh;


   
    public Salario(Contabilidade rh){
        
        this.rh=rh;
        
    }
    public void calcSalario(boolean noturno, int qtdFilhos,double salario){
        if(noturno){
            
            salario=salario-(salario*0.13)+(salario*0.06)+(salario*0.05)+(qtdFilhos*50);
        
        }
        

        else{
            salario=salario-(salario*0.13)+(salario*0.06)+(qtdFilhos*50);

        }
        
        this.salario=salario;

        this.rh.totalPago(this.salario);
        System.out.println(this.rh.getTotalPago());
        
    }
         public double getSalario(){
        return this.salario;
    }
    
    public void setSalario(double salario){
        this.salario=salario;
    }
}