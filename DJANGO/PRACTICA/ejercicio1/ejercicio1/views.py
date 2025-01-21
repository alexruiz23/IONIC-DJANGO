from django.http import HttpResponse
from django.shortcuts import render

def saludo(request):
    # return HttpResponse("Hola MUndo")
    return render(request,"index.html")

def despedida(request):
    return HttpResponse("adios MUndo")