import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacienteComponent } from './component/paciente/paciente.component';
import { ListPacienteComponent } from './pages/list-paciente/list-paciente.component';

const routes: Routes = [
  {
    path: '',
    component: ListPacienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacienteRoutingModule { }
