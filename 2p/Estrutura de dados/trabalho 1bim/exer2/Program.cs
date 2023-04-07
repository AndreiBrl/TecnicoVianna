internal class Program
{
    private static void Main(string[] args)
    {
        int[] vetNum = new int[] { 2, 3, 6, 9, -8 };
        int cont = 0;
        Console.WriteLine(function(vetNum, cont));
    }

    public static int function(int[] vetNum, int cont)
    {


        if (cont < vetNum.Length - 1)
        {
            vetNum[cont] *= -1;
            if (vetNum[cont] < 0)
            {
                return 1 + function(vetNum, cont + 1);

            }
            else
            {
                return function(vetNum, cont + 1);
            }

        }

        return 0;
    }

}