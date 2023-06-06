class No{


public double Valor {get;set;}

public No Proximo{
    get{
        return proximo;
    }
    set{
        proximo = value;
    }
}
private No proximo = null;
}
