import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/modules/services/auth.service';
import { HostnameService } from 'src/app/modules/services/hostname.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly hostnameSvc = inject(HostnameService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  titulo: string = 'Formulario de registro de dispositivo';

  btn = {
    accion: 'Registrar',
    clase: 'primary',
    icon: 'assignment_turned_in',
  };
  id!: string | null;
  estados = ['Activo', 'Inactivo', 'Mantenimiento'];
  list_centro_operacion = [
    'Avenida sexta',
    'Cedi',
    'Centro',
    'Cosmocentro',
    '14',
    'Pasoancho',
  ];
  list_areas = [
    'Inventario',
    'Recursos humanos',
    'Compras',
    'Contabilidad',
    'Sistemas',
    'Ventas',
    'Tesoseria',
    'Bodega',
    'Otro',
  ];

  deviceForm = this.fb.nonNullable.group({
    providers: ['', [Validators.required, Validators.minLength(5)]],
    co: ['', [Validators.required]],
    device: ['', [Validators.required, Validators.minLength(5)]],
    estado: ['', [Validators.required]],
    area: ['', [Validators.required]],
    discoduro: ['', [Validators.required, Validators.minLength(5)]],
    numserie: ['', [Validators.required]],
    hostname: ['', [Validators.required, Validators.minLength(5)]],
    so: [''],
    ip: ['', [Validators.required, Validators.minLength(11)]],
    antivirus: [''],
    fecha_ingreso: ['', [Validators.required, Validators.minLength(5)]],
    fecha_baja: ['', []],
    ram: [0],
    descripcion: ['', [Validators.required, Validators.minLength(5)]],
    procesador: [''],
    licencias: [''],
    precio: [0, [Validators.required, Validators.min(3)]],
  });

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id !== null) {
      this.titulo = 'Formulario de actualizacion de dispositivo';
      this.btn = {
        accion: 'Actualizar',
        clase: 'warn',
        icon: 'settings',
      };
      this.hostnameSvc.obtenerUno(this.id!).subscribe((resOk) => {
        return this.deviceForm.patchValue({
          providers: resOk.providers,
          co: resOk.co,
          device: resOk.device,
          estado: resOk.estado,
          area: resOk.area,
          discoduro: resOk.discoduro,
          numserie: resOk.numserie,
          hostname: resOk.hostname,
          so: resOk.so,
          ip: resOk.ip,
          antivirus: resOk.antivirus,
          fecha_ingreso: resOk.fecha_ingreso,
          fecha_baja: resOk.fecha_baja,
          ram: resOk.ram,
          descripcion: resOk.descripcion,
          procesador: resOk.procesador,
          licencias: resOk.licencias,
          precio: resOk.precio,
        });
      });
    }
  }

  onRegister() {
    // console.log(this.deviceForm.getRawValue());

    if (this.deviceForm.valid) {
      const body = this.deviceForm.getRawValue();
      if (this.id !== null) {
        //FIXME: Actualizar
        this.hostnameSvc.actualizarDevice(body, this.id!).subscribe(
          (resOk) => {
            Swal.fire('Exitoso', resOk, 'success');
            console.log(this.deviceForm.getRawValue());
            this.router.navigate(['/admin']);
          },
          ({ error }: HttpErrorResponse) => {
            Swal.fire('Advertencia', error.message, 'warning');
          }
        );
      } else {
        this.hostnameSvc.registrarDevice(body).subscribe(
          (resOk) => {
            Swal.fire('Exitoso', resOk, 'success');
            console.log(this.deviceForm.getRawValue());
            this.router.navigate(['/admin']);
          },
          ({ error }: HttpErrorResponse) => {
            Swal.fire('Advertencia', error.message, 'warning');
          }
        );
      }
    } else {
      Swal.fire(
        'Aviso',
        'Faltan campos por llenar, por favor intenta nuevamente',
        'info'
      );
    }
  }
}
