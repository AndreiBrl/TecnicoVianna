internal class Program
{
    private static void Main(string[] args)
    {

      /*  int [] vetor = new int []{2,1,4,3,6,5,9,8,7,100,12,66,23};

        for (int i = 1; i < vetor.Length; i++)
        {
            int chave = vetor[i];
            int j = i-1;
            while(vetor[i]<vetor[j]){

                vetor[i]=vetor[j];
                vetor[j]=chave;


            Console.Write(  "----");
            for (int x = 0; x < vetor.Length; x++)
            {
                
            Console.Write(  "."+vetor[x]);
            }
            }
        }
        
*/


/* menor valor */
  int [] vetor = new int []{2,1,4,3,6,5,9,8,7,100,12,66,23};

  for (int i = 0; i < vetor.Length; i++)
  {

        var menorValor=vetor[i];
    for (int j = 1; j < vetor.Length; j++)
    {
        
        if(menorValor>vetor[j]){

            
            menorValor=vetor[j];
            
            vetor[j]=vetor[i];
            vetor[i]=menorValor;
        }
        
    }

    
    
  }
for (int c = 0; c < vetor.Length; c++)
{
        Console.Write(vetor[c]+".");
}
    }

     
}