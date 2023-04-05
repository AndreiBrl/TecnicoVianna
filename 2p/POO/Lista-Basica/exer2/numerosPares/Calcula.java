import java.util.ArrayList;

class Calcula{
    
    private ArrayList<Integer> vetImpar= new  ArrayList<Integer>();
    
    
    public void pegaImpar(int num1,int num2){

        
        if(num1%2!=0){
            num1+=2;
            for(int i= 0; num1<num2;i++){
                
                this.vetImpar.add(num1);
                num1+=2;
            }
        
        }
        else{
            num1=num1+1;
            for(int i = 0; num1<num2;i++){
                
                this.vetImpar.add(num1);
                num1+=2;
            }
        }
        
    }
    public ArrayList<Integer> getLista(){
        return this.vetImpar;
    }
}