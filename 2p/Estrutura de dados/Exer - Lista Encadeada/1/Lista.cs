class Lista
{

    private No primeiro = null;

    public No Primeiro
    {

        get
        {
            return primeiro;
        }
    }

    public void AdicionaNoInicio(double valor)
    {
        No novo = new No { Valor = valor };
        if (primeiro == null)
            primeiro = novo;
        else
        {
            novo.Proximo = primeiro;
            primeiro = novo;
        }


    }
    public void adcionaNoFinal(double valor)
    {
        No novo = new No { Valor = valor };
        if (primeiro == null)
            primeiro = novo;
        else
        {
            No aux = primeiro;
            while (aux.Proximo != null)
            {
                aux = aux.Proximo;

            }
            aux.Proximo = novo;

        }
    }
    public void removeNoInicio()
    {

        if (primeiro.Proximo == null)
            throw new Exception("Lista vazia");
        else
        {
            primeiro = primeiro.Proximo;
        }


    }

    public void removeNoFinal()
    {

        if (primeiro == null)
            throw new Exception("Lista vazia");

        if (primeiro.Proximo == null)
            primeiro = null;
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

    public void adcionaVariosNoFinal(Lista lista)
    {
        No auxListaAdiciona = lista.primeiro;

        if (lista.primeiro == null)
            Console.WriteLine("Lista a ser adicionada esta vazia");


        else
        {
            No aux = primeiro;
            if (primeiro == null)
            {
                primeiro = auxListaAdiciona;
                while (auxListaAdiciona.Proximo != null)
                {
                    auxListaAdiciona = auxListaAdiciona.Proximo;

                    aux.Proximo = auxListaAdiciona;
                    aux = aux.Proximo;
                }

            }

            else
            {
                while (aux.Proximo != null)
                {
                    aux = aux.Proximo;

                }
                // aux.proximo=null
                while (auxListaAdiciona.Proximo != null)
                {
                    aux.Proximo = auxListaAdiciona;
                    aux = aux.Proximo;
                    auxListaAdiciona = auxListaAdiciona.Proximo;

                }

            }
        }

    }

    public void AdicionaVariosNoInicio(Lista lista)
    {
         No auxListaAdiciona = primeiro;

        if (lista.primeiro == null)
            Console.WriteLine("Lista a ser adicionada esta vazia");


        else
        {
            No aux = lista.primeiro;
           
                while (aux.Proximo != null)
                {
                    aux = aux.Proximo;

                }
                // aux.proximo=null
                while (auxListaAdiciona.Proximo != null)
                {
                    aux.Proximo = auxListaAdiciona;
                    aux = aux.Proximo;
                    auxListaAdiciona = auxListaAdiciona.Proximo;

                }

            
        }
    }
}