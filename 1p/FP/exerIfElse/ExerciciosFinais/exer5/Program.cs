// See https://aka.ms/new-console-template for more information
Console.WriteLine("Digite um caracter: ");
string caracter=Console.ReadLine()!;
if(caracter=="<")
    Console.WriteLine(" sinal de menor");
else if(caracter==">")
    Console.WriteLine(" sinal de maior");
else if(caracter=="=")
    Console.WriteLine(" sinal de igual");
else
    Console.WriteLine(" outro caracter");
