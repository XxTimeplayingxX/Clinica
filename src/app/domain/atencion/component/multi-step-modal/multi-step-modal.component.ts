import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validateHeaderName } from 'http';

@Component({
  selector: 'app-multi-step-modal',
  templateUrl: './multi-step-modal.component.html',
  styleUrl: './multi-step-modal.component.css'
})
export class MultiStepModalComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      medicamento: ['', Validators.required],
      dosis: ['', Validators.required],
      frecuencia: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      duracion: ['', Validators.required],
      instrucciones: ['', Validators.required]
    })
  }

  detalleReceta:any = [];

  GuradarCambios(){
    console.log("Este arreglo contiene: "+this.detalleReceta.length+" elementos");
    const detalleReceta: any={
      medicamento: this.form.get('medicamento')?.value,
      dosis: this.form.get('dosis')?.value,
      frecuencia: this.form.get('frecuencia')?.value,
      fechaInicio: this.form.get('fechaInicio')?.value,
      duracion: this.form.get('duracion')?.value,
      instrucciones: this.form.get('instrucciones')?.value
    }
    this.detalleReceta.push(detalleReceta)
    console.log("Este arreglo contiene: "+this.detalleReceta.length+" elementos");
    console.log(detalleReceta)
  }
}
