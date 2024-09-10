import { Component, numberAttribute } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from 'node:stream';
import { PacienteRoutingModule } from '../../../paciente/paciente-routing.module';

@Component({
  selector: 'app-atencion',
  templateUrl: './atencion.component.html',
  styleUrl: './atencion.component.css',
})
export class AtencionComponent {
  pacienteSeleccionado: any = null;

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

  ObtenerObjeto(index: number) {
    this.pacienteSeleccionado = this.pacientes[index];
    console.log(this.pacienteSeleccionado);
  }

  //Modal
  form: FormGroup;
  accion: string = 'Agregar';
  id: number | undefined;
  inicializador: number = 0;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      medicamento: ['', Validators.required],
      dosis: ['', Validators.required],
      frecuencia: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      duracion: ['', Validators.required],
      instrucciones: ['', Validators.required],
    });
  }
  detalleReceta: any = [];

  GuardarCambios() {
    const detalleReceta: any = {
      medicamento: this.form.get('medicamento')?.value,
      dosis: this.form.get('dosis')?.value,
      frecuencia: this.form.get('frecuencia')?.value,
      fechaInicio: this.form.get('fechaInicio')?.value,
      duracion: this.form.get('duracion')?.value,
      instrucciones: this.form.get('instrucciones')?.value,
      telefono: this.pacienteSeleccionado.telefono,
      nombre: this.pacienteSeleccionado.nombre,
      apellido: this.pacienteSeleccionado.apellido,
      id: this.pacienteSeleccionado.pacienteID,
    };
    if (
      this.detalleReceta.length > 0 &&
      this.detalleReceta[0].id != detalleReceta.id
    ) {
      alert(
        'Paciente Incorrecto, su paciente es: ' +
          this.detalleReceta[0].nombre +
          ' ' +
          this.detalleReceta[0].apellido
      );
      console.log(
        'Primer usuario: ' +
          this.detalleReceta[0].id +
          ' Segundo usuario: ' +
          detalleReceta.id
      );
      console.log(this.detalleReceta);
    } else if (this.id == undefined) {
      //Agregamos una nuevo paciente
      this.detalleReceta.push(detalleReceta);
      this.form.reset();
      console.log(this.detalleReceta);
    } else {
      //Editamos paciente
      this.detalleReceta[this.id] = detalleReceta;
      console.log(this.detalleReceta);
      this.id = undefined;
      this.accion = 'Agregar';
      this.form.reset();
    }
  }

  EliminarDetalle(index: number) {
    this.accion = 'Editar';
    console.log(index);
    this.detalleReceta.splice(index, 1);
  }

  EditarTarjeta(detalleReceta: any, index: number) {
    this.accion = 'Editar';
    console.log(index);
    console.log(detalleReceta);
    this.id = index;

    this.form.patchValue({
      medicamento: detalleReceta.medicamento,
      dosis: detalleReceta.dosis,
      frecuencia: detalleReceta.frecuencia,
      fechaInicio: detalleReceta.fechaInicio,
      duracion: detalleReceta.duracion,
      instrucciones: detalleReceta.instrucciones,
    });
  }

  CambiarNombre() {
    this.accion = 'Agregar';
  }

  horasDespierto = [6, 12, 20];
  notificacione: any = [];

  EnviarCambios(detalleReceta: any) {
    console.log("Inicio del método");
    console.log(detalleReceta);
    console.log(detalleReceta.length);
    const MILLISECONDS_PER_HOUR = 3600000;

    // const fechaInicio = new Date(detalleReceta.fechaInicio);
    // console.log("Fecha de Inicio: "+fechaInicio);
    
    for(let i = 0; i < detalleReceta.length; i++){
      console.log("Estamos en el elemento "+i+" del arreglo");
      console.log("Detalle Frecuencia: " + detalleReceta[i].frecuencia)
      console.log("Notificaciones: "+24/detalleReceta[i].frecuencia)
      let notificacionesPorDia = Math.floor(24/detalleReceta[i].frecuencia);
      console.log("Notificaciones por día: "+notificacionesPorDia);
      for(let dia = 0; dia < detalleReceta[i].duracion; dia++){
        console.log("La duración del tratamiento es de: "+detalleReceta[i].duracion+" días");
        for(let n = 0; n< notificacionesPorDia; n++){
          let horaNotificacion = this.horasDespierto[n % this.horasDespierto.length];
          console.log("Hora Notificación es: "+horaNotificacion);
          console.log("Fecha de Inicio: "+detalleReceta[i].fechaInicio);
          console.log(typeof(detalleReceta[i].fechaInicio));
          let dstr: string = detalleReceta[i].fechaInicio;
          let fechaDosis: Date = new Date(dstr+ 'T00:00:00');
          console.log("Fecha dosis: "+fechaDosis);
          fechaDosis.setDate(fechaDosis.getDate()+dia);
          console.log(fechaDosis.setDate);
          fechaDosis.setHours(horaNotificacion, 0, 0, 0);
          const nuevaNotificacion: any= {
            IdDetalleReceta: detalleReceta[i].id,
            FechaDosis: fechaDosis,
            Enviado: false,
            fechaEnviado: null,
            mensaje: "Hola "+detalleReceta[i].nombre + ", es hora de tomar: "+detalleReceta[i].medicamento
          }

          console.log(nuevaNotificacion);
          this.notificacione.push(nuevaNotificacion);
        }
      }
    }
    console.log(this.notificacione.length);


















    // for (let i = 0; i < detalleReceta.length; i++) {
    //   const FechaInico = new Date(detalleReceta[i].fechaInicio);

    //   console.log(detalleReceta[i].fechaInicio);

    //   console.log(FechaInico);

    //   let cantidadDeRegistros =
    //     (24 / this.detalleReceta[i].frecuencia) *
    //     this.detalleReceta[i].duracion;

    //   console.log(cantidadDeRegistros);
    //   for (let n = 0; n < cantidadDeRegistros; n++) {
    //     const fechaDosis = new Date(FechaInico.getTime()+(i*detalleReceta[i].frecuencia*MILLISECONDS_PER_HOUR));
        
    //     console.log(fechaDosis);

    //     const nuevaNotificacion: any={
    //       IdDetalleReceta: detalleReceta[i].id,
    //       FechaDosis: fechaDosis,
    //       Enviado: false,
    //       fechaEnviado: null,
    //       mensaje: "Hola "+detalleReceta[i].nombre + ", es hora de tomar: "+detalleReceta[i].medicamento
    //     }

    //     console.log(nuevaNotificacion);
    //   }
    // }

    // console.log("Primera prueba");
    // console.log(detalleReceta);
    // this.pacientes[this.pacienteSeleccionado.pacienteID - 1].activo = false;
    // console.log(this.pacientes[this.pacienteSeleccionado.pacienteID]);
  }
}
