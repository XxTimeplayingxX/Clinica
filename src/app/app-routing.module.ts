import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPacienteComponent } from './domain/paciente/pages/list-paciente/list-paciente.component';

const routes: Routes = [
  {
    path: '',
    children:[
      {
        path: 'paciente',
        loadChildren:()=>import('./domain/paciente/paciente.module').then(p=>p.PacienteModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
