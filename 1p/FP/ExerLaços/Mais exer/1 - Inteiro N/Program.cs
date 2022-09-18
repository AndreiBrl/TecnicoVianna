// See https://aka.ms/new-console-template for more information
int N;
double contador=0;
double E =0;
while(true){
N = Convert.ToInt32(Console.ReadLine());
if(N<0)
    Console.Write("O número não é positivo digite outro: ");
else{
    while(contador<N){
        contador++;
        E+=1/contador;
    }
    break;
    }
}
Console.WriteLine("O valor de E é {0:N}",E);


