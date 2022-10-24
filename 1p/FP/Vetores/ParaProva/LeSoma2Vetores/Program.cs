int [] vetor1 = new int [2];
int [] vetor2 = new int [2];
int soma=0;
for(int i = 0; i<vetor1.Length;i++){
Console.Write("Digite o {0}º numero do primeiro vetor: ",i+1);
int numVetor1 = Convert.ToInt32(Console.ReadLine());
Console.Write("Digite o {0}º numero do segundo vetor: ",i+1);
int numVetor2 = Convert.ToInt32(Console.ReadLine());
vetor1[i]=numVetor1;
vetor2[i]=numVetor2;
soma=vetor1[i]+vetor2[i];
vetor1[i]=soma;
}
for(int i =0;i<vetor1.Length;i++){
    Console.Write(vetor1[i]+" ");
}
