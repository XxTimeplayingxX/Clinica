import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor(private routerTo:Router){}


  EnviarAListaPaciente(){
    this.routerTo.navigateByUrl('/paciente');
  }
  EnviarAAtencion(){
    this.routerTo.navigateByUrl('/lista-paciente');
  }
}
