internal class Program
{
    private static void Main(string[] args)
    {
       int num = Convert.ToInt32(Console.ReadLine());

       funtion(num);


    }

    public static void funtion(int num){

        if(num>0){

            funtion(num-1);
            if(num%2==0 && num%3==0){

            Console.WriteLine(num);

            }
        }
    }
}