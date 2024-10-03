import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from '../enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class NotificacionService {

  constructor(private http: HttpClient) { }

  addData(notificacion: any): Observable<any>{
    const url = `${enviroment.API_URL}/notificacion`;
    return this.http.post<any>(url, notificacion);
  }
}
