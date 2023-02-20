import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private readonly authSvc: AuthService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const path = this.route.snapshot.url[0].path;

    if (path === 'listageneral') {
      this.hostnameSvc.obtenerLista().subscribe(({ data, message }) => {
        return (this.listDevice = data);
      });
    }
    if (path === 'listadispactivos') {
      this.hostnameSvc.obtenerLista().subscribe(({ data, message }) => {
        const arrayTmp = data.filter((m) => m.estado === 'Activo');
        return (this.listDevice = arrayTmp);
      });
    }
    if (path === 'listadispinactivos') {
      this.hostnameSvc.obtenerLista().subscribe(({ data, message }) => {
        const arrayTmp = data.filter((m) => m.estado === 'Inactivo');
        return (this.listDevice = arrayTmp);
      });
    }
    if (path === 'listadispmant') {
      this.hostnameSvc.obtenerLista().subscribe(({ data, message }) => {
        const arrayTmp = data.filter((m) => m.estado === 'Mantenimiento');
        return (this.listDevice = arrayTmp);
      });
    }
  }

  onUpdate(id: string | undefined) {
    this.router.navigate(['/admin/update/' + id]);
  }
  onDelete(id: string | undefined) {
    Swal.fire({
      title: '¿Deseas eliminar el registro?',
      icon: 'question',
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
            const arrayTmp = this.listDevice.filter((m) => m._id !== id);
            this.listDevice = arrayTmp;
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
