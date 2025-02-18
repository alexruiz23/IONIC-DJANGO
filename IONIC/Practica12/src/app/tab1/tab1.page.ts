import { Component, NgModule, OnInit } from '@angular/core';
import { ServicioService } from '../servicios/servicio.service';
import { Result } from '../interfaces/ipeliculas';
import { SlidebackdropComponent } from '../componentes/slidebackdrop/slidebackdrop.component';
import { PosterComponent } from '../componentes/poster/poster.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
  standalone:false,
  
})

export class Tab1Page implements OnInit {

  lPeliculas: Result[]=[];
arrayDePeliculas: any;
  constructor(private peliculas:ServicioService) {    
  }

 ngOnInit(): void {
   this.peliculas.getPeliculas().subscribe(
    datos=>{datos.results.forEach(a=>{this.lPeliculas.push(a)})}
   )

}}
