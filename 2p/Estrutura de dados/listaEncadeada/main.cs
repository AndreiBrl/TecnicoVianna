ListaEncadeada lista = new ListaEncadeada();
lista.adicionarNoInicio(1);
lista.adicionarNoInicio(2);
lista.adicionarNoInicio(3);
lista.adicionarNoInicio(4);
lista.removerNoFinal();
lista.removerNoIncio();

imprimiLista(lista);


static void imprimiLista(ListaEncadeada lista){
    No aux = lista.Primeiro;

    while(aux!=null){
        Console.WriteLine(aux.Valor);
        aux=aux.Proximo;
    }
        

    }