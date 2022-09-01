// See https://aka.ms/new-console-template for more information
Console.Write("Digite o código do seu produto: ");
int codigo = Convert.ToInt32(Console.ReadLine());
if(codigo>=1 && codigo<=20)
    Console.WriteLine("Pertence à Europa");
else if(codigo>=21 && codigo<=40)
    Console.WriteLine("Pertence à Ásia");
else if(codigo>=41 && codigo<=60)
    Console.WriteLine("Pertence à América");
else if(codigo>=61 && codigo<=80 )
    Console.WriteLine("Pertence à África");
else if(codigo>=80)
    Console.WriteLine("Pertence à Paraguai");
else
    Console.WriteLine("Código inválido");
