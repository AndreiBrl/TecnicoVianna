class Lista
{

    private No? primeiro = null;

    public No? Primeiro
    {
        get
        {
            return primeiro;
        }


    }

    public void adicionaInicio(double valor)
    {
        No novoNo = new No(); // Sempre lembrar de Instanciar um Novo nó em todo método criado;
        novoNo.Valor = valor;

        if (primeiro == null)
        {
            primeiro = novoNo;

        }
        else
        {
            
            
            novoNo.Proximo = primeiro;
            
            primeiro = novoNo;
        }

        // metodoFinalLista2() = primeiro;
        // primeiro = lista2;
    }

    public void adicionaFinal(double valor)
    {

        No novoNo = new No { Valor = valor };

        if (primeiro == null)
        {
            primeiro = novoNo;
        }
        else
        {
            No aux = primeiro; // é criada uma cópia da "lista"(objeto) para a variavel aux

            while (aux.Proximo != null)
            {
                aux = aux.Proximo;
            }

            aux.Proximo = novoNo;

        }

    }

    public void removeInicio()
    {

        if (primeiro == null)
        {
            throw new Exception("Lista Vazia");
        }

        else
        {
            primeiro = primeiro.Proximo;
        }



    }


    public void removeFinal()
    {
        if (primeiro == null)
        {
            throw new Exception("Lista Vazia");
        }
        if (primeiro.Proximo == null)
        {
            primeiro = null;
            throw new Exception("Removeu um unico elemento");
        }

        else
        {
            No aux = primeiro;

            while (aux.Proximo.Proximo != null)
            {


                aux = aux.Proximo;

            }
            aux.Proximo = null;
        }

    }

    public void adcionaVariosNoFinal(Lista lista2)
    {
        No? auxLista2 = lista2.primeiro;

        if (lista2.primeiro == null)
            Console.WriteLine("a Lista 2 esta vazia");



        else
        {
            No? auxLista1 = primeiro;

            //Verifica se a lista 1 é nula
            if (primeiro == null)
            {
                primeiro = auxLista2;
            }

            else
            {
                while (auxLista1?.Proximo != null)
                {
                    auxLista1 = auxLista1.Proximo;

                }

                //auxLista1.proximo esta no valor null da lista 1. auxLista1 esta no ultimo elemento


                auxLista1.Proximo = auxLista2;




            }
        }

    }

    public void adcionaListaNoInicio(Lista lista2)
    {


        No? auxLista2 = lista2.primeiro;

        No? auxPrimeiroElementoLista2 = lista2.primeiro;

        if (lista2.primeiro == null)
            Console.WriteLine("a Lista 2 esta vazia");



        else
        {
            

            //Verifica se a lista 1 é nula

            if (primeiro == null)
            {
                primeiro = auxLista2;
            }


            else
            {
                // Pegando o ultimo elemento da lista 2
                while (auxLista2.Proximo != null)
                {

                    auxLista2 = auxLista2.Proximo;
                }
                
                //auxLista2=ultimo elemento da lista 2
                //auxLista2.proximo vale null


                auxLista2.Proximo = primeiro;
                
                // até aqui o auxlista2 é objeto 9  + lista 1

                primeiro = auxPrimeiroElementoLista2;







            }
        }
    }


}