// See https://aka.ms/new-console-template for more information
static void CalculaMedia(int n1,int n2,int n3){
    int resultado=(n1+n2+n3)/2;
    Console.Write("a média é {0}", resultado);
}
static void passaNumeros(){
    Console.WriteLine("Digite 3 numeros:");
    Console.Write("primeiro ");
    int n1=Convert.ToInt32(Console.ReadLine());
    Console.Write("segundo ");
    int n2=Convert.ToInt32(Console.ReadLine());
    Console.Write("terceiro ");
    int n3=Convert.ToInt32(Console.ReadLine());
    CalculaMedia(n1,n2,n3);
}
passaNumeros();
