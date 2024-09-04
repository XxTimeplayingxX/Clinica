import { Component } from '@angular/core';

@Component({
  selector: 'app-atencion',
  templateUrl: './atencion.component.html',
  styleUrl: './atencion.component.css'
})
export class AtencionComponent {
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
      historialMedico: '0912345678',
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
      historialMedico: '0923456789',
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
      historialMedico: '0934567890',
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
      historialMedico: '0945678901',
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
      historialMedico: '0956789012',
    },
  ];
}
