
def calculadora(valor1,valor2, operacao):
    if(operacao ==1):
        total = valor1 + valor2
        return total

    elif(operacao ==2):
        total = valor1 - valor2            
        return total

    elif(operacao ==3):
        total = valor1 / valor2
        return total

    elif(operacao ==4):
        total = valor1 * valor2
        return total
    else: 
        return 0

print(calculadora(7,23,2))

    
