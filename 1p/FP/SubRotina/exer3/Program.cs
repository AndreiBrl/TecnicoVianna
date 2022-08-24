// See https://aka.ms/new-console-template for more information
double produto,acrescimo;
Console.Write("Diga o valor do produto ");
produto = Convert.ToDouble(Console.ReadLine());
Console.Write("Diga o valor do acréscimo ");
acrescimo=Convert.ToDouble(Console.ReadLine());

calcula(produto,acrescimo);

static double calcula(double produto,double acrescimo){
double resultado = produto+(produto*(acrescimo/100));
Console.WriteLine("O valor do produto com acréscimo é de {0}",resultado);
    return resultado;
}