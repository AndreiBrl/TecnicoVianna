// See https://aka.ms/new-console-template for more information
static void x(string oi){

Console.WriteLine(oi);
}
static void y(Action<string> x ){
    x("oi");
    Console.WriteLine("funcionou y");


}

y(x);
