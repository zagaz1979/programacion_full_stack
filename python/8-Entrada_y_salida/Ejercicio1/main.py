def main():
    crearArchivo()

    leerArchivo()
    leerArchivo()

    
def crearArchivo():
    f = open('archivo.txt', 'w')
    f.write('Archivo 1\n')
    f.write('Archivo 2\n')
    f.close()


def leerArchivo():
    f = open('archivo.txt', 'r')
    datos = f.readlines()

    f.close()

    for dato in datos:
        print(f'Datos del: {dato}')


if __name__ == '__main__':
    main()