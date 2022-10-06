package threadsSO;

public class primeiraThread extends Thread {


	private String nome;
	private int tempo;

	public primeiraThread(String nome,int tempo) {
		this.nome=nome;
		this.tempo=tempo;
		start();
	}
	public void run() {
		try {
			int contador =0;
			while(true) {
				
				contador++;
				Thread.sleep(tempo);
				System.out.println(nome);
				
			if(contador==8) {
				System.out.println("          fim");
				break;
			}
			}
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}


	}



}

