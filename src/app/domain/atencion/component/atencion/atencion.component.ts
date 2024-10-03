import { Component, numberAttribute } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from 'node:stream';
import { PacienteRoutingModule } from '../../../paciente/paciente-routing.module';
import { CitaMedica } from '../../../MODELS/citaMedica.model';
import { CitaMedicaService } from '../../../services/cita-medica.service';
import { RecetaService } from '../../../services/receta.service';
import { Console, error, time } from 'node:console';
import { DetalleRecetaService } from '../../../services/detalle-receta.service';
import { NotificacionService } from '../../../services/notificacion.service';
import { concatMap, from } from 'rxjs';

@Component({
  selector: 'app-atencion',
  templateUrl: './atencion.component.html',
  styleUrl: './atencion.component.css',
})
export class AtencionComponent {
  pacienteSeleccionado: any = null;
  citaMedicaSeleccionada: any = null;
  CitaMedica = <CitaMedica[]>[];

  constructor(
    private fb: FormBuilder,
    private citaMedicaService: CitaMedicaService,
    private recetaServide: RecetaService,
    private detalleRecetaService: DetalleRecetaService,
    private notificacionService: NotificacionService
  ) {
    this.form = this.fb.group({
      medicamento: ['', Validators.required],
      dosis: ['', Validators.required],
      frecuencia: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      duracion: ['', Validators.required],
      instrucciones: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    console.log('Se ejecuta el Init');
    console.log(Date);
    this.getData();
  }

  

  getData() {
    this.citaMedicaService.getData().subscribe((data) => {
      this.CitaMedica = data;
      console.log(data);
    });
  }

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
    this.pacienteSeleccionado = this.CitaMedica[index].paciente;
    this.citaMedicaSeleccionada = this.CitaMedica[index];
    console.log(this.pacienteSeleccionado);
    console.log(this.citaMedicaSeleccionada);
  }

  //Modal
  form: FormGroup;
  accion: string = 'Agregar';
  id: number | undefined;
  inicializador: number = 0;

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
  horasDespiertoDosVeces = [6, 20];
  notificacione: any = [];
  receta: any = [];

  EnviarCambios(detalleReceta: any) {
    console.log('Vamos a ir Creando la receta');
    const receta: any = {
      FechaEmision: new Date(),
      Comentarios: detalleReceta[0].instrucciones,
    };

    this.recetaServide.addData(receta).subscribe({
      next: (newReceta) => {
        console.log('Nueva receta agregada: ', newReceta);

        for (let i = 0; i < detalleReceta.length; i++) {
          const Detalle: any = {
            Dosis: detalleReceta[i].dosis,
            Frecuencia:
              detalleReceta[i].frecuencia > 1
                ? `Cada ${detalleReceta[i].frecuencia} horas`
                : `Cada ${detalleReceta[i].frecuencia} hora`,
            Duracion:
              detalleReceta[i].duracion > 1
                ? `${detalleReceta[i].duracion} días`
                : `${detalleReceta[i].duracion} dia`,
            Instrucciones: detalleReceta[i].instrucciones,
            RecetaId: newReceta.recetaID,
            FechaInicio: new Date(detalleReceta[i].fechaInicio),
          };

          console.log(Detalle);

          this.detalleRecetaService.addData(Detalle).subscribe({
            next: (newDetalleReceta) => {
              console.log('Nueva Detalle Receta agregada: ', newDetalleReceta);

              let notificacionesPorDia = Math.floor(
                24 / detalleReceta[i].frecuencia
              );
              for (let dia = 0; dia < detalleReceta[i].duracion; dia++) {
                for (let n = 0; n < notificacionesPorDia; n++) {
                  let horaNotificacion: any;
                  if (notificacionesPorDia == 3) {
                    horaNotificacion =
                      this.horasDespierto[n % this.horasDespierto.length];
                  } else {
                    horaNotificacion =
                      this.horasDespiertoDosVeces[
                        n % this.horasDespiertoDosVeces.length
                      ];
                  }
                  let dstr: string = detalleReceta[i].fechaInicio;
                  let fechaDosis: Date = new Date(dstr + 'T00:00:00');
                  fechaDosis.setDate(fechaDosis.getDate() + dia);
                  fechaDosis.setHours(horaNotificacion, 0, 0, 0);
                  console.log('Hora: '+ fechaDosis);
                  const nuevaNotificacion: any = {
                    detalleRecetaID: newDetalleReceta.detalleRecetaID,
                    FechaDosis: new Date(fechaDosis).toISOString(),
                    enviado: false,
                    fechaEnviado: null,
                    telefono: detalleReceta[i].telefono,
                    mensaje:
                      'Hola ' +
                      detalleReceta[i].nombre +
                      ', es hora de tomar: ' +
                      detalleReceta[i].medicamento,
                  };
                  this.notificacionService.addData(nuevaNotificacion).subscribe({
                    next: (newNotification)=>{
                      console.log('Nueva Notificación agregada: ', newNotification);                      
                    },
                    error: (error)=>{
                      console.log('Error', error)
                    }
                  })
                }
              }
            },
            error: (error) => {
              console.log('Error', error);
            },
          });               
        }
        const citaMedicaUpdate = {
          citaMedicaID: this.citaMedicaSeleccionada.citaMedicaID,
          doctorID: this.citaMedicaSeleccionada.doctorID,
          pacienteID: this.citaMedicaSeleccionada.pacienteID,
          fecha: new Date(this.citaMedicaSeleccionada.fecha),
          estado: 'Atendido',
          recetaID: newReceta.recetaID
        };
        this.citaMedicaService.updateData(citaMedicaUpdate.citaMedicaID, citaMedicaUpdate).subscribe({
          next: (newCitaMedica)=>{
            console.log('Cita Médica actualizada');
          },
          error: (error)=>{
            console.log(error);
          }
        })
      },
      error: (error) => {
        console.log('Error al agregar la receta: ', error);
      },
    });
    console.log(receta);
    
  }
}
