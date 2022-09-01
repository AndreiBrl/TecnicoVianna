// See https://aka.ms/new-console-template for more information
double x = Convert.ToDouble(Console.ReadLine());
double y = Convert.ToDouble(Console.ReadLine());
double z = Convert.ToDouble(Console.ReadLine());
if(x<y+z && y<x+z && z<x+y){
    Console.WriteLine("é um triângulo");
}
else{
    Console.WriteLine("Não  forma um triângulo");
}
