// See https://aka.ms/new-console-template for more information
Console.WriteLine("Vamos calcular sua média, digite a nota das duas primeiras provas");
Console.Write("Prova 1: ");
double prova1 = Convert.ToDouble(Console.ReadLine());
Console.Write("Prova 2: ");
double prova2 = Convert.ToDouble(Console.ReadLine());
Console.WriteLine("O valor minimo que voce deve tirar na prova 3 é de {0}",calculaNota(prova1,prova2));
static double calculaNota(double prova1, double prova2){
    double prova3= (4*5-prova1-prova2)/2;
    return prova3;
}