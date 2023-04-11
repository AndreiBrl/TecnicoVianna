
/* pontoA = new Ponto();

Ponto pontoB = new Ponto();
pontoA.CoordenadaX=35;
pontoA.CoordenadaY=100;

pontoB.CoordenadaX=10;
pontoB.CoordenadaY=20;

double distancia= Math.Pow( (pontoA.CoordenadaX-pontoB.CoordenadaX)+(pontoA.CoordenadaY-pontoB.CoordenadaY),2);
Console.WriteLine(distancia);*/

double [] vetorDistancias = new double [4]; 
Ponto [] vetorPontos = new Ponto [4];
for(int i=0;i<4;i++){
    vetorPontos[i] = criaPonto(i);
    double distancia= Math.Pow( (vetorPontos[i].CoordenadaX-vetorPontos[0].CoordenadaX)+(vetorPontos[i].CoordenadaY-vetorPontos[0].CoordenadaY),2);
    Console.WriteLine(distancia);
    vetorDistancias[i]=distancia;
}
    Console.WriteLine("O vetor mais próximo do primeiro é o {0}",menorDistancia(vetorDistancias));

static Ponto criaPonto(int i){
    Ponto ponto = new Ponto();
    Console.WriteLine("Digite a coordenada X do ponto {0}:",i+1);
    ponto.CoordenadaX=Convert.ToInt32(Console.ReadLine());
    Console.WriteLine("Digite a coordenada Y do ponto {0}:",i+1);
    ponto.CoordenadaY=Convert.ToInt32(Console.ReadLine());
    return ponto;
    
}
static int menorDistancia(double [] vetorDistancias ){
    double menorDistancia=vetorDistancias[1]-vetorDistancias[0];
    int vetorMaisProximo=1+1;
    for(int i=1;i<4;i++){
        if(vetorDistancias[i]-vetorDistancias[0]<menorDistancia){
            menorDistancia=vetorDistancias[i]-vetorDistancias[0];
            vetorMaisProximo=i+1;
            
        }
            Console.WriteLine(menorDistancia+" "+i+1);
    }
        return vetorMaisProximo;

}