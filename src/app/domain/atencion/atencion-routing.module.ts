import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAtencionComponent } from './pages/list-atencion/list-atencion.component';

const routes: Routes = [
  {
    path: '',
    component: ListAtencionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtencionRoutingModule { }
