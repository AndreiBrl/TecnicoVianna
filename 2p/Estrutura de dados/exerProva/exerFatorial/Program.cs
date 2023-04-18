


internal class Program
{
    private static void Main(string[] args)
    {
        int num = 5;
        Console.WriteLine(fatorial(num));

    }
    public static int fatorial(int num)
    {
        if(num>0){
            return num*fatorial(num-1);


        
        }
        return 1;
        

        
    }
}