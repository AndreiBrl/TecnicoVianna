// See https://aka.ms/new-console-template for more information
int x =Convert.ToInt32(Console.ReadLine());
int cont=1;
while(cont<x){
    cont++;
    if(x/cont==1 ){
        Console.WriteLine("testando {0}...   é primo",cont);
        break;
    }
    else if(x%cont==0 && x/cont>1){
        Console.WriteLine("não é primo pq é divisível por {0}",cont);
        break;
        
    }
}
