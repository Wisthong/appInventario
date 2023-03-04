import { LiveAnnouncer } from '@angular/cdk/a11y';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Device } from 'src/app/modules/model/auth';
import { HostnameService } from 'src/app/modules/services/hostname.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InicioComponent implements AfterViewInit, OnInit {
  private readonly _liveAnnouncer = inject(LiveAnnouncer);
  private readonly hostnameSvc = inject(HostnameService);
  private readonly route = inject(ActivatedRoute);
  private readonly cdr = inject(ChangeDetectorRef);

  listHost: Device[] = [];
  titulo = 'Lista de todos los dispositivos';
  totalPorEstado: number = 0;

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

  // displayedColumns: string[] = ['ip', 'device'];
  dataSource = new MatTableDataSource(this.listHost);

  ngOnInit(): void {
    this.route.url.subscribe(
      (params) => {
        switch (params[0].path) {
          case 'lista':
            this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
              this.listHost = data;
              this.dataSource.data = data;
              console.log(this.dataSource.sort);
              data.forEach((element) => {
                this.totalPorEstado += element.precio;
              });

              this.titulo =
                'Lista de los dispositivos, y el precio total del valor de compra de los dispositivos es ';
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

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
