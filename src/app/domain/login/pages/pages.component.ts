import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.css'
})
export class PagesComponent {
  constructor(
    private fb: FormBuilder,
    private routerTo: Router
  ){
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      contrasena: ['', Validators.required]
    });
  }

  form: FormGroup;

  Ingresar(){
    let usuario = this.form.get('usuario')?.value;
    let contrasena = this.form.get('contrasena')?.value;
    if(usuario === 'admin' && contrasena === 'admin'){
      this.IrAPaciente()
    }
    else{
      alert("ERROR, Credenciales incorrectas")
    }
  }
  IrAPaciente(){
    this.routerTo.navigateByUrl('/paciente');
  }

}
