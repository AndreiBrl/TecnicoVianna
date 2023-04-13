public class main{
    
    
    public static void main(String [] args){
        
        Pesquisa pesquisa = new Pesquisa();
        pesquisa.cadastraPessoa("masculino","verdes","pretos", 20,1.76);
        pesquisa.cadastraPessoa("feminino","castanhos","pretos", 10,1.70);
        pesquisa.cadastraPessoa("masculino","castanhos","louros", 50,2.00);
        pesquisa.cadastraPessoa("masculino","azuis","louros", 12,1.40);
        pesquisa.cadastraPessoa("feminino","castanhos","pretos", 30,1.90);
        pesquisa.cadastraPessoa("feminino","verdes","louros", 30,1.20);
        pesquisa.cadastraPessoa("masculino","azuis","louros", 12,1.80);
        System.out.println(pesquisa.calculaAltura());
        System.out.println(pesquisa.mediaAlturaMulheres());
        System.out.println(pesquisa.numeroHomens());
        System.out.println(pesquisa.porcentagemHomensMulheres());
        System.out.println(pesquisa.porcentagemFemininoPorIdade());
        
    }
}