import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slidebackdrop',
  templateUrl: './slidebackdrop.component.html',
  styleUrls: ['./slidebackdrop.component.scss'],
  standalone:true
})
export class SlidebackdropComponent {

  @Input() peliculas: any[] = [];  // Array que recibirá las películas del componente padre

  slideOpts = {
    slidesPerView: 1.1,
    freeMode: true,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 2000
    },
  

  constructor() { 
    
  },

  ngOnInit() {
    
  }

  }}
