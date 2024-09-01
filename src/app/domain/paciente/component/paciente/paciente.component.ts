import { Component, OnInit } from '@angular/core';
import { paciente } from '../../../MODELS/paciente.models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrl: './paciente.component.css'
})
export class PacienteComponent implements OnInit{
  form: FormGroup;

  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      cedula: ['', Validators.required],
      telefono: ['', Validators.required],
      correo: ['', Validators.required],
      genero: ['', Validators.required],
      historialMedico: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    console.log('Iniciando el final de la tesis');
  }
  paciente = <paciente[]>[];

  pacientes = [
    {
      pacienteID: 1,
      nombre: 'Juan',
      apellido: 'Pérez',
      cedula: '0912345678',
      telefono: '0991234567',
      correo: 'juan.perez@example.com',
      genero: 'Masculino',
      activo: true,
      historialMedico: '0912345678'
    },
    {
      pacienteID: 2,
      nombre: 'María',
      apellido: 'González',
      cedula: '0923456789',
      telefono: '0992345678',
      correo: 'maria.gonzalez@example.com',
      genero: 'Femenino',
      activo: false,
      historialMedico: '0923456789'
    },
    {
      pacienteID: 3,
      nombre: 'Carlos',
      apellido: 'Ramírez',
      cedula: '0934567890',
      telefono: '0993456789',
      correo: 'carlos.ramirez@example.com',
      genero: 'Masculino',
      activo: true,
      historialMedico: '0934567890'
    },
    {
      pacienteID: 4,
      nombre: 'Ana',
      apellido: 'López',
      cedula: '0945678901',
      telefono: '0994567890',
      correo: 'ana.lopez@example.com',
      genero: 'Femenino',
      activo: true,
      historialMedico: '0945678901'
    },
    {
      pacienteID: 5,
      nombre: 'Luis',
      apellido: 'Martínez',
      cedula: '0956789012',
      telefono: '0995678901',
      correo: 'luis.martinez@example.com',
      genero: 'Masculino',
      activo: false,
      historialMedico: '0956789012'
    }
  ];

  CrearPaciente(){
    console.log(this.form);
    const paciente : any={
      nombre: this.form.get('nombre')?.value,
      apellido: this.form.get('apellido')?.value,
      cedula: this.form.get('cedula')?.value,
      telefono: this.form.get('telefono')?.value,
      correo: this.form.get('correo')?.value,
      genero: this.form.get('genero')?.value,
      historialMedico: this.form.get('historialMedico')?.value,
    }
    this.pacientes.push(paciente);
    console.log(paciente);
    this.form.reset();
  }
  
}
