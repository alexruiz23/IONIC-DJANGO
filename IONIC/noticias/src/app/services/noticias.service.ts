import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RootObject } from '../interfaces/INoticias';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService  {

  constructor(private http: HttpClient) { }

  getNoticias(): Observable<RootObject>  {
    return this.http.get<RootObject>("https://newsapi.org/v2/top-headlines?apiKey=026d825ed05f40f68c723cfff5cb2972&country=us");
  }
  getTopHeadLines(){
    return this.http.get<RootObject>("https://newsapi.org/v2/top-headlines?country=us&apiKey=026d825ed05f40f68c723cfff5cb2972"
    );
  }
  getTopHeadLinesCategory(){
    return this.http.get<RootObject>("/top-headlines?country=us&+"+category=+"cat=+026d825ed05f40f68c723cfff5cb2972"+environment+"026d825ed05f40f68c723cfff5cb2972");
  };
}
