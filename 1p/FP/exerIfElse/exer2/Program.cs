// See https://aka.ms/new-console-template for more information
while(true){    
Console.Write("Escolha um execicio ou digite 4 para sair: ");
    int escolha=Convert.ToInt32(Console.ReadLine());
        if(escolha==1 || escolha==2 || escolha==3){
        escolhaExercicio(escolha);
        }
        else{
            Console.WriteLine("Tchau");
            break;
        }
    }


static void exer1(double a){
    if(a%2==0){
        Console.WriteLine("O numero é divisível por 2");
    }
    else{
        Console.WriteLine("Não é divisível");
    }
}
static void exer2(double a){
    if(a%2==0 && a%3==0){
        Console.WriteLine("O numero é divisível por 2 e por 3");
    }
    else if (a%2==0 && a%3!=0){
        Console.WriteLine("É por 2, mas não é por 3");
    }
    else if(a%2!=0 && a%3==0){
        Console.WriteLine("é por 3, mas não é por 2");
    }
    else{
        Console.WriteLine("Não pelos dois");
    }}

    static void exer3(double a){
        if(a%2==0 && a%3==0 && a%5!=0){
        Console.WriteLine("O numero é divisível por 2 e por 3, mas não é por 5");
    }
    else if (a%2==0 && a%3!=0 && a%5==0){
        Console.WriteLine("É por 2 e por 5, mas não é por 3");
    }
    else if(a%2!=0 && a%3==0 && a%5==0){
        Console.WriteLine("é por 3 e 5, mas não é por 2");
    }
    else if (a%2==0 && a%3==0 && a%5==0){
        Console.WriteLine("é por todos");
    }
    else{
        Console.WriteLine("O número é divisível apensa por 2 ou 3 ou 5");
    }
    }

static void escolhaExercicio(int escolha){
    double a =Convert.ToDouble(Console.ReadLine());
    if (escolha ==1){
        exer1(a);
    }
    else if(escolha==2){
        exer2(a);
    }
    else{
        exer3(a);
    }

}

