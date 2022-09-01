// See https://aka.ms/new-console-template for more information
Console.Write("Digite suas idade: ");
int idade = Convert.ToInt32(Console.ReadLine());
if(idade>=5 && idade<=7)
    Console.WriteLine("É Infantil A");
else if(idade>=8 && idade<=10)
    Console.WriteLine("É Infantil B");
else if(idade>=11 && idade<=13)
    Console.WriteLine("É juvenil A");
else if(idade>=14 && idade<=17)
    Console.WriteLine("É Juvenil B");
else if(idade>=18 && idade<=30)
    Console.WriteLine("É Adulto");
else if(idade>30)
    Console.WriteLine("É sênior");
else
    Console.WriteLine("É muito pequeno para nada");