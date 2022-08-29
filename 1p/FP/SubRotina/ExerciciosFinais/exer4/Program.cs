// See https://aka.ms/new-console-template for more information
Console.WriteLine("Digite dois numeros a e b");
Console.Write("a: ");
double a =Convert.ToDouble(Console.ReadLine());
Console.Write("b: ");
double b = Convert.ToDouble(Console.ReadLine());

Console.WriteLine( "o resultado é {0:N}",calcula(a,b));

static double calcula(double a, double b){
    double conta = Math.Pow(Math.Pow(a,2)+ Math.Pow(b,2),0.5);
    return conta;

     /*segunda solução
    double conta = Math.Sqrt(Math.Pow(a,2)+ Math.Pow(b,2));*/
}