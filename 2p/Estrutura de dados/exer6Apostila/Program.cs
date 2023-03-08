internal class Program
{
    private static void Main(string[] args)
    {
        double [] vet = new double [] {-2,-4,-6,1,7,10};
        func(vet);

        }

        public static void func(double [] vet){
            int i =0;
            multiplica(vet,i);


        }
        public static void multiplica(double [] vet, int i){

            if(i<vet.Length){
                if(vet[i]<0){
                    vet[i]*=-1;
                }

                Console.Write(vet[i]);
                
            
            
                i++;
                multiplica(vet,i);
            }

        }
}