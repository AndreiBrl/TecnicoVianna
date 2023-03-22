internal class Program
{
    private static void Main(string[] args)
    {

        int [] vet = new int []{2,4,6,1,5,3};

        int aux;
        /*A ideia é estabelecer o  indice 0 como sendo o menor numero então buscamos no vetor algum
        numero que seja menor que o indice 0. Este encontrado (ou não) é alocado no indice 0 e o valor 
        que estava no indice 0 vai para o AUX e então para o indice onde o menorNum estava ( substituição simples).
         Na próxima iteração entendesse que o indice 0 está ordenado e passamos a definir o indice 1 como menor numero desconsiderando o indice 0 a partir da dai. 
        Assim o processo se repete até o fim do vetor.*/

        for (int i = 1; i < vet.Length; i++)
        {
            int menorNum=i-1;
            /* O j deve ser = i-1 porque quando chegar a segunda iteração do i ele voltará a valer 0.
            Quando na verdade o indice 0 deve ser ignorado pois já esta ordenado. Sendo assim o j deve acompanhar o i sendo seu anterior*/
            for (int j = i-1; j < vet.Length; j++)
            {
                
            if(vet[j]<vet[menorNum]){
                aux=vet[menorNum];
                vet[menorNum]=vet[j];
                vet[j]=aux;

            }
            }
        }
        for (int x = 0; x < vet.Length; x++)
        {
            Console.Write(vet[x]+"-");
        }
        
    }
}