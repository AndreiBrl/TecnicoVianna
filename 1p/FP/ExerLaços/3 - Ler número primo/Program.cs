// See https://aka.ms/new-console-template for more information
int x =Convert.ToInt32(Console.ReadLine());
int cont=1;
while(cont<x){
    cont++;
    if(x%cont==0 && x/cont>1){
        Console.WriteLine("não é porque é divisível por "+cont);
        break;
    }
    else if(x%cont>0){
        Console.WriteLine("Divisão por inteiro {0} não conta",cont);

    }
    else{
        Console.WriteLine("é primo");
    }
}
