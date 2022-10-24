 int [] idadesTotal=new int [10];
 int soma=0;
 int alunosAcimaMédia=0;
for(int i =0;i<idadesTotal.Length;i++){
 Console.Write("Digite o {0} numero: ",i+1);
 int idadeAlunos=Convert.ToInt32(Console.ReadLine());
 idadesTotal[i]=idadeAlunos;
 soma+=idadesTotal[i];

}
double media = soma/idadesTotal.Length;
 Console.WriteLine("A média é {0}",media);

for(int i = 0; i<idadesTotal.Length;i++){
    if(idadesTotal[i]>media){
        alunosAcimaMédia++;

        
    }
}
         Console.Write("A quantidade de alunos acima da média é {0} ",alunosAcimaMédia);