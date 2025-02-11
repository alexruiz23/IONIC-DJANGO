import { HttpBackend, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../services/noticias.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page implements OnInit {
  categorias: string[] = ['Business', 'Entertaiment', 'General', 'Health', 'Science', 'Sport', 'Technology'];
  noticias: [] = [];

  constructor(private noticiasService: NoticiasService) {}

  ngOnInit() {
    this.cargarNoticias(this.categorias[0]);
  }

  noticiasporCategoria(event) {
    this.noticias = [];
    this.cargarNoticias(event.detail.value);
  }

  cargarNoticias(cat:string) {
    this.noticiasService.getTopHeadLinesCategory(cat).subscribe(respuesta => {
      this.noticias.push(...respuesta.articles);
    });
  }
}