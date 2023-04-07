

internal class Program
{
    private static void Main(string[] args)
    {
        int meses = 1;
        aposentadoria(30000, 1500, meses);
    }
    public static void aposentadoria(double montanteMensal, double retirada, int meses)
    {
        if (montanteMensal > retirada)
        {


            montanteMensal -= retirada;
            montanteMensal += (montanteMensal * 0.0055);
            Console.WriteLine("Montante mês {0}: {1:N2}",meses,montanteMensal);
            aposentadoria(montanteMensal, retirada, meses + 1);

        }
        else
            {

                Console.WriteLine("A quantidade de meses de retirada é " + (meses-2));
            }


    }
}