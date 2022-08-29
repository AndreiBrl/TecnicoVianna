// See https://aka.ms/new-console-template for more information
Console.Write("Diga o valor do raio da esfera ");
double raio =Convert.ToDouble(Console.ReadLine());
Console.WriteLine("O volume da esfera é {0:N}",calculaVolume (raio));

static double calculaVolume(double raio){
    double volume = (4*Math.PI*Math.Pow(raio,3))/3;
    return volume;
}