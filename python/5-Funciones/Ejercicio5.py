def es_bisiesto(anio):
	return not anio % 4 and (anio % 100 or not anio % 400)

anio = 2022
if (es_bisiesto(anio) == False):
    print("No es bisiesto")
else:
    print("Es bisiesto")
