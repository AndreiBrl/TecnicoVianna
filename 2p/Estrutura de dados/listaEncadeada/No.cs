class No{
    public int Valor{get; set;}

     

    public No Proximo{

        get{
            return proximo;
        }
        set{
            proximo=value;
        }
    }
    private No? proximo = null;

    
}