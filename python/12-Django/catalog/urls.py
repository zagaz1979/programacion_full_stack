#deprecado
#from django.conf.urls import url
from django.urls import re_path
from . import views

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    re_path(r'^$', views.index, name='index')
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)    

