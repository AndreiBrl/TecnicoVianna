// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");
int n1=0;
int n2=1;
while(n2 <=9){
    
    n1+=1;
    if(n1==11){
    n1=1;
    n2+=1;
    }
    
    Console.WriteLine(n2+"x"+n1+"="+n1*n2);
    
    }
    // metodo readline lê apenas string, precisa converter para double
    double num1 = Convert.ToDouble(Console.ReadLine());
    int num2 = 0;
    while(num2<=9){
        num2+=1;
        Console.WriteLine(num1+"x"+num2+"="+ num1*num2);
    }


