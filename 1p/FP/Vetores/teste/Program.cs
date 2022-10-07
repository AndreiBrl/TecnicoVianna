int [] vetor = new int[]{1,2,3,6,4,8};
Console.WriteLine(verificaVetor(vetor,0));

static int verificaVetor(int [] x, int numero){

    for(int i=0;i<x.Length;i++){
        if(x[i]==numero){
            Console.WriteLine("Você acertou");
            return i;
        }
       
    }
    
    return -1;
    


}