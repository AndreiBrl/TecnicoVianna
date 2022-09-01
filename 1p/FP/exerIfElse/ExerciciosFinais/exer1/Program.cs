// See https://aka.ms/new-console-template for more information
double num1 = Convert.ToDouble(Console.ReadLine());
double num2 = Convert.ToDouble(Console.ReadLine());
if (num2!=0)
    Console.WriteLine("{0} / {1} = {2}", num1,num2,num1/num2);
else
    Console.WriteLine("Impossível realizar a divisão com valor {0}",num2);
