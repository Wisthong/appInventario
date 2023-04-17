import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import Swal from 'sweetalert2';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  private readonly authSvc = inject(AuthService);
  private readonly router = inject(Router);
  //TODO: Un guard permite bloquear vista y validar cosas, yo lo utilizo para bloquear, por eso hago injeccion de dependencia al authSvc, que es el que tiene el validarToken y cuando la respuesta es negativa no permita el acceso al Dashboard, tienes que ir al approuting y alli sale el canActivade en el path de dashboard
  canActivate(): Observable<boolean> | boolean {
    return this.authSvc.validarToken().pipe(
      tap((valid) => {
        if (!valid) {
          this.router.navigate(['/home']);
        }
      })
    );
  }

  canMatchFn(): Observable<boolean> | boolean {
    return this.authSvc.validarToken().pipe(
      tap((valid) => {
        if (!valid) {
          Swal.fire({
            title: 'Advertencia',
            html: 'No tienes permisos para acceder a este recurso',
            icon: 'warning',
            timer: 5000,
          });
          this.router.navigate(['/home']);
        }
      })
    );
  }
}
