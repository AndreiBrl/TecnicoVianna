internal class Program
{
    private static void Main(string[] args)
    {
        
        int [] vetor = new int[]{1,2,3} ;
        func(vetor);
        

    }

    public static void func(int []vetor){
        
        
        
            Console.WriteLine("a soma é {0}",func(vetor,0));
            

        

    }

    public static int func(int [] vetor, int i){
        
        
        if(i<vetor.Length){
            return vetor[i]+func(vetor,i+1);
        }
        else
        return 0;



    }
}