import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { RootObject } from '../interfaces/ipeliculas';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http: HttpClient) { }

  getPeliculas(): Observable<RootObject>  {
    return this.http.get<RootObject>("https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2010-09-15&primary_release_date.lte=2024-10-22&api_key=d681e5dd3c241c54f3145acfa6f101dc&include_image_language=es&include_adult=false&language=es-ES&with_original_language=es");
  }
 
  };


