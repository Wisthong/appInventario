import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { AuthService } from 'src/app/modules/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  hide = true;

  private readonly fb = inject(FormBuilder);
  private readonly authSvc = inject(AuthService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private id!: string | null;
  ruta!: string;

  roles = ['user', 'admin', 'master'];

  loginForm = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    name: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    role: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  ngOnInit(): void {
    this.ruta = this.route.snapshot.url[0].path.toString();
    this.id = this.route.snapshot.paramMap.get('id');
    this.authSvc.getUser(this.id!).subscribe(
      (resOk) => {
        this.loginForm.patchValue({
          email: resOk.email,
          name: resOk.name,
          lastname: resOk.lastname,
          password: resOk.password,
          role: resOk.role,
        });
      },
      (resFail) => {
        console.log(resFail);
      }
    );
  }

  onRegister() {
    if (this.loginForm.valid) {
      const body = this.loginForm.getRawValue();

      this.authSvc.updateUser(body, this.id!).subscribe(
        (resOk) => {
          Swal.fire({
            title: 'Exito',
            html: resOk,
            icon: 'success',
            showConfirmButton: false,
            timer: 5000,
          });
          this.router.navigate(['/master/gestion']);
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

      // this.authSvc.register(body).subscribe(
      //   (resOk) => {
      //     Swal.fire({
      //       title: 'Registro exitoso',
      //       html: resOk,
      //       icon: 'success',
      //       showConfirmButton: false,
      //       timer: 3000,
      //     });
      //     this.router.navigate(['/master']);
      //   },
      //   ({ error }: HttpErrorResponse) => {
      //     Swal.fire({
      //       title: 'Error de registro',
      //       html: error.message,
      //       icon: 'error',
      //       showConfirmButton: false,
      //       timer: 5000,
      //     });
      //   }
      // );
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
