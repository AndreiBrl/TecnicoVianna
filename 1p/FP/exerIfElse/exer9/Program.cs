// See https://aka.ms/new-console-template for more information
Console.WriteLine("Forma de pagamento:\n 1 - À vista.\n 2 - Cheque para trinta dias.\n 3 - Em duas vezes.\n 4 - Em três vezes.\n 5 - Em quatro vezes.\n 6 - A partir de cinco vezes.\n Entre com sua opção: ");
int escolha = Convert.ToInt32(Console.ReadLine());
if (escolha==1)
    Console.WriteLine(" Você escolheu à vista e terá desconto de 20%");
else if (escolha==2)
    Console.WriteLine(" Você escolheu cheque para trinta dias e o valor será o mesmo preço de à vista");
else if (escolha==3)
    Console.WriteLine(" Você escolheu em duas vezes, e o valor será o mesmo preço de à vista");
else if (escolha==4)
    Console.WriteLine(" Você escolheu em três vezes, e o valor será o mesmo preço de à vista");
else if (escolha==5)
    Console.WriteLine(" Você escolheu em quatro vezes e terá  um juros de 3% ao mês");
else if (escolha==6)
    Console.WriteLine(" Você escolheu mais de cinco vezes, e terá um juros de 5% ao mês");
else
    Console.WriteLine("Opção inválida");