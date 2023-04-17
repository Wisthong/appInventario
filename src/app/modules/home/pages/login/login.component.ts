import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  hide = true;

  fb = inject(FormBuilder);
  authSvc = inject(AuthService);
  router = inject(Router);

  loginForm = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5)]],
  });

  ngOnInit(): void {
    // this.authSvc.validarToken().subscribe((valid) => {
    //   if (valid) {
    //     this.router.navigate(['/admin']);
    //   }
    // });
  }

  onLogin() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.getRawValue();
      this.authSvc.login(email, password).subscribe(
        (resOk) => {
          console.log(resOk);

          if (resOk === 'admin') {
            Swal.fire({
              title: 'Inicio sesión',
              html: 'Sesión exitosa',
              icon: 'success',
              showConfirmButton: false,
              timer: 3000,
            });
            this.router.navigate(['/admin']);
          }
          if (resOk === 'master') {
            Swal.fire({
              title: 'Inicio sesión',
              html: 'Sesión exitosa',
              icon: 'success',
              showConfirmButton: false,
              timer: 3000,
            });
            this.router.navigate(['/master/gestion']);
          }
        },
        ({ error }: HttpErrorResponse) => {
          Swal.fire({
            title: 'Inicio sesión',
            html: error.message,
            icon: 'error',
            showConfirmButton: false,
            timer: 5000,
          });
        }
      );
    } else {
      Swal.fire({
        title: 'Advertencia',
        html: 'Faltan campos por llenar',
        icon: 'warning',
        showConfirmButton: false,
        timer: 5000,
      });
    }
  }
}
