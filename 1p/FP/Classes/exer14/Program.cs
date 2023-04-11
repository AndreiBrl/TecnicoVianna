
internal class Program
{
    private static void Main(string[] args)
    {
        Console.WriteLine("Digite o nome da sua fazenda: ");
        string nomeF = Console.ReadLine()!;
        Console.WriteLine("Quantas cabeças de gado você possui: ");
        int numCabeçaGado = Convert.ToInt32(Console.ReadLine());
        Gado[] vetorGado = new Gado[numCabeçaGado];
        for (int i = 0; i < vetorGado.Length; i++)
        {
            vetorGado[i] = leGado(i);

        }
        imprimeTudo(vetorGado);
    }
        static Gado leGado(int i)
        {
            
            Random numAleatorio = new Random();
            Gado  = new Gado();
            Console.WriteLine("Digite Nome do {0} Gado: ",i+1);
            gado.Nome = Console.ReadLine()!;
            gado.CodigoBoi = numAleatorio.Next(1111, 2222);
            gado.QtdAlimentoSemana= numAleatorio.Next(50,100);
            gado.QtdLeiteSemana=numAleatorio.Next(1,100);
            gado.AnoNasc=numAleatorio.Next(1990,2022);
            gado.MesNasc=numAleatorio.Next(1,13);
            if(2022-gado.AnoNasc>5||gado.QtdLeiteSemana<40||gado.QtdAlimentoSemana>=50){
                gado.Abate=true;
            }
            else{
                gado.Abate=false;
            }

            return gado;

        }
        static void imprimeTudo(Gado [] vetorGado){
                Console.WriteLine("Fazenda ** Zebra Manca **\n Total de Gados: 4");
            for(int i = 0; i<vetorGado.Length;i++){
                Console.WriteLine("------------------");
                Console.WriteLine("Gado {0}\n Come {1}Kg por semana\n Produz {2}L de Letche\n Nasceu em {3}\n Abate: {4}",vetorGado[i].Nome,vetorGado[i].QtdAlimentoSemana,vetorGado[i].QtdLeiteSemana,vetorGado[i].AnoNasc, vetorGado[i].Abate);
            }
        }
    
}