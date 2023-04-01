import java.util.ArrayList;
class Professor{
    private static ArrayList<Aluno> listaAlunos = new ArrayList<Aluno>();
    
    public void leAluno(String nome){
        Aluno aluno = new Aluno(nome);
        listaAlunos.add(aluno);
        
    }
    
    public ArrayList<Aluno> getListaAlunos(){
        
        
        return listaAlunos;
    }
    public void computaVoto(int voto){
    if(voto==0){
            listaAlunos.get(voto).adicionaVoto();
    }
    if(voto==1){
        listaAlunos.get(voto).adicionaVoto();
    }
    if(voto==2){
        listaAlunos.get(voto).adicionaVoto();
    }
    if(voto==3){
        listaAlunos.get(voto).adicionaVoto();
        
    }
    if(voto==4){
        listaAlunos.get(voto).adicionaVoto();
    }
    
    
}
public Aluno vencedor(){
    
    Aluno alunoVencedor=listaAlunos.get(0);
    for(int i=1;i<listaAlunos.size();i++){
        if(alunoVencedor.getVoto()<listaAlunos.get(i).getVoto()){
            alunoVencedor=listaAlunos.get(i);
        }
    }
    
    return alunoVencedor;
}
}