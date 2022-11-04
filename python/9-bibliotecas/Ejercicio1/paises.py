
lista = input("Por favor Escriba una Lista de paises separados por coma: ")

lista_paises_split = lista.split(',')

lista_paises_str = " ".join(lista_paises_split)

lista_paises = lista_paises_str.split()

paises_no_repetidos = set(lista_paises)

paises = list(paises_no_repetidos)

paises.sort()

print(paises)