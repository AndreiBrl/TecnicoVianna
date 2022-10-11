
const int candidato=5;
    Console.WriteLine("Escolha um candidato: \n1 = Bolinha \n2 = Circulo \n3 = Triângulo \n4 = Losango \n5 = Retantgulo \n 100 = Nulo");
    Console.WriteLine("Digite 0 para sair");
    int contador=0;
    int [] distribuiVotos = new int [candidato];
    int nulo=0;

while(true){
    Console.Write("Digite seu voto: ");
    int voto = Convert.ToInt32(Console.ReadLine());
    if (voto==0){
        Console.WriteLine("Votação encerrada.");
        break;
    }
    if(voto==100){
        nulo++;
    }
    if(voto>5 && voto!=100){
        Console.WriteLine("Voto invalido");
    }
    if(voto>=1 && voto<=5){
        contador++;
        
        distribuiVotos[voto-1]++;
        
    }
    
}
contador+=nulo;

Console.WriteLine("\nO candidato Bolinha recebeu {0} votos\nO candidato Círculo recebeu {1} votos \nO candidato Triângulo recebeu {2} votos \nO candidato Losango recebeu {3} votos\nO candidato Retantgulo recebeu {4} votos\nTotal de votos nulos {5}\nTotal de votos {6}",distribuiVotos[0],distribuiVotos[1],distribuiVotos[2],distribuiVotos[3],distribuiVotos[4],nulo,contador);
