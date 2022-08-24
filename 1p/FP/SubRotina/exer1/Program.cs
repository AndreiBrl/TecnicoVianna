// See https://aka.ms/new-console-template for more information
double n1,n2,n3;
Console.Write("Digite o primeiro número ");
n1=Convert.ToDouble(Console.ReadLine());
Console.Write("Digite o segundo número ");
n2=Convert.ToDouble(Console.ReadLine());
Console.Write("Digite o terceiro número ");
n3=Convert.ToDouble(Console.ReadLine());
calcula(n1,n2,n3);

static void calcula (double n1,double n2,double n3){
    Console.WriteLine("A media é {0}",(n1+n2+n3)/3);
}


