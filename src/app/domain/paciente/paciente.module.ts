import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacienteRoutingModule } from './paciente-routing.module';
import { PacienteComponent } from './component/paciente/paciente.component';
import { ListPacienteComponent } from './pages/list-paciente/list-paciente.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PacienteComponent,
    ListPacienteComponent
  ],
  imports: [
    CommonModule,
    PacienteRoutingModule,
    ReactiveFormsModule
  ]
})
export class PacienteModule { }
