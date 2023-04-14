import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  list_dispositivo = [
    'Camara',
    'Computador todo en uno',
    'Computador portatil',
    'DVR',
    'Impresora',
    'Lectores de barra',
    'NVR',
    'Router',
    'Raspberry',
    'Switch',
    'Terminal',
    'Televisor',
    'Torre',
    'Video beam',
  ];
  list_centro_operacion = [
    'Avenida sexta',
    'Calima',
    'Cedi',
    'Centro',
    'Cosmocentro',
    'Pasoancho',
  ];
  list_areas = [
    'Bodega',
    'Callcenter',
    'Compras',
    'Contabilidad',
    'Inventario',
    'Mercadeo',
    'Sistemas',
    'Recursos humanos',
    'Ventas',
    'Tesoreria',
  ];

  deviceForm = this.fb.nonNullable.group({
    antivirus: [''],
    area: ['', [Validators.required]],
    co: ['', [Validators.required]],
    device: ['', [Validators.required]],
    descripcion: ['', []],
    discoduro: ['', []],
    // discoduro: ['', [Validators.required, Validators.minLength(5)]],
    estado: ['', [Validators.required]],
    fecha_ingreso: ['', [Validators.required, Validators.minLength(5)]],
    fecha_baja: ['', []],
    ip: ['', [Validators.required, Validators.minLength(12)]],
    hostname: ['', [Validators.required, Validators.minLength(4)]],
    licencias: [''],
    numserie: ['', []],
    // numserie: ['', [Validators.required]],
    providers: ['', []],
    // providers: ['', [Validators.required, Validators.minLength(2)]],
    precio: [0, [Validators.required]],
    procesador: [''],
    ram: [0],
    so: [''],
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
        console.log(resOk);

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

  cleanForms(): void {
    return this.deviceForm.setValue({
      providers: '',
      co: '',
      device: '',
      estado: '',
      area: '',
      discoduro: '',
      numserie: '',
      hostname: '',
      so: '',
      ip: '',
      antivirus: '',
      fecha_ingreso: '',
      fecha_baja: '',
      ram: 0,
      descripcion: '',
      procesador: '',
      licencias: '',
      precio: 0,
    });
  }

  onRegister() {
    if (this.deviceForm.valid) {
      const body = this.deviceForm.getRawValue();
      if (this.id !== null) {
        //FIXME: Actualizar
        Swal.fire({
          title: '¿Deseas actualizar el registro?',
          icon: 'question',
          showDenyButton: true,
          confirmButtonText: 'Si',
          denyButtonText: 'No',
          customClass: {
            actions: 'my-actions',
            confirmButton: 'order-1',
            denyButton: 'order-2',
          },
        }).then((result) => {
          if (result.isConfirmed) {
            this.hostnameSvc.actualizarDevice(body, this.id!).subscribe(
              (resOk) => {
                Swal.fire({
                  title: 'Exitoso',
                  html: resOk,
                  icon: 'success',
                  timer: 3000,
                  showConfirmButton: false,
                });
                this.cleanForms();
                this.router.navigate(['/admin']);
              },
              ({ error }: HttpErrorResponse) => {
                Swal.fire({
                  title: 'Advertencia',
                  html: error.message,
                  icon: 'warning',
                  showConfirmButton: false,
                  timer: 5000,
                });
              }
            );
          }
        });
      } else {
        //FIXME: Registrar
        this.hostnameSvc.registrarDevice(body).subscribe(
          (resOk) => {
            Swal.fire({
              title: 'Exitoso',
              html: resOk,
              icon: 'success',
              timer: 3000,
              showConfirmButton: false,
            });
            this.cleanForms();
            this.router.navigate(['/admin']);
          },
          ({ error }: HttpErrorResponse) => {
            Swal.fire('Advertencia', error.message, 'warning');
          }
        );
      }
    } else {
      Swal.fire({
        title: 'Aviso',
        html: 'Faltan campos por llenar, por favor intenta nuevamente',
        icon: 'info',
        showConfirmButton: false,
        timer: 5000,
      });
    }
  }
}
