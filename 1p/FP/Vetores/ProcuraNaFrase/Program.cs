Console.WriteLine("Digite duas frases");
string texto = Console.ReadLine()!;
string procurado = Console.ReadLine()!;
Console.WriteLine("O texto se encontra na frase no indice: {0} ",verificaTexto(texto,procurado));

static int verificaTexto(string texto, string procurado){
   int j = 0,x=0;

    for(int i=0;i<=texto.Length;i++){
        
        if(texto[i]==procurado[0]){
            for(j=1,x=i;j<procurado.Length;x++){
                if(texto[x]==procurado[j]){
                    j++;
                    if(x>=texto.Length){
                        break;
                    }
                }
               
            }
                if(j==procurado.Length){
                    return i;
                    
                }
                
            
            

    }
    
        }                
        return -1;

}