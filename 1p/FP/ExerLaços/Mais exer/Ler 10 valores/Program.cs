// See https://aka.ms/new-console-template for more information
Console.Write("digite o primeiro número ");

int x =Convert.ToInt32(Console.ReadLine());
int maior=x;
int menor=x;

for(int i=2;i<=9;i++){
Console.Write("nº {0}: ",i);
x =Convert.ToInt32(Console.ReadLine());
if(x>maior){
    maior=x;
}
if(x<menor){
    menor=x;
}


}
Console.WriteLine("O maior é {0} e o menor é {1}",maior,menor);
