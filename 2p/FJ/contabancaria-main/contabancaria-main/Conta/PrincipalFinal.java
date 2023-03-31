import java.util.Scanner;

public class PrincipalFinal
{
    
    public static void main(String args[]){
     
        Scanner le = new Scanner(System.in);
        Banco banco = new Banco();
        System.out.println("# Informe o nome do Banco:");
        banco.setNome( le.nextLine() );
        
        System.out.println("##### SysBank #######");
        System.out.println("####### MENU ########");
        System.out.println("## 1) Cadastrar Cliente");
        System.out.println("## 2) Cadastrar Conta");
        System.out.println("## 3) Realizar Operaçoes");
        System.out.println("## 4) Relatorios");
        System.out.println("## 5) Sair");
        
        
        
        
        
    }
    
}
