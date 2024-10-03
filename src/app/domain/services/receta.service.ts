import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from '../enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {

  constructor(private http: HttpClient) { }

  addData(receta: any):Observable<any>{
    const url = `${enviroment.API_URL}/Receta`;
    return this.http.post<any>(url, receta);
  }
}
