int i;
double soma = 0;
for(i=0;i<4;i++){
            Console.WriteLine("Prencha a {0} pessoa",i+1);
            
            soma+=criaPessoa();
            
            Console.WriteLine(soma);
}
            Console.WriteLine(calculaMedia(soma,i));



    static double criaPessoa(){
        
        Pessoas pessoa = new Pessoas();
        Console.Write("Digite a idade da pessoa: ");
        int idade = Convert.ToInt32(Console.ReadLine());
        pessoa.Idade=idade;

        Console.Write("Digite o salario da pessoa: ");
        double salario = Convert.ToDouble(Console.ReadLine());
        pessoa.Salario=salario;
        return salario;
    }
    static double calculaMedia(double soma,int i){
        
        
        double media = soma/i;
        return media;
    }
    