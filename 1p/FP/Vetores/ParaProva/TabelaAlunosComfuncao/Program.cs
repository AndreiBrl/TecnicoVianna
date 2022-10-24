int [] idadeAlunos= new int[10];
Console.Write("A quantidade de alunos acima da média é: {0} ",AlunosAcimaMedia(idadeAlunos));


static double AlunosAcimaMedia(int [] idadeAlunos){
double soma=0;
double qtdAcimaMedia=0;
for(int i =0;i<idadeAlunos.Length;i++){
    Console.Write("{0}º aluno idade: ",i+1);
    int idade = Convert.ToInt32(Console.ReadLine());
    idadeAlunos[i]=idade;
    soma+=idadeAlunos[i];

}

double media=soma/idadeAlunos.Length;
    Console.WriteLine("A média é {0}",media);


for(int i = 0; i<idadeAlunos.Length;i++){
    if(idadeAlunos[i]>media){
        qtdAcimaMedia++;
    }
}
return qtdAcimaMedia;
}