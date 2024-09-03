import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacienteRoutingModule } from './paciente-routing.module';
import { PacienteComponent } from './component/paciente/paciente.component';
import { ListPacienteComponent } from './pages/list-paciente/list-paciente.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormPacienteComponent } from './component/form-paciente/form-paciente.component';


@NgModule({
  declarations: [
    PacienteComponent,
    ListPacienteComponent,
    FormPacienteComponent
  ],
  imports: [
    CommonModule,
    PacienteRoutingModule,
    ReactiveFormsModule
  ]
})
export class PacienteModule { }
