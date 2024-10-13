import random, os

pontuacao = 0
tentativas = 0
alcance = 10
arrayPalpites = []

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
    try:
        print("Tentativa ", tentativas, " Palpites: ", arrayPalpites)
        palpite = int(input())
    except ValueError:
        print("input inválido")
        continue

    if(palpite < numero and palpite > 0):
        print("errou, o número é maior!")
        arrayPalpites.append(palpite)

    elif(palpite > numero and palpite < alcance):
        print("errou, o número é menor!")
        arrayPalpites.append(palpite)

    elif(palpite == numero):
        print("Parabéns você acertou!")
        print("Tentativas: ", tentativas)
        print("Palpite: ", palpite)
        print("Numero: ", numero)
        break
    else:
        print("input inválido")
        continue
    tentativas+=1