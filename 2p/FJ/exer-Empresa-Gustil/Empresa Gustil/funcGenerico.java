class funcGenerico extends Salario{
    
    
    private String nome;
    private boolean noturno;
    private int qtdFilhos;
    private Salario obj;
    private boolean usaVale;
    private double salarioBruto;

    
    
    public funcGenerico(String nome,boolean noturno, int qtdFilhos, double salarioBruto,boolean usaVale){
        this.nome=nome;
        this.noturno=noturno;
        this.qtdFilhos=qtdFilhos;
        this.usaVale=usaVale;
        this.salarioBruto=salarioBruto;
        
        this.obj = new Salario();
        System.out.println("O total é "+ obj.totalPago(obj.calcSalario(salarioBruto,usaVale, noturno, qtdFilhos)));
        
    }
    
    
    
}