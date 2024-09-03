import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtencionRoutingModule } from './atencion-routing.module';
import { AtencionComponent } from './component/atencion/atencion.component';
import { ListAtencionComponent } from './pages/list-atencion/list-atencion.component';


@NgModule({
  declarations: [
    AtencionComponent,
    ListAtencionComponent
  ],
  imports: [
    CommonModule,
    AtencionRoutingModule
  ]
})
export class AtencionModule { }
