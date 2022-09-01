// See https://aka.ms/new-console-template for more information
Console.WriteLine("Qual a sua idade?");
int idade =Convert.ToInt32(Console.ReadLine());
if (idade<13)
    Console.WriteLine("É criança");
else if (idade>=13 && idade<20)
    Console.WriteLine("É adolescente");
else if (idade>=20 && idade<60)
    Console.WriteLine("É adulto");
else
    Console.WriteLine("É idoso");
