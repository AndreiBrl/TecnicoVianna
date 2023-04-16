public class Triangulo{
    
    private double lado1;
    private double lado2;
    private double base;
    private double altura;
    
    
    
    
    
    
    public Triangulo(double lado1,double lado2,double base,double altura){
        
        this.lado1=lado1;
        this.lado2=lado2;
        this.base=base;
        this.altura=altura;
    }
    public double getLado1(){
        return this.lado1;
    }
        public double getLado2(){
        return this.lado2;
    }
        public double getBase(){
        return this.base;
    }
        public double getAltura(){
        return this.altura;
    }
    
    public  String calculaPerimetro(Triangulo triangulo){
        double perimetro = this.lado1+this.lado2+this.base;
        System.out.println(calculaArea(triangulo));
        return "Este triângulo tem "+ perimetro+" de perímetro";
    }
    public  String calculaArea(Triangulo triangulo){
        double area = (this.base*this.altura)/2;
        System.out.println(verificaTipo(triangulo));
        return "A área é: "+area;
    }
    public String verificaTipo(Triangulo triangulo){
        if(this.lado1==this.lado2 && this.lado2==this.base){
            return "Este triângulo é equilátero";
        }
        if(this.lado1==this.lado2 || this.lado1==this.base || this.lado2==this.base){
            return "Este triângulo é isósceles";
        }
        if(this.lado1!=this.lado2 || this.lado1!=this.base || this.lado2!=this.base){
            return "Este triângulo é escaleno";
        }
        return " ";
    }
}