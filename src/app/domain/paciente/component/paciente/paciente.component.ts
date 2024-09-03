import { Component, OnInit } from '@angular/core';
import { paciente } from '../../../MODELS/paciente.models';
import {
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrl: './paciente.component.css',
})
export class PacienteComponent implements OnInit {
  form: FormGroup;
  accion = 'agregar nuevo';
  id: number | undefined;

  constructor(private fb: FormBuilder, private fbuilder: FormBuilder) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      cedula: ['', Validators.required],
      telefono: ['', Validators.required],
      correo: ['', Validators.required],
      genero: ['', Validators.required],
      historialMedico: ['', Validators.required],
    });
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

  doctor = [
    {
      doctorID: 2,
      nombre: 'Jaime',
      apellido: 'Ortiz',
      cedula: '0999999999',
      telefono: '0999999999',
      correo: 'jaimeOrtiz@gmail.com',
      activo: true,
      especialidad: 'Médico general',
      cargo: 'Supervisor',
    }
  ];

  GuardarCambios() {
    console.log(this.id);
    const paciente: any = {
      nombre: this.form.get('nombre')?.value,
      apellido: this.form.get('apellido')?.value,
      cedula: this.form.get('cedula')?.value,
      telefono: this.form.get('telefono')?.value,
      correo: this.form.get('correo')?.value,
      genero: this.form.get('genero')?.value,
      historialMedico: this.form.get('historialMedico')?.value,
    };

    if (this.id == undefined) {
      //Agregamos un nuevo Paciente
      this.pacientes.push(paciente);
      console.log(paciente);
      this.form.reset();
    } else {
      this.pacientes[this.id - 1] = paciente;
      console.log(this.pacientes);
      console.log(
        'ID:' +
          this.pacientes[this.id] +
          ' Paciente: ' +
          this.pacientes[paciente.pacienteID]
      );
      this.id = undefined;
      this.accion = 'agregar';
      this.form.reset();
    }
  }

  EliminarPaciente(index: number) {
    console.log(index);
    this.pacientes.splice(index, 1);
  }

  EditarPaciente(pacientes: any) {
    this.accion = 'editar';
    this.id = pacientes.pacienteID;
    console.log(this.id);

    this.form.patchValue({
      nombre: pacientes.nombre,
      apellido: pacientes.apellido,
      cedula: pacientes.cedula,
      telefono: pacientes.telefono,
      correo: pacientes.correo,
      genero: pacientes.genero,
      historialMedico: pacientes.historialMedico,
    });
    console.log(pacientes);
  }
}
