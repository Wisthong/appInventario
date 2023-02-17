import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Device, ResponseTrue } from '../model/auth';

@Injectable({
  providedIn: 'root',
})
export class HostnameService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private readonly http: HttpClient) {}

  obtenerLista(): Observable<ResponseTrue> {
    return this.http.get<ResponseTrue>(this.apiUrl + '/devices');
  }

  obtenerUno(id: string): Observable<Device> {
    return this.http.get<Device>(this.apiUrl + '/devices' + id);
  }
}
