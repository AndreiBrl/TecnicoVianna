int [] vetor = new int [5];

for(int i =0;i<vetor.Length;i++){
    int num = Convert.ToInt32(Console.ReadLine());
    vetor[i]=num;

}
int menor =vetor[0];
int indiceDoMenor=0;

for(int i =0;i<vetor.Length;i++){
    if(vetor[i]<menor){
        menor=vetor[i];
        indiceDoMenor=i;
    }
}
Console.WriteLine("O menor é "+menor+"O indicie é "+indiceDoMenor);