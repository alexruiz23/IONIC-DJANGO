import { Component } from '@angular/core';
import { ILibros } from '../interfaces/ilibros';
import { SearchbarChangeEventDetail } from '@ionic/angular';
import { IonSearchbarCustomEvent } from '@ionic/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
onSearchChange($event: IonSearchbarCustomEvent<SearchbarChangeEventDetail>) {
throw new Error('Method not implemented.');
}

  misLibros:ILibros[]=[]
  activo: ILibros|undefined;
  constructor() {
    {
      this.misLibros= [
        {
          "id": 1,
          "titulo": "El Camino de los Reyes",
          "autor": "Brandon Sanderson",
          "descripcion": "Primera parte de El Archivo de las Tormentas, donde seguimos a Kaladin, Shallan y Dalinar en el mundo de Roshar",
          "genero": "Fantasía épica",
          "portada": "camino-reyes.jpeg",
          "editorial": "Tor Books",
          "publicacion": 2010
        },
        {
          "id": 2,
          "titulo": "El Imperio Final",
          "autor": "Brandon Sanderson",
          "descripcion": "Primer libro de Mistborn, donde una banda de ladrones planea derrocar al Lord Legislador inmortal",
          "genero": "Fantasía",
          "portada": "imperio-final.jpeg",
          "editorial": "Tor Books",
          "publicacion": 2006
        },
        {
          "id": 3,
          "titulo": "El Pozo de la Ascensión",
          "autor": "Brandon Sanderson",
          "descripcion": "Segunda parte de Mistborn, donde Vin y el resto luchan por mantener un reino libre",
          "genero": "Fantasía",
          "portada": "pozo-ascension.jpeg",
          "editorial": "Tor Books",
          "publicacion": 2007
        },
        {
          "id": 4,
          "titulo": "Elantris",
          "autor": "Brandon Sanderson",
          "descripcion": "Primera novela publicada de Sanderson, sobre una ciudad mágica caída en desgracia",
          "genero": "Fantasía",
          "portada": "elantris.jpeg",
          "editorial": "Tor Books",
          "publicacion": 2005
        },
        {
          "id": 5,
          "titulo": "Palabras Radiantes",
          "autor": "Brandon Sanderson",
          "descripcion": "Segunda parte de El Archivo de las Tormentas, continuando la épica historia en Roshar",
          "genero": "Fantasía épica",
          "portada": "palabras-radiantes.jpeg",
          "editorial": "Tor Books",
          "publicacion": 2014
        },
        {
          "id": 6,
          "titulo": "El Héroe de las Eras",
          "autor": "Brandon Sanderson",
          "descripcion": "Tercera parte de Mistborn, el épico final de la primera trilogía",
          "genero": "Fantasía",
          "portada": "heroe-eras.jpeg",
          "editorial": "Tor Books",
          "publicacion": 2008
        },
        {
          "id": 7,
          "titulo": "Juramentada",
          "autor": "Brandon Sanderson",
          "descripcion": "Tercera parte de El Archivo de las Tormentas, expandiendo los misterios de Roshar",
          "genero": "Fantasía épica",
          "portada": "juramentada.jpeg",
          "editorial": "Tor Books",
          "publicacion": 2017
        },
        {
          "id": 8,
          "titulo": "El Ritmo de la Guerra",
          "autor": "Brandon Sanderson",
          "descripcion": "Cuarta parte de El Archivo de las Tormentas, intensificando el conflicto en Roshar",
          "genero": "Fantasía épica",
          "portada": "ritmo-guerra.jpeg",
          "editorial": "Tor Books",
          "publicacion": 2020
        },
        {
          "id": 9,
          "titulo": "Aleación de Ley",
          "autor": "Brandon Sanderson",
          "descripcion": "Cuarta parte de Mistborn, comenzando una nueva era en Scadrial",
          "genero": "Fantasía",
          "portada": "aleacion-ley.jpeg",
          "editorial": "Tor Books",
          "publicacion": 2011
        },
        {
          "id": 10,
          "titulo": "Sombras de Identidad",
          "autor": "Brandon Sanderson",
          "descripcion": "Quinta parte de Mistborn, continuando las aventuras de Wax y Wayne",
          "genero": "Fantasía",
          "portada": "sombras-identidad.jpeg",
          "editorial": "Tor Books",
          "publicacion": 2015
        },
        {
          "id": 11,
          "titulo": "Arcanum Ilimitado",
          "autor": "Brandon Sanderson",
          "descripcion": "Colección de novelas cortas y historias del Cosmere",
          "genero": "Fantasía",
          "portada": "arcanum-ilimitado.jpeg",
          "editorial": "Tor Books",
          "publicacion": 2016
        },
        {
          "id": 12,
          "titulo": "Brazales de Duelo",
          "autor": "Brandon Sanderson",
          "descripcion": "Sexta parte de Mistborn, culminación de la historia de Wax y Wayne",
          "genero": "Fantasía",
          "portada": "brazales-duelo.jpeg",
          "editorial": "Tor Books",
          "publicacion": 2016
        }
      ]
    }
    
  }
//   mostrarsumario(id:Number){
//     this.activo = undefined;
//     this.activo=this.misLibros.getmostrarsumario(id);
// }
}
