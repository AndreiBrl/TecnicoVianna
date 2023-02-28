class Contabilidade{
    


private double total;
    
    
    
    public void totalPago(double salario){
        
        this.total+=salario;

        
    }
    
    public double getTotalPago(){
        return this.total;
    }
}