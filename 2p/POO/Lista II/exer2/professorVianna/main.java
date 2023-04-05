class main{
    
    
    public static void main(String[] args){
        Faculdade facul = new Faculdade();
        facul.cadastraProfessor("Andrei",true,true,false,false);
        facul.cadastraDisciplina("Banco de dados",false);
        facul.cadastraDisciplina("POO",true);
        printaListaProf(facul);

        }
        
        public static void printaListaProf(Faculdade facul){
            
            for(Professor i:facul.getListaProf()){
                System.out.println(i.getNome());
                System.out.println(i.getGraduado());
                System.out.println(i.getespecializacao());
                System.out.println(i.getMestre());
                System.out.println(i.getDoutor());
                System.out.println(i.getSalario());
            
        }
    }
}