


Lista lista = new Lista();
Lista lista2 = new Lista();

lista.adicionaInicio(1);
lista.adicionaInicio(2);
lista.adicionaInicio(3);
lista.adicionaInicio(4);

lista.adicionaFinal(10);






lista2.adicionaFinal(5);
lista2.adicionaFinal(6);
lista2.adicionaFinal(7);
lista2.adicionaFinal(8);
lista2.adicionaFinal(9);

// lista.adcionaVariosNoFinal(lista2);


lista.adcionaListaNoInicio(lista2);

Console.WriteLine(lista.Primeiro.Anterior.Valor);



// No aux = lista.Primeiro;


// while(aux!=null){

//     Console.WriteLine(aux.Valor);


//     aux=aux.Proximo;

// }