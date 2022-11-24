class Contato{
    private string nome;
    private int tell;
    private string email;
    private Endereco endereco = new Endereco();

    public string Nome{get{return nome;}set{nome=value;}}
    
    public int Tell{get{return tell;}set{tell=value;}}
    
    public string Email{get{return email;}set{email=value;}}
    
    public Endereco Endereco{get{return endereco;}set{endereco=value;}}
}