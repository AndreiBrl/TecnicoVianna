
int nota =Convert.ToInt32(Console.ReadLine());
int p1=nota;
int p2=nota;
int p3=nota;

Console.WriteLine(" maior {0}, menor {1}, menor {2}", p1,p2,p3);
for(int i =0;i<2;i++){
    nota =Convert.ToInt32(Console.ReadLine());
    if(nota>p1){
        p1=nota;

    }
     else if (nota<=p1 && nota>=p2){
        p2=nota;
        

    }
    if (nota<=p2){
        p3=nota;
    }
    Console.WriteLine(" maior {0}, menor {1}, menor {2}", p1,p2,p3);

}
