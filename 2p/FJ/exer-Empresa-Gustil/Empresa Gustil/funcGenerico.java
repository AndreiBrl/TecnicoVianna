class funcGenerico {
    
    
    private String nome;
    private boolean noturno;
    private int qtdfilhos;
    private Salario obj;

    
    
    public funcGenerico(boolean noturno, int qtdFilhos, double salario,Contabilidade rh){
        this.obj = new Salario(rh);
        obj.calcSalario(noturno,qtdFilhos,salario);
    }
    
    
    
}