import { Component, OnInit } from '@angular/core';
import { paciente } from '../../../MODELS/paciente.models';
import {
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { ClinicaService } from '../../../services/clinica.service';
import { DoctorService } from '../../../services/doctor.service';
import { Doctor } from '../../../MODELS/doctor.model';
import { CitaMedicaService } from '../../../services/cita-medica.service';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrl: './paciente.component.css',
})
export class PacienteComponent implements OnInit {
  form: FormGroup;
  accion = 'agregar nuevo';
  id: number | undefined;
  pacienteSeleccionado: any = null;

  constructor(private fb: FormBuilder, 
    private fbuilder: FormBuilder, 
    private pacienteService:ClinicaService,
    private doctorService:DoctorService, 
    private citaMedicaService: CitaMedicaService) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      cedula: ['', Validators.required],
      telefono: ['', Validators.required],
      correo: ['', Validators.required],
      historialMedico: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    console.log('Iniciando el final de la tesis');
    this.getData();
    this.getDataDoctor();
  }
  paciente = <paciente[]>[];
  doctor = <Doctor[]>[];

  //Métodos de la API
  getData(){
    this.pacienteService.getData().subscribe((data)=>{
      this.paciente = data;
      console.log(this.paciente);
    })
  }
  getDataDoctor(){
    this.doctorService.getData().subscribe((data)=>{
      this.doctor = data;
    })
  }



  // doctor = [
  //   {
  //     doctorID: 2,
  //     nombre: 'Jaime',
  //     apellido: 'Ortiz',
  //     cedula: '0999999999',
  //     telefono: '0999999999',
  //     correo: 'jaimeOrtiz@gmail.com',
  //     activo: true,
  //     especialidad: 'Médico general',
  //     cargo: 'Supervisor',
  //   }
  // ];

  ObtenerObjeto(objetoSeleccionado: any){
    this.pacienteSeleccionado = objetoSeleccionado;
    console.log(this.pacienteSeleccionado);
  }

  GuardarCambios() {
    console.log(this.id);
    console.log(this.pacienteSeleccionado);
    const paciente: any = {
      //pacienteID: this.pacienteSeleccionado.pacienteID,
      nombre: this.form.get('nombre')?.value,
      apellido: this.form.get('apellido')?.value,
      cedula: this.form.get('cedula')?.value,
      telefono: this.form.get('telefono')?.value,
      correo: this.form.get('correo')?.value,
      historialMedico: this.form.get('historialMedico')?.value,
    };

    if (this.id == undefined) {
      //Agregamos un nuevo Paciente
      this.pacienteService.addData(paciente)
      .subscribe((newPaciente)=>{
        console.log("Nuevo paciente agregado: ",newPaciente);
        alert("Paciente agregado correctamente");
        this.getData();
      })
      console.log(paciente);
      this.form.reset();
    } else {
      this.pacienteService.updateData(this.pacienteSeleccionado.pacienteID, paciente)
      .subscribe(()=>{
        alert("Cambios aplicados: ");
        this.getData();
      })
      console.log(this.paciente);
      this.id = undefined;
      this.accion = 'agregar';
      this.form.reset();
    }
  }

  EliminarPaciente(index: paciente) {
    console.log(index.pacienteID);
    this.pacienteService.deleteData(index.pacienteID)
    .subscribe(()=>{
      alert("Se ha eliminado un registro")
      this.getData();
    })
    //this.pacientes.splice(index, 1);
  }

  EditarPaciente(pacientes: any) {
    console.log(pacientes);
    this.pacienteSeleccionado = pacientes;
    console.log(this.pacienteSeleccionado);
    this.accion = 'editar';
    this.id = pacientes.pacienteID;
    console.log(this.id);

    this.form.patchValue({
      nombre: pacientes.nombre,
      apellido: pacientes.apellido,
      cedula: pacientes.cedula,
      telefono: pacientes.telefono,
      correo: pacientes.correo,
      historialMedico: pacientes.historialMedico,
    });
    console.log(pacientes);
  }
  CloseModal(){
    console.log("Se cerró el modal");
    this.accion = "agregar nuevo";
    this.form.reset();
  }
  //DoctorModal
  ElegirDoctor(value: Doctor){
    const citaMedica: any={
      citaMedicaID: 0,
      doctorID: value.doctorID,
      pacienteID: this.pacienteSeleccionado.pacienteID,
      estado: "en espera",
      recetaID: null
    };
    this.citaMedicaService.addData(citaMedica)
    .subscribe(()=>{
      alert("Se ha agregado una cita Médica");
    })
    console.log(citaMedica);
    console.log(value.doctorID);
  }
}
