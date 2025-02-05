from django.shortcuts import render
from Practica10.forms import FormularioContacto
from django.views.decorators.csrf import csrf_exempt

# Create your views here.

def index(request):
    
    if request.POST:
        miFrm=FormularioContacto(request.POST)
        if miFrm.is_valid():
            dicc=miFrm.cleaned_data           
            return render(request,'edit.html',dicc)
    else:
        miFrm=FormularioContacto()
    
    return render(request,"index.html",{"form":miFrm})
        
        
    