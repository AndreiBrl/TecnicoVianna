// See https://aka.ms/new-console-template for more information
Console.WriteLine("Vamos Calcular a distância entre dois pontos?");
Console.Write("Primeiro digite o eixo X do primeiro ponto ");
double ponto1X = Convert.ToDouble(Console.ReadLine());
Console.Write("Agora o eixo Y do primeiro ponto ");
double ponto1Y = Convert.ToDouble(Console.ReadLine());
Console.Write("Agora digite o eixo X do segundo ponto ");
double ponto2X = Convert.ToDouble(Console.ReadLine());
Console.Write("Agora o eixo Y do segundo ponto ");
double ponto2Y=Convert.ToDouble(Console.ReadLine());
Console.WriteLine("Agora vamos calculor o valor do erímetro de um triângilo no plano cartesiano, passe mais 1 ponto");
Console.Write("digite a coordenada do eixo X do terceiro ponto ");
double ponto3X = Convert.ToDouble(Console.ReadLine());
Console.Write("Coordenada do eixo Y do terceiro ponto ");
double ponto3Y = Convert.ToDouble(Console.ReadLine());
calculaDistancia(ponto1X,ponto1Y,ponto2X,ponto2Y,ponto3X,ponto3Y);

static double calculaDistancia(double ponto1X,double ponto1Y,double ponto2X,double ponto2Y,double ponto3X,double ponto3Y){
    double X1paraX2 = Math.Sqrt(Math.Pow(ponto2X-ponto1X,2)+Math.Pow(ponto2Y-ponto1Y,2));
    double X2paraX3 = Math.Sqrt(Math.Pow(ponto3X-ponto2X,2)+Math.Pow(ponto3Y-ponto2Y,2));
    double X3paraX1 = Math.Sqrt(Math.Pow(ponto1X-ponto3X,2)+Math.Pow(ponto1Y-ponto3Y,2));
    double perimetro = X1paraX2+X2paraX3+X3paraX1;
    Console.WriteLine("a distância entre os dois primeiros pontos é de {0:N} e o perímetro do triângulo é de {1:N}",X1paraX2,perimetro);
    Console.WriteLine(X1paraX2+" "+X2paraX3+" "+X3paraX1);
    return perimetro;
}