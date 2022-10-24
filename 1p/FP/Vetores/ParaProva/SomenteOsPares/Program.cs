lePar();
static void lePar(){
    int [] vetor = new int[10];
    for(int i=0;i<vetor.Length;i++){
        int num = Convert.ToInt32(Console.ReadLine());
        vetor[i]=num;
        
    }
    for(int i =0;i<vetor.Length;i++){
        if(vetor[i]%2==0){
            Console.Write(i+" ");
        }
    }
} 