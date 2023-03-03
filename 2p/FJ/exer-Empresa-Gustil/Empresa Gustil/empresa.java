import java.util.ArrayList;
import java.util.List;

class empresa{
    
    private static List<funcGenerico> listaFunc = new ArrayList<funcGenerico>();
    private static int indice=0;
    


public void adicionaFunc(funcGenerico func){
    
    listaFunc.add(func);


}

public void mostraSalario(){
    
    
    System.out.println("O salario deste funcionario é "+listaFunc.get(this.indice).getSalarioLiquido());
    this.indice++;
}
}

