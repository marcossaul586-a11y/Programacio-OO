def clasificador(num):
#Clasificacion de numeros par e impar
    i=0
    while i<num:
        if i%2==0:
            print(f"El numero {i} es par")
        elif i%2!=0:
            print(f"El numero {i} es Impar")
        i=i+1
clasificador(10)
#clasificacion de numero primos
def num_primo(n):
     for i in range(3, int(n**0.5) + 1, 2):
        if n % i == 0:
            return f"El numero {n} no es primo"
        elif n%2==0:
            return f"El numero {n} no es primo"
     return f"El numero {n} es primo"
print(num_primo(7))

#Contador 
def contador():
    for i in range(1000):
        print(i)
contador()
        
    