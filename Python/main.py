import random, os



pontuacao = 0
tentativas = 0
alcance = 10

input("Jogo advinhe o número! (digite qualquer coisa para começar) \n")
print("qual a dificuldade? (insira o número correspondente) \n")
print("1- Fácil: 0 - 10")
print("2 -Médio: 0 - 100")
print("3 -Difícil: 0 - 1000 \n")
dificuldade = input()
match(dificuldade):
    case "1":
        alcance = 10
    case "2":
        alcance = 100
    case "3":
        alcance = 1000

os.system("cls")


numero = random.randint(0, alcance)

while(True):
    print("Tentativa ", tentativas)
    palpite = int(input())

    if(palpite < numero):
        print("errou, o número é maior!")
    elif(palpite > numero):
        print("errou, o número é menor!")
    else:
        print("Parabéns você acertou!")
        print("Tentativas: ", tentativas)
        print("Palpite: ", palpite)
        print("Numero: ", numero)
        break
    tentativas+=1