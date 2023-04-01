import java.util.Scanner;
class main{
    
    public static void main(String [] args){
        Professor professor = new Professor();
        professor.leAluno("Andrei");
        professor.leAluno("Marcos");
        professor.leAluno("PatoDonald");
        professor.leAluno("Pluto");
        professor.leAluno("Mickey");
        candidatosVotacao(professor);
        System.out.println("Escolha seu candidato e digite seu numero");
        votacao(professor);
        
        System.out.println("fim da votação");
        resultado(professor);
        
    }
    
    public static void candidatosVotacao(Professor professor){
        
        System.out.println("Os candidatos são:");
        for(int i=0;i<professor.getListaAlunos().size();i++){
            System.out.println("Candidato "+(i+1)+": "+ professor.getListaAlunos().get(i).getNome());
        }
    }
    public static void votacao(Professor professor){
        Scanner le = new Scanner(System.in);
        
        for(int i=0;i<professor.getListaAlunos().size();i++){
            System.out.println("Aluno "+professor.getListaAlunos().get(i).getNome()+" em quem você vota?");
            while(true){
                
            
            int voto = le.nextInt();
            if(voto>5 || voto<=0){
                System.out.println("Voto inválido");
            }
            else{
                professor.computaVoto(voto-1);
                break;
            }
        }
            
        }
    }
    public static void resultado(Professor professor){
        for(int i =0;i<professor.getListaAlunos().size();i++){
            System.out.println("Aluno "+professor.getListaAlunos().get(i).getNome()+": "+professor.getListaAlunos().get(i).getVoto() +" votos");
            
        }
        System.out.println("O aluno vencedor é: "+professor.vencedor().getNome());
    }
}