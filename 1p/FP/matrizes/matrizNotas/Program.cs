internal class Program
{
    private static void Main(string[] args)
    {
        double [, ,] materiaNotaAluno = new double [3,3,3] {{{4,6,7},{4,7,9},{5,8,10}},{{10,10,10},{5,7,10},{5,6,7}},{{6,8,9},{10,9,10},{2,5,6}}};

    calculaMedia(materiaNotaAluno);
    static double calculaMedia(double [, ,] materiaNotaAluno){
        int i,j,x;
        double somaNotas=0;
        for(i=0;i<3;i++){
            for(j=0;j<3;j++){
                for(x=0;x<3;x++){
                    somaNotas+=materiaNotaAluno[i,j,x];

                }
            }
            int media = somaNotas/3;

        }

        return  2.3;
    }
    }
}