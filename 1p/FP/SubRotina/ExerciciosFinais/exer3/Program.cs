// See https://aka.ms/new-console-template for more information
Console.WriteLine("digite sua idade em anos, meses e dias");
Console.Write("Quantos anos? ");
int anos = Convert.ToInt32(Console.ReadLine());
Console.Write("Quantos meses? ");
int meses = Convert.ToInt32(Console.ReadLine());
Console.Write("quantos dias? ");
int dias = Convert.ToInt32(Console.ReadLine());

Console.WriteLine("Supondo que todos os meses tenham 30 dias, a sua idade em dias é {0}",idadeEmDias(anos,meses,dias));

static int idadeEmDias(int anos,int meses, int dias){
    int conta = anos*12*30+meses*30+dias;
    return conta;
}

