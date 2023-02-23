import { Component, OnInit } from '@angular/core';
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

  constructor(
    private readonly fb: FormBuilder,
    private readonly authSvc: AuthService,
    private readonly hostnameSvc: HostnameService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id !== null) {
      this.btn = {
        accion: 'Actualizar',
        clase: 'warn',
        icon: 'settings',
      };
      this.hostnameSvc.obtenerUno(this.id!).subscribe((resOk) => {
        this.deviceForm.patchValue({
          device: resOk.device,
          estado: resOk.estado,
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
          (resFail) => {
            Swal.fire('Error', 'No se pudo', 'error');
          }
        );
      } else {

        this.hostnameSvc.registrarDevice(body).subscribe(
          (resOk) => {
            Swal.fire('Exitoso', resOk, 'success');
            console.log(this.deviceForm.getRawValue());
            this.router.navigate(['/admin']);
          },
          (resFail) => {
            Swal.fire('Error', 'No se pudo', 'error');
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
