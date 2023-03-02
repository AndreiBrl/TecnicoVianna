internal class Program
{
    private static void Main(string[] args)
    {
        int indice=0;
        int [] vetor = new int[] {1,2,3};
        func(vetor,indice);

    }

    public static void func(int []vetor,int indice){
        int soma=0;
        if(indice<=vetor.Length){
            Console.WriteLine($"a soma é {somaVetor(vetor,indice,soma)}");
            indice++;
            

        }

    }

    public static int somaVetor(int [] vetor, int indice,int soma){

        soma+=vetor[indice];

        return soma;



    }
}