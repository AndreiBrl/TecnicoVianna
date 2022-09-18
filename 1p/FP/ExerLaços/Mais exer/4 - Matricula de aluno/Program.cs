// See https://aka.ms/new-console-template for more information
while(true){
    Console.Write("Digite sua matricula para acessar o sistema: ");
    int matricula = Convert.ToInt32(Console.ReadLine());
    if(matricula==2244){
        Console.WriteLine("Você acessou o sistema, agora digite as notas das suas provas");
        Console.Write("Prova 1 = ");
        double nota1 = Convert.ToDouble(Console.ReadLine());
                Console.Write("Prova 2 = ");
        double nota2 = Convert.ToDouble(Console.ReadLine());
                Console.Write("Prova 3 = ");
        double nota3 = Convert.ToDouble(Console.ReadLine());

        double media = (nota1*4+nota2*3+nota3*3)/10;

        if (media>=5){
            Console.WriteLine("sua média foi {0:N} você esta Aprovado",media);
        }
        else{
            Console.WriteLine("sua média foi {0:N} você está reprovado",media);
        }

        break;

    }
    Console.WriteLine("Matricula errada. Tente novamente");
}