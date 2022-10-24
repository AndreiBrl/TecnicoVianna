int [] G  = new int[] {1,0,2,1,1,1,0,2,1,1,2,2,1};
int [] R  = new int[5];
int contador=0;
while(true){
Console.WriteLine("Digite seus números jogador {0}",contador+1);
    for(int i=0;i<R.Length;i++){
        int numResposta=Convert.ToInt32(Console.ReadLine());
        R[i]=numResposta;
    }
    Console.WriteLine(verifica(G,R,contador+1));
    contador++;
}

static int verifica(int [] G, int [] R, int candidato){
int acertos=0;
for(int i=0;i<R.Length;i++){
    if(G[i]==R[i]){
        acertos++;
    }
}
Console.Write("O candidato {0}º acertou: ",candidato);
return acertos;
}





/*int [] R1 = new int[] {1,2,0,1,2,1,2,2,2,1,0,1,2};
int [] R2 = new int[] {0,0,0,1,1,1,2,2,1,0,1,2,1};
int [] R3 = new int[] {2,2,2,1,2,0,0,0,1,2,1,0,1};
int [] R4 = new int[] {0,2,1,2,1,2,1,2,1,1,1,1,0};
int [] R5 = new int[] {1,0,2,1,1,1,0,2,1,1,2,2,1};*/