import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtencionRoutingModule } from './atencion-routing.module';
import { AtencionComponent } from './component/atencion/atencion.component';
import { ListAtencionComponent } from './pages/list-atencion/list-atencion.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AtencionComponent,
    ListAtencionComponent
  ],
  imports: [
    CommonModule,
    AtencionRoutingModule,
    ReactiveFormsModule
  ]
})
export class AtencionModule { }
