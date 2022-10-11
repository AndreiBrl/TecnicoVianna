Console.WriteLine("Digite um texto e depois um caracter");
string texto = Console.ReadLine()!;
char caracter= Convert.ToChar(Console.ReadLine()!);

Console.WriteLine(verificaCaracter(texto,caracter));

static int verificaCaracter(string texto,char caracter){
    for(int i=0;i<texto.Length;i++){
        if(texto[i]==caracter){
            return i;
        }
    }
    return -1;
}