
Pessoas [] vetorPessoas = new Pessoas[3];

int maiorIdade = 0;
int meiaIdade = 0;
int menorIdade = 0;
for(int i=0;i<3;i++){
    Pessoas pessoa = new Pessoas();
    vetorPessoas[i]=pessoa;
    Console.WriteLine("Digite o nome com menos de 100 caractéres");
    vetorPessoas[i].Nome=Console.ReadLine()!;
    Console.WriteLine("Digite a idade: ");
    vetorPessoas[i].Idade=Convert.ToInt32(Console.ReadLine());

    if(vetorPessoas[i].Idade>=maiorIdade){
        menorIdade=meiaIdade;
        meiaIdade=maiorIdade;
        maiorIdade=vetorPessoas[i].Idade;
    }   
    if (vetorPessoas[i].Idade<=meiaIdade ){
        meiaIdade=menorIdade;
        menorIdade=vetorPessoas[i].Idade;
    }
       Console.WriteLine(maiorIdade);

    Console.WriteLine(" em ordem crescente os nomes são \n1: {0}\n2: {1} \n 3: {2}",vetorPessoas[menorIdade].Nome,vetorPessoas[meiaIdade].Nome,vetorPessoas[maiorIdade].Nome);
}
Console.WriteLine(" em ordem crescente os nomes são \n1: {0}\n2: {1} \n 3: {2}",vetorPessoas[menorIdade].Nome,vetorPessoas[meiaIdade].Nome,vetorPessoas[maiorIdade].Nome);