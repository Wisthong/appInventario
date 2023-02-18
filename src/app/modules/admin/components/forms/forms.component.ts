import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/services/auth.service';

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
    precio: ['', [Validators.required, Validators.min(3)]],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly authSvc: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

  onRegister() {
    console.log(this.deviceForm.getRawValue());
  }
}
