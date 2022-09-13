// See https://aka.ms/new-console-template for more information
int x=0;
int i=100;
repete(x,i);

static void repete(int x, int i){
    if(i>x){
        Console.WriteLine(i);
        i--;
        repete(x,i);
    }
}