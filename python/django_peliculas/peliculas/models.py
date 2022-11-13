from django.db import models


class Director(models.Model):
    nombre = models.CharField(max_length=100, help_text='Nombre del director')
    apellidos = models.CharField(max_length=100, help_text='Apellidos del director')

    def __str__(self):
        return self.nombre

class Genero(models.Model):
    nombre = models.CharField(max_length=50)
    descripcion = models.TextField(max_length=150)

    def __str__(self):
        return self.nombre

class Pelicula(models.Model):
    titulo = models.CharField(max_length=100)
    genero = models.ForeignKey('Genero', on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return self.titulo


class Directores_Por_Peliculas(models.Model):
    director = models.ForeignKey('Director', on_delete=models.SET_NULL, null=True)
    pelicula = models.ForeignKey('Pelicula', on_delete=models.SET_NULL, null=True)
    
    def __str__(self):
       return '%s, %s' % (self.director, self.pelicula)

