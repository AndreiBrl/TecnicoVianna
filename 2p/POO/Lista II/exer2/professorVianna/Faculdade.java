import java.util.ArrayList;

class Faculdade{
    private static ArrayList <Professor> listaProfessor = new ArrayList <Professor>();
    private static ArrayList <Disciplina> listaDisciplina = new ArrayList<Disciplina>(); 
    

    
    public void cadastraProfessor(String nome, boolean graduado, boolean especializacao, boolean mestre, boolean doutor){
        Professor professor = new Professor( nome,  graduado,  especializacao,  mestre,  doutor,calcSalario());
        
        listaProfessor.add(professor);
        
    }
    public void cadastraDisciplina(String nome,boolean ead){
        Disciplina disciplina = new Disciplina(nome,ead);
        listaDisciplina.add(disciplina);
        
    }
    public int calcSalario(){
        int valorHora=0;
        for(int i=0;i<listaProfessor.size();i++){
            if(listaProfessor.get(i).getGraduado()==true){
                valorHora=25;
            }
            if(listaProfessor.get(i).getespecializacao()==true){
                valorHora+=valorHora*0.15;
            }
            if(listaProfessor.get(i).getMestre()==true){
                valorHora+=valorHora*0.45;
            }
            if(listaProfessor.get(i).getDoutor()==true){
                valorHora+=valorHora*0.75;
            }
        }
        int salario =4*(16*valorHora);
        
        
        
        
        return salario;
    }
    public ArrayList<Professor> getListaProf(){
        return listaProfessor;
    }
    
}