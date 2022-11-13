#Deprecado
#from django.conf.urls import url

from django.urls import re_path
from . import views

from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
   re_path(r'^$', views.index, name='index'),
   re_path('peliculas_mas', views.peliculas_mas, name='peliculas_mas'),
   re_path('directores', views.directores, name='directores'),
   re_path('generos', views.generos, name='generos'),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)   
