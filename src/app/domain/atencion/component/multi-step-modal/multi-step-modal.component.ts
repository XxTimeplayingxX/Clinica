import { Component, Input, input, SimpleChanges, ɵrestoreComponentResolutionQueue } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-multi-step-modal',
  templateUrl: './multi-step-modal.component.html',
  styleUrl: './multi-step-modal.component.css',
})
export class MultiStepModalComponent {
  

  form: FormGroup;
  accion: string = 'Agregar';
  id: number | undefined;

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
    console.log(
      'Este arreglo contiene: ' + this.detalleReceta.length + ' elementos'
    );
    const detalleReceta: any = {
      medicamento: this.form.get('medicamento')?.value,
      dosis: this.form.get('dosis')?.value,
      frecuencia: this.form.get('frecuencia')?.value,
      fechaInicio: this.form.get('fechaInicio')?.value,
      duracion: this.form.get('duracion')?.value,
      instrucciones: this.form.get('instrucciones')?.value,
    };
    if (this.id == undefined) {
      //Agregamos una nuevo paciente
      this.detalleReceta.push(detalleReceta);
      console.log(
        'Este arreglo contiene: ' + this.detalleReceta.length + ' elementos'
      );
      this.form.reset();
      console.log(this.detalleReceta);
    } else {
      //Editamos paciente
      this.detalleReceta[this.id]=detalleReceta;
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

  EnviarCambios(detalleReceta:any){
    console.log("Primera prueba");
    console.log(detalleReceta);
  }
}
