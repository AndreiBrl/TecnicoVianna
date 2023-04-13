import java.util.ArrayList;
public class TimeFutebol{
    private String nome;
    private String cidade;
    private String estado;
    private ArrayList <Jogador> vetJogador = new ArrayList(10);
    public String getNome(){
        return this.nome;
    }
    public void setNome(String nome){
        this.nome=nome;
    }
    
    public String getCidade(){
        return this.cidade;
    }
    public void setCidade(String cidade){
        this.cidade=cidade;
    }
    public String getEstado(){
        return this.estado;
    }
    public void setEstado(String estado){
        this.estado=estado;
    }
}