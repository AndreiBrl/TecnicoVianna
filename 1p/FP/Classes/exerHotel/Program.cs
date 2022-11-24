
Hotel [] vetorHotel = new Hotel [2];

for(int i = 0; i<vetorHotel.Length;i++){
    vetorHotel[i]=new Hotel();
    Console.WriteLine("Digite o nome do {0} hotel: ",i+1);
    vetorHotel[i].Nome=Console.ReadLine()!;
    Console.WriteLine("Vamos ao endereço");
    retornaEnderecos();

    Console.WriteLine("Digite a categoria do {0} hotel: ",i+1);
    vetorHotel[i].Categoria=Convert.ToInt32(Console.ReadLine());
}
Console.WriteLine("Faça uma busca pelo hotel atráves da categoria: ");
int busca = Convert.ToInt32(Console.ReadLine());
for(int i =0; i<vetorHotel.Length;i++){
    if(busca==vetorHotel[i].Categoria){
        Console.WriteLine("Hotel encontrado!\n Nome: {0}",vetorHotel[i].Nome);
    }
}

static void retornaEnderecos(){
    Endereco enderecoDoHotel = new Endereco();
    
Console.WriteLine("Digite a cidade: ");
    enderecoDoHotel.Cidade=Console.ReadLine()!;
    
Console.WriteLine("Digite o Logradouro: ");
    enderecoDoHotel.Logradouro=Console.ReadLine()!;
    
Console.WriteLine("Digite a Rua : ");
    enderecoDoHotel.Rua=Console.ReadLine()!;
}