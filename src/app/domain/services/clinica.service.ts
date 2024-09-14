import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from '../enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ClinicaService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any>{
    return this.http.get<any>(`${enviroment.API_URL}/paciente`)
  }
  updateData(pacienteID: number, pacienteData: any): Observable<any>{
    const url = `${enviroment.API_URL}/paciente/${pacienteID}`;
    return this.http.put<any>(url, pacienteData);
  }
  addData(pacienteData: any){
    const url=`${enviroment.API_URL}/paciente`
    return this.http.post<any>(url, pacienteData);
  }
  deleteData(pacienteID: number){
    const url = `${enviroment.API_URL}/paciente/Delete/${pacienteID}`
    return this.http.delete<any>(url);
  }
}
