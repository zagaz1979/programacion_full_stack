from django.contrib import admin
from .models import Director, Genero, Pelicula, Directores_Por_Peliculas 

admin.site.register(Director)
admin.site.register(Genero)
admin.site.register(Pelicula)
admin.site.register(Directores_Por_Peliculas)