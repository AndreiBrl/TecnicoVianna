// See https://aka.ms/new-console-template for more information
int x =Convert.ToInt32(Console.ReadLine());
int cont=2;
string ehprimo="o número é primo";

while(cont<x-1){
    
    if(x%cont==0){
        ehprimo="o número não é primo";
        
        break;
    }
    cont++;
    
    
}
        Console.WriteLine(ehprimo+" "+cont);

