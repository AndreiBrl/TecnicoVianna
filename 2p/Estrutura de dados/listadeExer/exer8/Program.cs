

internal class Program
{
    private static void Main(string[] args)
    {
        int [] vet = new int [] {3,6,2,4,9,1};
        Console.WriteLine(encontraValor(vet));
}

public static int encontraValor(int []vet){

int contador=1;
int menorNum=vet[0];


return fazConta(contador,vet,menorNum);
    
}

public static int fazConta(int contador,int[]vet,int menorNum){

    if(menorNum>vet[contador]){
        menorNum=vet[contador];

    }
    if(contador<vet.Length-1){
        
    fazConta(contador+1,vet,menorNum);
    
    }
    
    return menorNum;
}
}