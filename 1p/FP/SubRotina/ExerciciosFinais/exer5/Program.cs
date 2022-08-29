// See https://aka.ms/new-console-template for more information
Console.WriteLine("Vamos calcular a posição e velocidade de uma particula? Para isso, digite alguns valores");
Console.Write("Diga a posição inicial da particula ");
double s0 = Convert.ToDouble(Console.ReadLine());
Console.Write("agora diga a velocidade inicial ");
double v0 = Convert.ToDouble(Console.ReadLine());
Console.Write("Agora a aceleração ");
double a = Convert.ToDouble(Console.ReadLine());
Console.Write("Agora o instante em que ela se encontra ");
double t = Convert.ToDouble(Console.ReadLine());

calcula(s0,v0,a,t);

static void calcula(double s0,double v0, double a, double t){
    double posicao = s0+v0*t+(a*t*t)/2;
    double velocidade = v0+a*t;
    Console.WriteLine("Após o movimento da partícula sua posição é {0} e sua velocidade de movimento de {1}",posicao,velocidade);
}

