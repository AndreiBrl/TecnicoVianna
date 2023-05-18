class ListaEncadeada
{
    private No primeiro = null;

    public No Primeiro
    {

        get
        {
            return primeiro;
        }
    }


    public void adicionarNoInicio(int valor)
    {
        No novo = new No { Valor = valor };

        if (primeiro == null)
            primeiro = novo;
        else
        {
            while (primeiro.Proximo != null)
            {
                novo.Proximo = primeiro;
                primeiro = novo;
            }

        }



    }
    public void adicionarNoFinal(int valor)
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

    public void removerNoIncio(){
        if(primeiro==null)
            throw new Exception ("Lista vazia");
        
        primeiro=primeiro.Proximo;
    }
    public void removerNoFinal(){
        if(primeiro==null)
            throw new Exception ("Lista vazia");

        if(primeiro.Proximo==null){
            primeiro=null;
        }
        else{
            No aux = primeiro;
            while(aux.Proximo.Proximo!=null)
                aux=aux.Proximo;
            
            aux.Proximo=null;
        }

    }
    

}