from django.shortcuts import render

from .models import Director, Genero, Pelicula, Directores_Por_Peliculas
 
def index(request):
   num_directores = Director.objects.all().count()
   num_generos = Genero.objects.all().count()
   num_peliculas = Pelicula.objects.all().count()
  
   return render(
       request,
       'index.html',
       context={
           'num_directores': num_directores,
           'num_generos': num_generos,
           'num_peliculas': num_peliculas
       }
   )

def peliculas_mas(request):
    peliculas = Pelicula.objects.all()

    return render(
        request,
        'peliculas_mas.html',
        context={
            'peliculas': peliculas
        } 
    )

def directores(request):
    directores = Director.objects.all()

    return render(
        request,
        'directores.html',
        context={
            'directores': directores
        } 
    )

def generos(request):
    generos = Genero.objects.all()

    return render(
        request,
        'generos.html',
        context={
            'generos': generos
        } 
    )