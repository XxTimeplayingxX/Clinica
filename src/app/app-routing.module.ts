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
  },
  {
    path: '',
    children:[
      {
        path: 'lista-paciente',
        loadChildren:()=>import('./domain/atencion/atencion.module').then(l=>l.AtencionModule)
      }
    ]
  },
  {
    path: '',
    children:[
      {
        path: 'login',
        loadChildren:()=> import('./domain/login/login.module').then(l=>l.LoginModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
