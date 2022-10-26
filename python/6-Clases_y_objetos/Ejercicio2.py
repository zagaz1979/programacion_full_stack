class Alumno:
    nombre = ""
    nota = 0

    def __init__(self, nombre, nota):
        self.nombre = nombre
        self.nota = nota
    
    def visualizar(self):
        if self.nota < 3.0:
            print(f'Alumno(a) {self.nombre} desaprobo con la nota {self.nota}')
        else:
            print(f'Alumno(a) {self.nombre} aprobo con la nota {self.nota}')


alumno1 = Alumno("Maria", 4.5)
alumno1.visualizar()

alumno2 = Alumno("Carlos", 2.5)
alumno2.visualizar()

