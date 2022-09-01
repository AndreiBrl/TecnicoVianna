// See https://aka.ms/new-console-template for more information
Console.Write("Digite dois numeros ");

double num1 =Convert.ToDouble(Console.ReadLine());
double num2 =Convert.ToDouble(Console.ReadLine());
Console.Write("Escolha uma operação \n + = soma \n - = subtração \n / = divisão \n * = multiplicação: ");
string simbolo=Console.ReadLine();

if(simbolo=="+")
    Console.WriteLine("Vc escolheu soma. {0} + {1} = {2}",num1,num2,num1+num2);
else if(simbolo=="-")
    Console.WriteLine("Vc escolheu substração. {0} - {1} = {2}",num1,num2,num1-num2);
else if(simbolo=="/")
    Console.WriteLine("Vc escolheu divisão. {0} / {1} = {2:N}",num1,num2,num1/num2);
else if(simbolo=="*")
    Console.WriteLine("Vc escolheu multiplicação. {0} * {1} = {2}",num1,num2,num1*num2);
else
    Console.WriteLine("Operador inválido");
