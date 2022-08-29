// See https://aka.ms/new-console-template for more information
Console.Write("Diga quanto tempo demorou seu experimento em segundos ");
int segundos =Convert.ToInt32(Console.ReadLine());
calculo(segundos);

static void calculo(int segundos){
    int horas = segundos/3600;
    int minutos = (segundos%3600)/60;
    int segundosRestantes = (segundos%3600)%60;
    Console.WriteLine("Seu procedimento durou {0} horas {1} minutos e {2} segundos",horas,minutos,segundosRestantes);




}