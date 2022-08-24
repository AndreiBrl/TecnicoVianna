// See https://aka.ms/new-console-template for more information
Console.WriteLine("Digite dois números");
int n1,n2;
n1=Convert.ToInt32(Console.ReadLine());
n2=Convert.ToInt32(Console.ReadLine());
calcula(n1,n2);

static int calcula(int n1,int n2){
    Console.WriteLine("O valor da soma é {0}, o valor do produto é {1}, o valor da diferença é {2}, o quoeficiente é {3} e o resto é {4} ",n1+n2,n1*n2,n1-n2,n1/n2,n1%n2);
    return n1;
}
