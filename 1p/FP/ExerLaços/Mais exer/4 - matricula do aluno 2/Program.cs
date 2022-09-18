
testaMatricula();

static void testaMatricula(){

Console.Write("Digite sua matricula: ");
int matricula = Convert.ToInt32(Console.ReadLine());
    if (matricula==2244){
        Console.WriteLine("Você entrou no sistema");
        calculaMedia();

    }
    else{
        Console.WriteLine("Digitou errado, tente novamente");
         testaMatricula();
    }


}
static void calculaMedia(){
    Console.WriteLine("Digite as notas: ");
    Console.Write("Prova 1 = ");
    double prova1 = Convert.ToInt32(Console.ReadLine());
        Console.Write("Prova 2 = ");

    double prova2 = Convert.ToInt32(Console.ReadLine());
        Console.Write("Prova 3 = ");

    double prova3 = Convert.ToInt32(Console.ReadLine());

    double media = prova1*4+prova2*3+prova3*3/10;
    if (media >=5){
        Console.WriteLine("Você está aprovado");
        querContinuar();

    }
    else{
        Console.WriteLine("Reprovado");
        querContinuar();
    }
    static void querContinuar(){
        Console.WriteLine("Digite 0 para continuar ou 1 para sair");
        int resposta = Convert.ToInt32(Console.ReadLine());
        if (resposta==0){
            testaMatricula();
        }
        else{
            Console.Write("Fim");
        }
    }
}