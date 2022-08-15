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

