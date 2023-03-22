
internal class Program
{
    private static void Main(string[] args)
    {
        
        int [] vet = new int []{5,2,4,3,6,1};

        int chave,posDeTras;


        for (int i = 1; i < vet.Length; i++)
        {
            chave=vet[i];
            posDeTras=i-1;
            while(posDeTras>=0 && chave<vet[posDeTras]){
                vet[posDeTras+1]=vet[posDeTras];
                posDeTras--;

            }
            vet[posDeTras+1]=chave;

            
        }

            for (int i = 0; i < vet.Length; i++)
            {
                Console.Write(vet[i]+"-");
            }
        }

}
