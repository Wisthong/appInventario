import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Device } from 'src/app/modules/model/auth';
import { AuthService } from 'src/app/modules/services/auth.service';
import { HostnameService } from 'src/app/modules/services/hostname.service';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit, AfterViewInit {
  totalPorEstado: number = 0;
  listDevice: Device[] = [];
  titulo = 'Lista de todos los dispositivos';
  dataSource = new MatTableDataSource(this.listDevice);
  displayedColumns: string[] = [
    'ip',
    'hostname',
    'device',
    'descripcion',
    'area',
    'co',
    'precio',
    'providers',
    'fecha_ingreso',
    'estado',
    'fecha_baja',
    'discoduro',
    'ram',
    'procesador',
    'so',
    'antivirus',
    'licencias',
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
    this.route.url.subscribe(
      (params) => {
        switch (params[0].path) {
          case 'lista':
            this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
              this.dataSource.data = data;
              data.forEach((element) => {
                this.totalPorEstado += element.precio;
              });

              this.titulo =
                'Lista de los dispositivos activos, y el precio total del valor de compra de los dispositivos es ';
            });
            break;

          case 'avenidasexta':
            switch (params[1].path) {
              case 'lista':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter((m) => m.co === 'Avenida sexta');
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    this.totalPorEstado += element.precio;
                  });

                  this.titulo =
                    'Lista de los dispositivos activos, y el precio total del valor de compra de los dispositivos es ';
                });
                break;

              case 'activos':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) => m.co === 'Avenida sexta' && m.estado === 'Activo'
                  );
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    this.totalPorEstado += element.precio;
                  });

                  this.titulo =
                    'Lista de los dispositivos activos, y el precio total del valor de compra de los dispositivos es ';
                });
                break;

              case 'inactivos':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) => m.co === 'Avenida sexta' && m.estado === 'Inactivo'
                  );
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    this.totalPorEstado += element.precio;
                  });

                  this.titulo =
                    'Lista de los dispositivos inactivos, y el precio total del valor de compra de los dispositivos es ';
                });

                break;

              case 'mantenimiento':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) =>
                      m.co === 'Avenida sexta' && m.estado === 'Mantenimiento'
                  );
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    this.totalPorEstado += element.precio;
                  });

                  this.titulo =
                    'Lista de los dispositivos en mantenimiento, y el precio total del valor de compra de los dispositivos es ';
                });

                break;

              default:
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter((m) => m.co === 'Cedi');
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    this.totalPorEstado += element.precio;
                  });

                  this.titulo =
                    'Lista de los dispositivos activos, y el precio total del valor de compra de los dispositivos es ';
                });
                break;
            }
            break;

          case '14':
            switch (params[1].path) {
              case 'lista':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter((m) => m.co === '14');
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    this.totalPorEstado += element.precio;
                  });

                  this.titulo =
                    'Lista de los dispositivos activos, y el precio total del valor de compra de los dispositivos es ';
                });
                break;

              case 'activos':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) => m.co === '14' && m.estado === 'Activo'
                  );
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    this.totalPorEstado += element.precio;
                  });

                  this.titulo =
                    'Lista de los dispositivos activos, y el precio total del valor de compra de los dispositivos es ';
                });
                break;

              case 'inactivos':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) => m.co === '14' && m.estado === 'Inactivo'
                  );
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    this.totalPorEstado += element.precio;
                  });

                  this.titulo =
                    'Lista de los dispositivos inactivos, y el precio total del valor de compra de los dispositivos es ';
                });

                break;

              case 'mantenimiento':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) => m.co === '14' && m.estado === 'Mantenimiento'
                  );
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    this.totalPorEstado += element.precio;
                  });

                  this.titulo =
                    'Lista de los dispositivos en mantenimiento, y el precio total del valor de compra de los dispositivos es ';
                });

                break;

              default:
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter((m) => m.co === 'Cedi');
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    this.totalPorEstado += element.precio;
                  });

                  this.titulo =
                    'Lista de los dispositivos activos, y el precio total del valor de compra de los dispositivos es ';
                });
                break;
            }
            break;

          case 'cedi':
            switch (params[1].path) {
              case 'lista':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter((m) => m.co === 'Cedi');
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    this.totalPorEstado += element.precio;
                  });

                  this.titulo =
                    'Lista de los dispositivos activos, y el precio total del valor de compra de los dispositivos es ';
                });
                break;

              case 'activos':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) => m.co === 'Cedi' && m.estado === 'Activo'
                  );
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    this.totalPorEstado += element.precio;
                  });

                  this.titulo =
                    'Lista de los dispositivos activos, y el precio total del valor de compra de los dispositivos es ';
                });
                break;

              case 'inactivos':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) => m.co === 'Cedi' && m.estado === 'Inactivo'
                  );
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    this.totalPorEstado += element.precio;
                  });

                  this.titulo =
                    'Lista de los dispositivos inactivos, y el precio total del valor de compra de los dispositivos es ';
                });

                break;

              case 'mantenimiento':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) => m.co === 'Cedi' && m.estado === 'Mantenimiento'
                  );
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    this.totalPorEstado += element.precio;
                  });

                  this.titulo =
                    'Lista de los dispositivos en mantenimiento, y el precio total del valor de compra de los dispositivos es ';
                });

                break;

              default:
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter((m) => m.co === 'Cedi');
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    this.totalPorEstado += element.precio;
                  });

                  this.titulo =
                    'Lista de los dispositivos activos, y el precio total del valor de compra de los dispositivos es ';
                });
                break;
            }
            break;

          case 'cosmocentro':
            switch (params[1].path) {
              case 'lista':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter((m) => m.co === 'Cosmocentro');
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    this.totalPorEstado += element.precio;
                  });

                  this.titulo =
                    'Lista de los dispositivos activos, y el precio total del valor de compra de los dispositivos es ';
                });
                break;

              case 'activos':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) => m.co === 'Cosmocentro' && m.estado === 'Activo'
                  );
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    this.totalPorEstado += element.precio;
                  });

                  this.titulo =
                    'Lista de los dispositivos activos, y el precio total del valor de compra de los dispositivos es ';
                });
                break;

              case 'inactivos':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) => m.co === 'Cosmocentro' && m.estado === 'Inactivo'
                  );
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    this.totalPorEstado += element.precio;
                  });

                  this.titulo =
                    'Lista de los dispositivos inactivos, y el precio total del valor de compra de los dispositivos es ';
                });

                break;

              case 'mantenimiento':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) =>
                      m.co === 'Cosmocentro' && m.estado === 'Mantenimiento'
                  );
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    this.totalPorEstado += element.precio;
                  });

                  this.titulo =
                    'Lista de los dispositivos en mantenimiento, y el precio total del valor de compra de los dispositivos es ';
                });

                break;

              default:
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter((m) => m.co === 'Cosmocentro');
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    this.totalPorEstado += element.precio;
                  });

                  this.titulo =
                    'Lista de los dispositivos activos, y el precio total del valor de compra de los dispositivos es ';
                });
                break;
            }
            break;

          case 'centro':
            switch (params[1].path) {
              case 'lista':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter((m) => m.co === 'Centro');
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    this.totalPorEstado += element.precio;
                  });

                  this.titulo =
                    'Lista de los dispositivos activos, y el precio total del valor de compra de los dispositivos es ';
                });
                break;

              case 'activos':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) => m.co === 'Centro' && m.estado === 'Activo'
                  );
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    this.totalPorEstado += element.precio;
                  });

                  this.titulo =
                    'Lista de los dispositivos activos, y el precio total del valor de compra de los dispositivos es ';
                });
                break;

              case 'inactivos':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) => m.co === 'Centro' && m.estado === 'Inactivo'
                  );
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    this.totalPorEstado += element.precio;
                  });

                  this.titulo =
                    'Lista de los dispositivos inactivos, y el precio total del valor de compra de los dispositivos es ';
                });

                break;

              case 'mantenimiento':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) => m.co === 'Centro' && m.estado === 'Mantenimiento'
                  );
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    this.totalPorEstado += element.precio;
                  });

                  this.titulo =
                    'Lista de los dispositivos en mantenimiento, y el precio total del valor de compra de los dispositivos es ';
                });

                break;

              default:
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter((m) => m.co === 'Centro');
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    this.totalPorEstado += element.precio;
                  });

                  this.titulo =
                    'Lista de los dispositivos activos, y el precio total del valor de compra de los dispositivos es ';
                });
                break;
            }
            break;

          case 'pasoancho':
            switch (params[1].path) {
              case 'lista':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter((m) => m.co === 'Pasoancho');
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    this.totalPorEstado += element.precio;
                  });

                  this.titulo =
                    'Lista de los dispositivos activos, y el precio total del valor de compra de los dispositivos es ';
                });
                break;

              case 'activos':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) => m.co === 'Pasoancho' && m.estado === 'Activo'
                  );
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    this.totalPorEstado += element.precio;
                  });

                  this.titulo =
                    'Lista de los dispositivos activos, y el precio total del valor de compra de los dispositivos es ';
                });
                break;

              case 'inactivos':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) => m.co === 'Pasoancho' && m.estado === 'Inactivo'
                  );
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    this.totalPorEstado += element.precio;
                  });

                  this.titulo =
                    'Lista de los dispositivos inactivos, y el precio total del valor de compra de los dispositivos es ';
                });

                break;

              case 'mantenimiento':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) => m.co === 'Pasoancho' && m.estado === 'Mantenimiento'
                  );
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    this.totalPorEstado += element.precio;
                  });

                  this.titulo =
                    'Lista de los dispositivos en mantenimiento, y el precio total del valor de compra de los dispositivos es ';
                });

                break;

              default:
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter((m) => m.co === 'Pasoancho');
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    this.totalPorEstado += element.precio;
                  });

                  this.titulo =
                    'Lista de los dispositivos activos, y el precio total del valor de compra de los dispositivos es ';
                });
                break;
            }
            break;

          default:
            break;
        }
      },
      (resFail) => {
        console.log('Error', resFail);
      }
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
