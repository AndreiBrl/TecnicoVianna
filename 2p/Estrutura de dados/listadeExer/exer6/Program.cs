internal class Program
{
    private static void Main(string[] args)
    {
        

int n = 5;
        Console.WriteLine(retornaN(n));


    }

        public static int retornaN(int n)
        {

            if(n==0){
                return 0;
            }
            return n + retornaN(n - 1);
        }
}