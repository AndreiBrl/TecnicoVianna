class Carro{

       // private int [] carro =  new int [2];
            private string placa;
            private string modelo;
            private int ano;


  //  public int [] Veiculo{ get{return carro;}set{carro=value;}}



    public string Placa{ get{return placa;}set{placa=value;}}
    public string  Modelo{ get{return modelo;}set{modelo=value;}}
    public int Ano{ get{return ano;}set{ano=value;}}


    public bool verificaPlaca(string placa){
        return placa.Length==6;
    }
}