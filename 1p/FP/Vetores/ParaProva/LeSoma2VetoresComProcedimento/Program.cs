leVetor();


static void leVetor(){
int [] vetor1= new int [2];
int [] vetor2= new int [2];
int soma= 0;
for(int i = 0; i<vetor1.Length;i++){
    Console.WriteLine("Digite o {0}º número do primeiro vetor",i+1);
    int numVetor1=Convert.ToInt32(Console.ReadLine());
    Console.WriteLine("Digite o {0}º número do segundo vetor",i+1);
    int numVetor2=Convert.ToInt32(Console.ReadLine());
    vetor1[i]=numVetor1;
    vetor2[i]= numVetor2;
    soma=vetor1[i]+vetor2[i];
    vetor1[i]=soma;
}
lesoma(vetor1);
}
static void lesoma(int []vetor1){
    for(int i = 0; i<vetor1.Length;i++){
        Console.Write(vetor1[i]+" ");
    }

}