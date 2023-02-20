import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Device } from 'src/app/modules/model/auth';
import { AuthService } from 'src/app/modules/services/auth.service';
import { HostnameService } from 'src/app/modules/services/hostname.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css'],
})
export class GeneralComponent implements OnInit {
  listDevice: Device[] = [];

  constructor(
    private readonly router: Router,
    private readonly hostnameSvc: HostnameService,
    private readonly authSvc: AuthService
  ) {}

  ngOnInit(): void {
    this.hostnameSvc.obtenerLista().subscribe(({ data, message }) => {
      this.listDevice = data;
    });
  }

  onUpdate(id: string | undefined) {
    this.router.navigate(['/admin/update/' + id]);
  }
  onDelete(id: string | undefined) {
    Swal.fire({
      title: '¿Deseas eliminar el registro?',
      icon: 'info',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Si',
      denyButtonText: 'No',
      customClass: {
        actions: 'my-actions',
        cancelButton: 'order-1 right-gap',
        confirmButton: 'order-2',
        denyButton: 'order-3',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        this.hostnameSvc.eliminarDevice(id!).subscribe(
          (resOk) => {
            Swal.fire('Acción', resOk, 'success');
          },
          (resFail) => {
            Swal.fire(
              'Error del servidor',
              'No se pudo eliminar el registro, intentalo más tarde ',
              'error'
            );
          }
        );
      } else if (result.isDenied) {
        Swal.fire('Accion', 'No se elimino el registro', 'info');
      }
    });
  }
}
