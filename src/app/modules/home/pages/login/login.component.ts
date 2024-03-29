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
    if (this.authSvc.verifyToken()) {
      this.router.navigate(['/admin']);
    }
  }

  onLogin() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.getRawValue();
      this.authSvc.login(email, password).subscribe(
        (resOk) => {
          Swal.fire('Inicio sesión', resOk, 'success');
          this.router.navigate(['/admin']);
        },
        ({ error }: HttpErrorResponse) => {
          Swal.fire('Inicio sesión', error.message, 'error');
        }
      );
    } else {
      Swal.fire('Advertencia', 'Faltan campos por llenar', 'warning');
    }
  }
}
