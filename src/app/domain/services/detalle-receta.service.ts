import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from '../enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class DetalleRecetaService {

  constructor(private http: HttpClient) { }

  addData(detalleReceta: any): Observable<any>{
    const url = `${enviroment.API_URL}/DetalleReceta`;
    return this.http.post<any>(url, detalleReceta);
  }
}
