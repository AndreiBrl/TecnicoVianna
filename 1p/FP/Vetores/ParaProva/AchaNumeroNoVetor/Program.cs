int [] vetor = new int[] {1,2,3,4,5,6,7,7,8};
int qtdVezes = 0;
int num = Convert.ToInt32(Console.ReadLine());
for(int i=0;i<vetor.Length;i++){
    if(vetor[i]==num){
        qtdVezes++;
    }
}
if(qtdVezes>0){
    Console.WriteLine("O numero aparece {0} vezes",qtdVezes);
}
else{
    Console.WriteLine("Não aparece");
}