// See https://aka.ms/new-console-template for more information
Console.Write("Diga seu sexo: ");
string sexo = Console.ReadLine()!.ToUpper();
Console.Write("Agora diga sua altura: ");
double altura = Convert.ToDouble(Console.ReadLine());

if(sexo=="M"){
    Console.WriteLine("Seu peso ideal é {0:N}",(72.7*altura)-58);
}
else if(sexo=="F"){
    Console.WriteLine(" Seu peso ideial é {0:N}",(62.1*altura)-44.7);
}
else{
    Console.WriteLine("Sexo inválido");
}