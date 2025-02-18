import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, IonicSlides } from '@ionic/angular';
import { SlidebackdropComponent } from './slidebackdrop/slidebackdrop.component';
import { PosterComponent } from './poster/poster.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,IonicModule,PosterComponent,SlidebackdropComponent
  ]
})
export class ComponentesModule { }
