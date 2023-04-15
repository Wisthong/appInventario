import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  hide = true;

  fb = inject(FormBuilder);
  authSvc = inject(AuthService);
  router = inject(Router);

  loginForm = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    name: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(5)]],
  });

  ngOnInit(): void {
    //   this.authSvc.validarToken().subscribe((valid) => {
    //     if (valid) {
    //       this.router.navigate(['/admin']);
    //     }
    //   });
  }

  onRegister() {
    if (this.loginForm.valid) {
      const body = this.loginForm.getRawValue();
      // console.log(body);

      this.authSvc.register(body).subscribe(
        (resOk) => {
          Swal.fire({
            title: 'Registro exitoso',
            html: resOk,
            icon: 'success',
            showConfirmButton: false,
            timer: 3000,
          });
          this.router.navigate(['/master']);
        },
        ({ error }: HttpErrorResponse) => {
          Swal.fire({
            title: 'Error de registro',
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
