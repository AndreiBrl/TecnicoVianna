import java.util.Scanner;

class main{
    
    public static void main ( String [] args){
        Scanner scanner = new Scanner(System.in);
        System.out.println("Digite o X do primeiro ponto");
        int x1 = scanner.nextInt();
        System.out.println("Digite y do primeiro ponto");
        int y1 = scanner.nextInt();
        System.out.println("Digite x  do segundo");
        int x2 = scanner.nextInt();
        System.out.println("Digite y do segundo");
        int y2 = scanner.nextInt();
        
        calcula calcula = new calcula();
        System.out.println(calcula.calculaDistancia(x1, y1,x2,y2));
    }
}