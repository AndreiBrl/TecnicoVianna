import java.util.ArrayList;

class Professor{
    private String nome;
    private boolean graduado;
    private boolean especializacao;
    private boolean mestre;
    private boolean doutor;
    private int salario;
    private ArrayList <Disciplina> listaDisciplinaProfessor = new ArrayList <Disciplina>();
    
    public Professor(String nome, boolean graduado, boolean especializacao, boolean mestre, boolean doutor,int salario){
        this.nome=nome;
        this.graduado=graduado;
        this.especializacao = especializacao;
        this.mestre = mestre; 
        this.doutor=doutor;
        this.salario=salario;
        
        
    }
    public String getNome(){
        return this.nome;
    }
    public boolean getGraduado(){
        return this.graduado;
    }
        public boolean getespecializacao(){
        return this.especializacao;
    }
        public boolean getMestre(){
        return this.mestre;
    }
        public boolean getDoutor(){
        return this.doutor;
    }
    public int getSalario(){
        return this.salario;
    }
}