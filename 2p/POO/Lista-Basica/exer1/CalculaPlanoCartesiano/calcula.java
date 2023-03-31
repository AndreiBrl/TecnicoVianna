class calcula{
    
    
    public double calculaDistancia(int x1, int y1, int x2 , int y2){
        
        double conta = Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2));
        
        return conta;
    }
}