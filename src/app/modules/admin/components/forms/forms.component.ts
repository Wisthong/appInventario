import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Device } from 'src/app/modules/model/auth';
import { AuthService } from 'src/app/modules/services/auth.service';
import { HostnameService } from 'src/app/modules/services/hostname.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent implements OnInit {
  estados = ['activo', 'inactivo', 'mantenimiento'];
  deviceForm = this.fb.nonNullable.group({
    device: ['', [Validators.required, Validators.minLength(5)]],
    estado: ['', [Validators.required]],
    hostname: ['', [Validators.required, Validators.minLength(5)]],
    so: ['', [Validators.required, Validators.minLength(5)]],
    ip: ['', [Validators.required, Validators.minLength(5)]],
    antivirus: ['', [Validators.required, Validators.minLength(5)]],
    fecha_ingreso: ['', [Validators.required, Validators.minLength(5)]],
    fecha_baja: ['', [Validators.required, Validators.minLength(5)]],
    ram: ['', [Validators.required, Validators.minLength(5)]],
    descripcion: ['', [Validators.required, Validators.minLength(5)]],
    procesador: ['', [Validators.required, Validators.minLength(5)]],
    licencias: ['', [Validators.required, Validators.minLength(5)]],
    precio: [0, [Validators.required, Validators.min(3)]],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly authSvc: AuthService,
    private readonly hostnameSvc: HostnameService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

  onRegister() {
    if (this.deviceForm.valid) {
      const body = this.deviceForm.getRawValue();
      this.hostnameSvc.registrarDevice(body).subscribe(
        (resOk) => {
          Swal.fire('Exitoso', resOk, 'success');
          console.log(this.deviceForm.getRawValue());
          this.router.navigate(['home']);
        },
        (resFail) => {
          Swal.fire('Error', 'No se pudo', 'error');
        }
      );
    }
  }
}
