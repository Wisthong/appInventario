import { ResponseAuth, ResponseData } from './../model/auth';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Device, ResponseTrue } from '../model/auth';

@Injectable({
  providedIn: 'root',
})
export class HostnameService {
  private readonly apiUrl = environment.apiUrl;

  private readonly http = inject(HttpClient);

  obtenerLista(): Observable<ResponseTrue> {
    return this.http.get<ResponseTrue>(this.apiUrl + '/devices');
  }

  obtenerUno(id: string): Observable<Device> {
    return this.http.get<ResponseTrue>(this.apiUrl + '/devices/' + id).pipe(
      map(({ data }) => {
        return data[0];
      })
    );
  }

  registrarDevice(device: Device): Observable<string> {
    const body = device;
    return this.http.post<ResponseAuth>(this.apiUrl + '/devices', body).pipe(
      tap(({ token }) => {
        localStorage.setItem('token', token);
      }),
      map(({ message }) => {
        return message;
      })
    );
  }

  actualizarDevice(device: Device, id: string): Observable<string> {
    const body = device;
    return this.http
      .put<ResponseAuth>(this.apiUrl + '/devices/' + id, body)
      .pipe(
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
      tap(({ token }) => {
        localStorage.setItem('token', token);
      }),
      map(({ message }) => {
        return message;
      })
    );
  }
}
