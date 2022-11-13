from django.shortcuts import render

# Create your views here.
from .models import Author, Genre, Book, BookInstance

def index(request):
    num_books = Book.objects.all().count()
    num_instances = BookInstance.objects.all().count()
    num_authors = Author.objects.all().count()

    disponibles = BookInstance.objects.filter(status='a').count()

    return render(
        request,
        'index.html',
        context={
            'num_books': num_books,
            'num_instances': num_instances,
            'num_authors': num_authors,
            'disponibles': disponibles
        }
    )

