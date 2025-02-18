import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss'],
  standalone:true
})
export class PosterComponent  {
  
  @Input() peliculas: any[] = [];

  slideOpts = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: 10
  };

  constructor() { }

  ngOnInit() {}

}
