
internal class Program
{
    private static void Main(string[] args)
    {
        int num =10;
        Console.WriteLine(fibo(num));
    }
    public static int fibo(int num){

        if(num>0){

        return fibo(num-1)+fibo(num-2);
        }
        return 1;
    }
}