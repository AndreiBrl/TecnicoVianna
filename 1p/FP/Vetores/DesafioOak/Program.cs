internal class Program
{
    private static void Main(string[] args)
    {
        Console.WriteLine("Cadastro de produtos");
        int contador = 0;
        string[] nomesTotal = new string[1000] ;
        double[] valoresTotal = new double[1000];
        while (true)
        {
            Console.Write("Deseja adicionar um produto? (S/N)");
            string verifica = Console.ReadLine()!;
            if (verifica.ToUpper() == "S" || verifica.ToUpper()=="SIM")
            {
                Console.Write("Digite o nome do produto: ");
                string nome = Console.ReadLine()!;
                nomesTotal[contador] = nome;
                Console.Write("Digite o valor do produto: ");
                double valor = Convert.ToDouble(Console.ReadLine());
                valoresTotal[contador] = valor;
                Console.Write("Digite a descrição do produto: ");
                string descricao = Console.ReadLine()!;
                Console.Write("Está disponível para venda? (sim/não):");
                string disponibilidade = Console.ReadLine()!;
                contador++;
                Console.WriteLine("Listagem de produtos:");
                for(int i =0;i<contador;i++){
                    Console.WriteLine("{0}) {1}............R${2}",i+1,nomesTotal[i],valoresTotal[i]);
                }
            }
            else
                Console.WriteLine("Termino do cadastro. ");
                break;
        }
    }
}