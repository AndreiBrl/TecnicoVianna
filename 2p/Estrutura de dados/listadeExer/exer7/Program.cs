internal class Program
{
    private static void Main(string[] args)
    {

        int n =10;
        Console.WriteLine(fibo(n));

}

public static int fibo(int n){

if(n==0){
    return 0;
}
if(n==1){
    return 1;
}

return fibo(n-1)+fibo(n-2);




}}