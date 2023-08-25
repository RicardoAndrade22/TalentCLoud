def mostrarNumero():
  numero_Valido = False
  while(numero_Valido==False):  
    print("Escreva um numero maior que 10 ou igual a 100!!")
    try:
        num = int(input())
        if(num>100):
           print("Número precisa ser menor que 100")
        elif(num<=10):
           print("Número precisa ser maior que 10")
        elif(num%2 != 0 and num%3 != 0):
           print("Número precisa ser divisivel por 2 ou 3")
        elif(num%2 != 0):
           print("Numero precisa ser par")
        else:
            print("numero valido", num)
            frase="voce escolheu o número" + str(num)
            print(frase)
       
        #         #numero_Valido=True
            print("encerrado")
    except ValueError:
        print("precisa ser um numero inteiro")

mostrarNumero()