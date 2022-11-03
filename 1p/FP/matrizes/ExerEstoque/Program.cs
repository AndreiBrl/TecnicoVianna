internal class Program
{
    private static void Main(string[] args)
    {
        Console.WriteLine("Quantos produtos vc quer colocar?");
        int qtdProdutos = Convert.ToInt32(Console.ReadLine());
        int [] vetorCod = new int [qtdProdutos];
        string [] vetorDescricao = new string [qtdProdutos];
        int [,] matrizEstoque = new int [6,4];
        int i,j;
        for(i=0;i<vetorCod.Length;i++){
             Console.WriteLine("Cadastre o código do produto {0}: ",i+1);
            int codProdutos = Convert.ToInt32(Console.ReadLine());
            vetorCod[i]=codProdutos;
            Console.WriteLine("Cadastre o nome do produto {0}: ",i+1);
            string nomeProdutos = Console.ReadLine()!;
            vetorDescricao[i]=nomeProdutos;
            for(j=0;j<4;j++){
                 Console.WriteLine("Cadastre o estoque na filial {0}: ",j+1);
                 int qtdEstoque = Convert.ToInt32(Console.ReadLine());
                 matrizEstoque[i,j]=qtdEstoque;
            }

        }


            Console.WriteLine("Quer fazer sua pesquisa de estoque pelo código ou pelo nome do produto");
            string resposta = Console.ReadLine()!;
            int pesquisaCod;
            string pesquisaNome;
            if(resposta == "codigo"){
                Console.Write("Digite o código: ");
                pesquisaCod = Convert.ToInt32(Console.ReadLine());
                for(int x =0;x<vetorCod.Length;x++){
                    if(vetorCod[x]==pesquisaCod){
                        Console.WriteLine("O código {0} é do produto {1} Estoque: \n Filial 1: {2} \n Filial 1: {3} \n Filial 1: {4} \n Filial 1: {5}",vetorCod[x],vetorDescricao[x], matrizEstoque[x,0],matrizEstoque[x,1],matrizEstoque[x,2],matrizEstoque[x,3]);
                    }
                }
                

            }
            
            
            if(resposta=="nome"){
                Console.Write("Digite o nome: ");
                pesquisaNome = Console.ReadLine()!;
                for(int x =0;x<vetorCod.Length;x++){
                    if(pesquisaNome==vetorDescricao[x]){
                        Console.WriteLine("O código {0} é do produto {1} Estoque: \n Filial 1: {2} \n Filial 2: {3} \n Filial 3: {4} \n Filial 4: {5}",vetorCod[x],vetorDescricao[x], matrizEstoque[x,0],matrizEstoque[x,1],matrizEstoque[x,2],matrizEstoque[x,3]);
                    }
                }
                

            }
        
        
    }
}