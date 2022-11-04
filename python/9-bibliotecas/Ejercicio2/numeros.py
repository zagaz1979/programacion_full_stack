
from functools import reduce

elementos_impares = filter(lambda x: x % 2 != 0, [1,2,3,4,5,6,7,8,9])

numeros_impares = list(elementos_impares)
print(numeros_impares)

sumar_numeros_impares = reduce(lambda a, b: a + b, numeros_impares )
print(sumar_numeros_impares)
