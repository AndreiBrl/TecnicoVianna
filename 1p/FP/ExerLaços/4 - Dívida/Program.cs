// See https://aka.ms/new-console-template for more information
double divida =10000;
double jurosdivida=0.025;
double aplicacao=1500;
double rendimento = 0.04;
int cont=0;
while(aplicacao<divida){
    Console.WriteLine("{0:N} |||| {1:N}||{2}",divida,aplicacao,cont);
    cont++;
    divida=divida+(divida*jurosdivida);
    aplicacao=aplicacao+(aplicacao*rendimento);


}
Console.WriteLine("Serão necessários "+(cont)+" meses");