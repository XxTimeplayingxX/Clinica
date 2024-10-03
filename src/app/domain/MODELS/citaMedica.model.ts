import { Doctor } from "./doctor.model"
import { paciente } from "./paciente.models"

export interface CitaMedica {
    citaMedicaID: number
    doctorID: number
    doctor: Doctor
    pacienteID: number
    paciente: paciente
    estado: string
    recetaID: number
    receta: any
  }