//doSee https://aka.ms/new-console-template for more information

Console.Write("Digite um número ");
int fatorial= Convert.ToInt32(Console.ReadLine());
int contador=fatorial;

while(contador>1){
    contador-=1;
    fatorial *=contador;
    Console.WriteLine(fatorial);
}
