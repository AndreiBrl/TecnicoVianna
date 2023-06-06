

Lista lista = new Lista();
Lista lista2 = new Lista();
lista2.adcionaNoFinal(6);
lista2.adcionaNoFinal(7);
lista2.adcionaNoFinal(8);
lista2.adcionaNoFinal(9);
lista2.adcionaNoFinal(10);
lista2.removeNoFinal();


lista.adcionaNoFinal(1);
lista.adcionaNoFinal(2);
lista.adcionaNoFinal(3);
lista.adcionaNoFinal(4);
lista.adcionaNoFinal(5);
lista.AdicionaVariosNoInicio(lista2);



No? aux = lista2.Primeiro;
while(aux!=null){

    Console.WriteLine(aux.Valor);
    aux=aux.Proximo;
}