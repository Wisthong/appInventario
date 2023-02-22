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
  selector: 'app-table-register',
  templateUrl: './table-register.component.html',
  styleUrls: ['./table-register.component.css'],
})
export class TableRegisterComponent implements OnInit, AfterViewInit {
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
    'acciones',
  ];
  constructor(
    private readonly hostnameSvc: HostnameService,
    private readonly authSvc: AuthService,
    private readonly _liveAnnouncer: LiveAnnouncer,
    private readonly route: ActivatedRoute ,
  ) {}

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {



    this.hostnameSvc.obtenerLista().subscribe(({ data, message }) => {
      Swal.fire(
        'Total dispositivos',
        'Hay ' + (data.length) + ' dispositivos',
        'info'
      );
      this.dataSource.data = data;
    });
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }


}
