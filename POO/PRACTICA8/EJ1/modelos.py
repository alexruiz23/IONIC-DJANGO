
class agenda(): 
    
    def __init__(self): 
        self.__contactos=[]
        
    @property 
    def contactos(self):
        return self.__contactos
    
    
    def añadirContacto(self,nombre,tel,email):
       for contacto in self.__contactos: 
            if tel==contacto.__tel :
              self.__contactos.append(nombre,tel,email)
              
    def buscarContacto(self,nombre="",tel="",email=""):
          for contacto in self.__contactos: 
              if nombre == contacto.__nombre or  tel == contacto.__tel or email == contacto.__email:
                  return contacto
              
    def listasContactos(self):
        return self.__contactos
    
    def eliminarContacto(self,tel):
        for contacto in self.__contactos:
            if tel==contacto.__tel:
                self.__contactos.remove(contacto)
                return True
        return False
                                        
                       
                  
                   
        
            
    
class contacto(): 
    def __init__(self,nombre,tel,email): 
        self.__nombre=nombre
        self.__tel=tel
        self.__email=email
        
    @property
    def UNcontacto(self):
        return self
    

            

