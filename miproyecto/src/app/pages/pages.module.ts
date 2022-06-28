import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { EventosComponent } from './eventos/eventos.component';
import { ClasesComponent } from './clases/clases.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    InicioComponent,
    ContactoComponent,
    EventosComponent,
    ClasesComponent
  ],
  exports:[
    ClasesComponent,
    ContactoComponent,
    EventosComponent,
    InicioComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PagesModule { }
