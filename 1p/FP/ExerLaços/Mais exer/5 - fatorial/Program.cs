double N = Convert.ToInt32(Console.ReadLine());
double contador=0;
double fatorial =1;
double E=1;
while(contador<N){
    contador++;

    fatorial=fatorial*contador;

    E=E+1/fatorial;
    Console.WriteLine(fatorial+" ||||||"+E);
}
