from modelos import *
opcion="0"
miagenda=agenda()
while opcion !=5:
    if opcion=="1":
        nombre=input("Dame un nombre")
        tel=input("Dame un apellido")
        email=input("Dame un email")
        miagenda.añadirContacto(nombre,tel,email)
    if opcion=="2":
        print("Deja en blanco las opciones por las que no quieras buscar")
        nombre=input("Dame un nombre")
        tel=input("Dame un apellido")
        email=input("Dame un email")
        miagenda.buscarContacto(nombre,tel,email)
    if opcion=="3":
        miagenda.listasContactos()

opcion=input("1.Añadir Contact\n2.Buscar Contacto\n3.Listar Contacto\n4.ELiminar Contato\n5.Salir")