loop=True
while(loop==True):
    try:
        print("Digite seu Nome completo: ")
        nome_Completo = input()
        print("Digite sua data de Nascimento: ")
        data_Nascimento = int(input())
        DATAATUAL = 2022
        if ((data_Nascimento <=2021) and (data_Nascimento >=1922 )):
            idade = DATAATUAL - data_Nascimento
            print (nome_Completo, " ", idade, " anos")
            loop = Fricalse
        else: 
            print("O ano inserido não é permitido")

    except Exception as error:
        print(error)
        print("NÂO foi digitado um numero correto")


