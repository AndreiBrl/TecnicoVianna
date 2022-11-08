
using System.Text;



    Console.Write("Digite de uma frase: ");
    string frase=Console.ReadLine()!;
    int k = 3;
    for(int i =0 ; i<frase.Length;i++){
        Console.Write(Convert.ToChar(frase[i]-k));
    }
    



