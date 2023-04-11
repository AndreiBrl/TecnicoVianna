
int contador = 0;
Carro [] vetorCarros = new Carro [10];
while(true){
    Console.WriteLine("Escolha a opção\n 1 - Leia veículo\n 2  - Pesquise por ano\n 3 - Pesquise por placa\n 0 - SAIR");
    int escolha =Convert.ToInt32(Console.ReadLine());
    
    
    
    
    if(escolha==1){
        vetorCarros[contador]=leVeiculo();
    }
    else if(escolha==2){
        imprimePorAno(vetorCarros);
    }
    else if(escolha==3){
        pesquisaPorPlaca();
    }
   else if(escolha==0){
    break;
   }
   else{
    Console.WriteLine("Escolha impossível");
   }

contador++;

}
static Carro leVeiculo(){
    Carro carro = new Carro();
    while(true){

    Console.WriteLine("Escolha qual item adicionar\n 1 - Placa\n 2 - modelo\n 3 - Ano\n 0 - SAIR");
    int escolha =Convert.ToInt32(Console.ReadLine());
        if( escolha ==1){
            while(true){

            Console.WriteLine("Digite a placa");
            string placa = Console.ReadLine()!;
            carro.Placa=placa;
            
            if(carro.verificaPlaca(carro.Placa)==true){
                break;
            }
            else{
                Console.WriteLine("Placa errada");
            }
            }
           
        }
       else if(escolha ==2){
            Console.WriteLine("Digite o modelo");
            string modelo = Console.ReadLine()!;
            carro.Modelo=modelo;
            }
       else if( escolha==3){
            Console.WriteLine("Digite o modelo");
            int ano = Convert.ToInt32(Console.ReadLine());
            carro.Ano=ano;

            
        }
        else if(escolha==0){
            break;
        }
        else{
             Console.WriteLine("Escolha impossível");
            }    

    }
    
    return carro;
}

static void imprimePorAno(Carro [] vetorCarros){
    Console.WriteLine("Digite o ano do carro para pesquisa: ");
    int ano = Convert.ToInt32(Console.ReadLine());
    for(int i = 0;i<vetorCarros.Length;i++){
        if(vetorCarros[i].Ano==ano){
            Console.WriteLine("O carro é: \nplaca: {0}\n modelo: {1}\n Ano: {2}",vetorCarros[i].Placa,vetorCarros[i].Modelo,vetorCarros[i].Ano);
        }
        else{
            Console.WriteLine("Ano não encontrado");
        }
    }

}
static void pesquisaPorPlaca(){
    

}