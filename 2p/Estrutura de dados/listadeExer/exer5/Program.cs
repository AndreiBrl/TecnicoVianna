internal class Program
{
    private static void Main(string[] args)
    {
        
        int n =5;

        Console.WriteLine(fatorial(n));
        }

        public static int fatorial(int n){



            
        
            if(n==0){
                return 1;
            }
            
            return n*(fatorial(n-1));
        }
}