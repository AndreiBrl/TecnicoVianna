public class Jogador extends Atleta{
    
    private int numero;
    private int posicao;
    
    public Jogador(){
        
    }
    
    public int getNumero(){
        return this.numero;
    }
    public void setNumero(int numero){
        this.numero=numero;
    }
    public int getPosicao(){
        return this.posicao;
    }
    public void setPosicao(int posicao){
        this.posicao=posicao;
    }
}