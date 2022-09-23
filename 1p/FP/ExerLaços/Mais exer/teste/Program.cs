Console.WriteLine("Digite help para receber informações");
string help= Console.ReadLine()!;
if (help=="help"){
    while(true){
    Console.WriteLine("Digite start para começar e quit para sair");
    string jogo = Console.ReadLine()!;
    if (jogo =="start"){
        while (true){
            Console.WriteLine("Agora digite Start para andar, stop para parar e quit para sair do jogo");
            string carro = Console.ReadLine()!;
            if (carro=="start"){
                Console.WriteLine("O carro está andando");
            }
            else if( carro=="stop"){
                Console.WriteLine("O carro parou");
            }
            else{
                break;
            }
        }

    }
    Console.Write("Você saiu do jogo");
    break;


    }

}