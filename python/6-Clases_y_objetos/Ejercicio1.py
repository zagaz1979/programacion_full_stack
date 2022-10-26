class Vehiculo:
    color = ""
    ruedas = 0
    puertas = 0

    def __init__(self, color, ruedas, puertas):
        self.color = color
        self.ruedas = ruedas
        self.puertas = puertas

    def visualizar(self):
        print(f'El Vehiculo es de color {self.color}, tiene {self.ruedas} ruedas y {self.puertas} puertas')

class Coche(Vehiculo):
    velocidad = 0
    cilindrada = 0

    def __init__(self, color, ruedas, puertas, velocidad, cilindrada):
        super().__init__(color, ruedas, puertas)
        self.velocidad = velocidad
        self.cilindrada = cilindrada
    
    def visualizar(self):
        print(f'El Coche es de color {self.color}, tiene {self.ruedas} ruedas, tiene {self.puertas} puertas, con velocidad de {self.velocidad} y el cilindraje es de {self.cilindrada} ')


coche = Coche("Negro", 4, 2, 180, 500)
coche.visualizar()
