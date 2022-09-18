// See https://aka.ms/new-console-template for more information
double potencia=1;
double divisor=50;
double S=0;
while(potencia<=25){
 S += Math.Pow(2,potencia)/divisor;
Console.WriteLine("o valor de S é {0:N} || {1} || {2}",S,potencia,divisor);

potencia++;
divisor-=2;

}   