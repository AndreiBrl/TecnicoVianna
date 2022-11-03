internal class Program
{
    private static void Main(string[] args)
    {
        
int [] vetor = new int [] {2,15,22,40};
utlimaparada(2,8,vetor);
    }
static int utlimaparada(int combustivel, int consumo, int [] vetor){
    for( int i = 0; i<vetor.Length;i++){
        if(vetor[i]>combustivel*consumo){
            return vetor[i-1];
        }
        if(vetor[i]==combustivel*consumo){
            return vetor[i];
        }
    }


    return -1;
}
}