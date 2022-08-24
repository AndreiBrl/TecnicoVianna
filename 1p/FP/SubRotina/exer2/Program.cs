// See https://aka.ms/new-console-template for more information
double produto,desconto;
Console.Write("Diga o valor do produto adquirido ");
produto=Convert.ToDouble(Console.ReadLine());
Console.Write("Diga agora o valor do desconto ");
desconto = Convert.ToDouble(Console.ReadLine());

calcula(produto,desconto);

static double calcula(double produto,double desconto){
    double produtoComDesconto = produto-(produto*(desconto/100));
    Console.WriteLine("O valor do produto é {0}",produtoComDesconto);

    return produtoComDesconto;
}


