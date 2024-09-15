import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from '../enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class CitaMedicaService {

  constructor(private http: HttpClient) { }

  getData():Observable<any>{
    return this.http.get<any>(`${enviroment.API_URL}/CitaMedica`)
  }
  addData(citaMedicaData: any):Observable<any>{
    const url = `${enviroment.API_URL}/CitaMedica`;
    return this.http.post<any>(url, citaMedicaData);
  }
}
