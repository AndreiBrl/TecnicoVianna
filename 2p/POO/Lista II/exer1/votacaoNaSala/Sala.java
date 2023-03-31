import java.util.Scanner;
class Sala{
    
    private int numAlunosSala;

    
    
    public Sala(){
        
    }
    
    public String [] pegaCandidados(){
        Scanner scanner = new Scanner(System.in);
        System.out.println("Digite quantos alunos vão participar");
        int qtdCandidatos = scanner.nextInt();
       String [] listaCandidatos= new String [qtdCandidatos];
        System.out.println("Digite o nome dos candidatos");
       
        for(int i=0;i<listaCandidatos.length;i++){
            
            System.out.println("Candidato " +i +":");
            String nomeCandidato = scanner.nextLine();
            listaCandidatos[i]=nomeCandidato;
            
        }
        
        return listaCandidatos;
    }
    
    
    
 }
 
 