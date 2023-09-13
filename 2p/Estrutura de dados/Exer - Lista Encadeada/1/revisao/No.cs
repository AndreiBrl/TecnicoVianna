class No{

public double Valor{get;set;}

public No? Proximo{
    get{
        return proximo;
    }
    set{
        proximo=value;
    }
 }

// public No Proximo { get; set; }
public No Anterior { get; set; }

private No anterior =null;
private No? proximo = null;

}