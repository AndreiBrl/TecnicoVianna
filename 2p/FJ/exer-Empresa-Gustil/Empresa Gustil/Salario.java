class Salario{
    
    
    private double salarioLiquido;
    
    private static double total;
    


   
    
    public double calcSalario(double salarioBruto,boolean usaVale,boolean ehNoturno, int qtdFilhos){
        
        this.salarioLiquido= salarioBruto- inss(salarioBruto)- usaVale(usaVale,salarioBruto)+ehNoturno(salarioBruto, ehNoturno)+50*qtdFilhos;
        return this.salarioLiquido;
        
    
    }
    public double inss(double salario){
        return salario*0.13;
    }
    public double usaVale(boolean usaVale, double salario){
        
        double vale;
        return vale = (usaVale)? salario*0.06 :0;
    }
    
    public double ehNoturno(double salario,boolean ehNoturno){
        
        double noturno;
        return noturno = (ehNoturno)? salario*0.05:0;
        
    }
    
    
    public static double totalPago(double salario){
        
        total+=salario;
        return total;

        
    }
    
    public double getSalarioLiquido(){
        return this.salarioLiquido;
    }
}