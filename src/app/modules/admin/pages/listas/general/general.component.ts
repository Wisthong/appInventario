import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
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
export class GeneralComponent implements OnInit, AfterViewInit {
  listDevice: Device[] = [];
  dataSource = new MatTableDataSource(this.listDevice);
  displayedColumns: string[] = [
    'device',
    'hostname',
    'so',
    'ram',
    'procesador',
    'ip',
    'precio',
    'antivirus',
    'fecha_ingreso',
    'fecha_baja',
    'estado',
    'licencias',
    'descripcion',
    'acciones',
  ];

  constructor(
    private readonly router: Router,
    private readonly hostnameSvc: HostnameService,
    private readonly authSvc: AuthService,
    private readonly route: ActivatedRoute,
    private readonly _liveAnnouncer: LiveAnnouncer
  ) {}

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    const path = this.route.snapshot.url[0].path;

    if (path === 'listageneral') {
      this.hostnameSvc.obtenerLista().subscribe(({ data, message }) => {
        Swal.fire(
          'Total dispositivos',
          'Hay ' + data.length + ' dispositivos',
          'info'
        );
        return (this.dataSource.data = data);
      });
    }
    if (path === 'listadispactivos') {
      this.hostnameSvc.obtenerLista().subscribe(({ data, message }) => {
        const arrayTmp = data.filter((m) => m.estado === 'Activo');
        Swal.fire(
          'Total dispositivos',
          'Hay ' + arrayTmp.length + ' dispositivos',
          'info'
        );

        return (this.dataSource.data = arrayTmp);
      });
    }
    if (path === 'listadispinactivos') {
      this.hostnameSvc.obtenerLista().subscribe(({ data, message }) => {
        const arrayTmp = data.filter((m) => m.estado === 'Inactivo');
        Swal.fire(
          'Total dispositivos',
          'Hay ' + arrayTmp.length + ' dispositivos',
          'info'
        );

        return (this.dataSource.data = arrayTmp);
      });
    }
    if (path === 'listadispmant') {
      this.hostnameSvc.obtenerLista().subscribe(({ data, message }) => {
        const arrayTmp = data.filter((m) => m.estado === 'Mantenimiento');
        Swal.fire(
          'Total dispositivos',
          'Hay ' + arrayTmp.length + ' dispositivos',
          'info'
        );

        return (this.dataSource.data = arrayTmp);
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

  onTotales() {
    Swal.fire(
      'Total dispositivos',
      'Hay ' + this.listDevice + ' dispositivos',
      'info'
    );
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
