import java.util.Scanner;

class main{
    
    public static void main(String [] args){
        Scanner le = new Scanner(System.in);
        System.out.println("Digite o primeiro valor: ");     
        int num1 = le.nextInt();
        System.out.println("Digite o segundo valor ");
        int num2 = le.nextInt();
        retornaImpar(num1,num2);
        
        
    }
    public static void retornaImpar(int num1,int num2){
        Calcula calc = new Calcula();
        calc.pegaImpar(num1,num2);
        
        for(int i=0;i<calc.getLista().size();i++){
            System.out.println(calc.getLista().get(i));
        }
    }
}