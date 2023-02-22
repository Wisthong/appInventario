import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Device } from 'src/app/modules/model/auth';
import { AuthService } from 'src/app/modules/services/auth.service';
import { HostnameService } from 'src/app/modules/services/hostname.service';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit, AfterViewInit {
  listDevice: Device[] = [];
  titulo = 'Lista de todos los dispositivos';
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
  ];
  constructor(
    private readonly hostnameSvc: HostnameService,
    private readonly authSvc: AuthService,
    private readonly _liveAnnouncer: LiveAnnouncer,
    private readonly route: ActivatedRoute
  ) {}

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    const path = this.route.snapshot.url[0].path;

    switch (path) {
      case 'lista':
        this.hostnameSvc.obtenerLista().subscribe(({ data, message }) => {
          Swal.fire(
            'Total dispositivos',
            'Hay ' + data.length + ' dispositivos',
            'info'
          );
          this.dataSource.data = data;
        });
        break;

      case 'activos':
        this.titulo = 'Lista de dispositivos activos';
        this.hostnameSvc.obtenerLista().subscribe(({ data, message }) => {
          const arrayTmp = data.filter((m) => m.estado === 'Activo');
          Swal.fire(
            'Total dispositivos',
            'Hay ' + arrayTmp.length + ' dispositivos',
            'info'
          );
          this.dataSource.data = arrayTmp;
        });
        break;

      case 'inactivos':
        this.titulo = 'Lista de dispositivos inactivos';
        this.hostnameSvc.obtenerLista().subscribe(({ data, message }) => {
          const arrayTmp = data.filter((m) => m.estado === 'Inactivo');
          Swal.fire(
            'Total dispositivos',
            'Hay ' + arrayTmp.length + ' dispositivos',
            'info'
          );
          this.dataSource.data = arrayTmp;
        });
        break;

      case 'mant':
        this.titulo = 'Lista de dispositivos en mantenimiento';
        this.hostnameSvc.obtenerLista().subscribe(({ data, message }) => {
          const arrayTmp = data.filter((m) => m.estado === 'Mantenimiento');
          Swal.fire(
            'Total dispositivos',
            'Hay ' + arrayTmp.length + ' dispositivos',
            'info'
          );
          this.dataSource.data = arrayTmp;
        });
        break;

      default:
        this.hostnameSvc.obtenerLista().subscribe(({ data, message }) => {
          Swal.fire(
            'Total dispositivos',
            'Hay ' + data.length + ' dispositivos',
            'info'
          );
          this.dataSource.data = data;
        });
        break;
    }
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
