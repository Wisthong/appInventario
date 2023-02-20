import { ResponseAuth, ResponseData } from './../model/auth';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
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
    return this.http.get<ResponseData>(this.apiUrl + '/devices/' + id).pipe(
      map(({ data }) => {
        return data;
      })
    );
  }

  registrarDevice(device: Device): Observable<string> {
    const body = {
      antivirus: device.antivirus,
      descripcion: device.descripcion,
      estado: device.estado,
      fecha_baja: device.fecha_baja,
      fecha_ingreso: device.fecha_ingreso,
      hostname: device.hostname,
      ip: device.ip,
      licencias: device.licencias,
      precio: device.precio,
      procesador: device.procesador,
      ram: device.ram,
      so: device.so,
      device: device.device,
    };
    return this.http.post<ResponseAuth>(this.apiUrl + '/devices', body).pipe(
      tap(({ token }) => {
        localStorage.setItem('token', token);
      }),
      map(({ message }) => {
        return message;
      })
    );
  }

  eliminarDevice(id: string): Observable<string> {
    return this.http.delete<ResponseAuth>(this.apiUrl + '/devices/' + id).pipe(
      map(({ message }) => {
        return message;
      })
    );
  }
}
