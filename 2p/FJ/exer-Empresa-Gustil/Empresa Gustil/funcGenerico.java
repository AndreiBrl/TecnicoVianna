class funcGenerico {
    
    
    private String nome;
    private boolean noturno;
    private int qtdfilhos;
    private Salario obj;

    
    
    public funcGenerico(boolean noturno, int qtdFilhos, double salario){
        this.obj = new Salario();
        obj.calcSalario(noturno,qtdFilhos,salario);
    }
    
    
    
}