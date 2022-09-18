// See https://aka.ms/new-console-template for more information
double chico =1.5;
double ze = 1.4;
int contadorAnos=0;
while(chico>=ze){
    chico+=0.02;
    ze+=0.04;
    contadorAnos++;

}
Console.WriteLine("Após {0} anos o zé terá {1:N} de altura e o chico {2:N}",contadorAnos,ze,chico);