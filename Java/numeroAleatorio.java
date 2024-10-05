import java.util.Random;
import java.util.Scanner;

public class numeroAleatorio {
    public static void main(String[] args){

        Scanner ler = new Scanner(System.in);
        Random rand = new Random();
        int tentativas = 0;
        int dificuldade = 10;

        System.out.println("Qual a dificuldade que você deseja? (insira o número)");
        System.out.println("1 - Fácil (0 - 10)");
        System.out.println("2 - Médio (0 - 100)");
        System.out.println("3 - Difícil (0 - 1000) ");

        dificuldade = ler.nextInt();

        switch (dificuldade) {
            case 1:
                dificuldade = 10;
                break;
            case 2:
                dificuldade = 100;
                break;
            case 3:
                dificuldade = 1000;
                break;
            default:
                break;
        }

        int num = rand.nextInt(dificuldade + 1);

        do{
            System.out.println("Tentativa " + tentativas );
            int palpite = ler.nextInt();

            if(palpite > num){
                System.out.println("Errou, o número é menor!");

            } else if (palpite < num){
                System.out.println("Errou, o número é maior!");
            } else{
                System.out.println("Acertou! É o número " + num + "!");
                break;
            }
            tentativas++;

        }while(true);

        System.out.println("Número de tentativas: "+ tentativas);
    }
}

