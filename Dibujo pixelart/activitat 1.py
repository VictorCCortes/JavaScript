n1 = int(input("Indiqueu el primer nombre: "))
n2 = int(input("Indiqueu el segon nombre: "))
# Primer hem de crear dues variables amb un nombre cadascuna mitjançant la comanda input.

if n1 > n2:
# Després hem de comprovar que el primer número sigui més gran que el segón.
    i = n1
    while i >= n2:
        print(i)
        i = i - 1
else:
    print("Error")
"""
Una vegada comprovat si el primer número és més gran creem una variable "i" 
que serà igual al valor del primer número
i creem un bucle que mentre el primer nombre sigui més gran o igual que el segon 
mosri amb un print el valor de la variable "i" i després li resti 1 a la variable "i".
""" 
# Si el primer número no és més gran que el segon mostrarà un error.