int [] vetor = new int [] {1,2,3,4,5,6};
int num = 4;
Console.WriteLine(procuraVetor(vetor,num));

static int procuraVetor(int []vetor,int num){
    for(int i = 0; i<vetor.Length;i++){
        if(vetor[i]==num){
            return i;
        }
    }
    return-1;
}