internal class Program
{
    private static void Main(string[] args)
    {
        int[] vetNum = new int[] { 2, 5, 6, 4, 1, 3 };


        Console.Write(" Ocorreram " + function(vetNum) + " trocas");

    }
    public static int function(int[] vetNum)
    {
        int aux, troca = 0;

        for (int i = 0; i < vetNum.Length; i++)
        {
            for (int j = 0; j < vetNum.Length - 1; j++)
            {
                if (vetNum[j] > vetNum[j + 1])
                {
                    aux = vetNum[j];
                    vetNum[j] = vetNum[j + 1];
                    vetNum[j + 1] = aux;
                    troca++;
                }

            }

        }

        return troca;
    }

}