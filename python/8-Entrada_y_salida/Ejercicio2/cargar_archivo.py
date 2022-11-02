import pickle

class Vehiculo:
    color = ''
    puertas = 0
    ruedas  = 0


    def __init__(self, color, puertas, ruedas):
        self.color = color
        self.puertas = puertas
        self.ruedas = ruedas
    
    def __str__(self):
        print(f'Vehiculo: [color: {self.color}, puertas: {self.puertas}, ruedas: {self.ruedas}] ')
    

vehiculo = Vehiculo('Rojo', 4, 4)
vehiculo.__str__()


def guardarClaseVehiculo(clase):
    f = open('datosVehiculo.bin', 'wb')
    pickle.dump(clase, f)
    print('-----------------------------------')
    print('Guardando clase Vehiculo')
    print('-----------------------------------')
    f.close()


def cargarClaseVehiculo():
    f = open('datosVehiculo.bin', 'rb')
    vehiculo = pickle.load(f)
    f.close()

    print('-----------------------------------')
    print(type(vehiculo))
    print('Cargar clase Vehiculo')
    print(vehiculo.__str__())
    print('-----------------------------------')


guardarClaseVehiculo(Vehiculo('Rojo', 4, 4))
cargarClaseVehiculo()