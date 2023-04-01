class Aluno{
    private String nome;
    private int voto=0;
    
    
    
    public Aluno(String nome){
        this.nome=nome;
    }
    public String getNome(){
        return this.nome;
    }
    public void adicionaVoto(){
        this.voto++;
    }
    public int getVoto(){
        return this.voto;
    }
}