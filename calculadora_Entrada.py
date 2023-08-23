operacao=""

def calculadora(valor1,valor2, operacao):
    if(operacao =="1"):
        total = valor1 + valor2
        return total

    elif(operacao =="2"):
        total = valor1 - valor2            
        return total

    elif(operacao =="3"):
        total = valor1 / valor2
        return total

    elif(operacao =="4"):
        total = valor1 * valor2
        return total
    else: 
        return "voce digitou opcao invalida para soma1"
   

while (operacao!="t"):
    print("digite um numero")
    valor1= int(input())
    print("digite outro numero")
    valor2= int(input())
    print("digite qual a operaçao de sejada!")
    print("1)somar 2)subtrair 3)dividir 4)multiplicar")
    operacao = input()
    print("O Resultado é",calculadora(valor1,valor2,operacao))
    print("+-+-+-+-+-+-+")
    print("para cancelar tecle 't' e ENTER! ")
    print("para NOVO CALCULO  tecle ENTER! ")
    operacao= input()

