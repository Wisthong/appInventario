import { LiveAnnouncer } from '@angular/cdk/a11y';
import {
  AfterViewInit,
  Component,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
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
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  private readonly router = inject(Router);
  private readonly hostnameSvc = inject(HostnameService);
  private readonly route = inject(ActivatedRoute);
  private readonly _liveAnnouncer = inject(LiveAnnouncer);

  totalPorEstado: number = 0;
  listDevice: Device[] = [];
  titulo = 'Lista de todos los dispositivos';
  dataSource = new MatTableDataSource(this.listDevice);
  displayedColumns: string[] = [
    'ip',
    'hostname',
    'device',
    'numserie',
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
    'acciones',
  ];

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.paginator._intl.itemsPerPageLabel = 'Dispositivos';
    this.paginator._intl.firstPageLabel = 'Primera página';
    this.paginator._intl.previousPageLabel = 'Página anterior';
    this.paginator._intl.nextPageLabel = 'Siguiente página';
    this.paginator._intl.lastPageLabel = 'Última página';
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
                'Lista de los dispositivos, y el precio total del valor de compra de los dispositivos es ';
            });
            break;

          case 'avenidasexta':
            switch (params[1].path) {
              case 'lista':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  this.listDevice = data.filter(
                    (m) => m.co === 'Avenida sexta'
                  );
                  this.dataSource.data = this.listDevice;

                  this.listDevice.forEach((element) => {
                    this.totalPorEstado += element.precio;
                  });

                  this.titulo =
                    'Lista de los dispositivos activos, y el precio total del valor de compra de los dispositivos es ';
                });
                break;

              case 'activos':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  this.listDevice = data.filter(
                    (m) => m.co === 'Avenida sexta' && m.estado === 'Activo'
                  );
                  this.dataSource.data = this.listDevice;

                  this.listDevice.forEach((element) => {
                    this.totalPorEstado += element.precio;
                  });

                  this.titulo =
                    'Lista de los dispositivos activos, y el precio total del valor de compra de los dispositivos es ';
                });
                break;

              case 'inactivos':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  this.listDevice = data.filter(
                    (m) => m.co === 'Avenida sexta' && m.estado === 'Inactivo'
                  );
                  this.dataSource.data = this.listDevice;

                  this.listDevice.forEach((element) => {
                    this.totalPorEstado += element.precio;
                  });

                  this.titulo =
                    'Lista de los dispositivos inactivos, y el precio total del valor de compra de los dispositivos es ';
                });

                break;

              case 'mantenimiento':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  this.listDevice = data.filter(
                    (m) =>
                      m.co === 'Avenida sexta' && m.estado === 'Mantenimiento'
                  );
                  this.dataSource.data = this.listDevice;

                  this.listDevice.forEach((element) => {
                    this.totalPorEstado += element.precio;
                  });

                  this.titulo =
                    'Lista de los dispositivos en mantenimiento, y el precio total del valor de compra de los dispositivos es ';
                });

                break;

              default:
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  this.listDevice = data.filter((m) => m.co === 'Cedi');
                  this.dataSource.data = this.listDevice;

                  this.listDevice.forEach((element) => {
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
                  this.listDevice = data.filter((m) => m.co === '14');
                  this.dataSource.data = this.listDevice;
                  this.listDevice.forEach((element) => {
                    this.totalPorEstado += element.precio;
                  });

                  this.titulo =
                    'Lista de los dispositivos activos, y el precio total del valor de compra de los dispositivos es ';
                });
                break;

              case 'activos':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  this.listDevice = data.filter(
                    (m) => m.co === '14' && m.estado === 'Activo'
                  );
                  this.dataSource.data = this.listDevice;

                  this.listDevice.forEach((element) => {
                    this.totalPorEstado += element.precio;
                  });

                  this.titulo =
                    'Lista de los dispositivos activos, y el precio total del valor de compra de los dispositivos es ';
                });
                break;

              case 'inactivos':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  this.listDevice = data.filter(
                    (m) => m.co === '14' && m.estado === 'Inactivo'
                  );
                  this.dataSource.data = this.listDevice;

                  this.listDevice.forEach((element) => {
                    this.totalPorEstado += element.precio;
                  });

                  this.titulo =
                    'Lista de los dispositivos inactivos, y el precio total del valor de compra de los dispositivos es ';
                });

                break;

              case 'mantenimiento':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  this.listDevice = data.filter(
                    (m) => m.co === '14' && m.estado === 'Mantenimiento'
                  );
                  this.dataSource.data = this.listDevice;

                  this.listDevice.forEach((element) => {
                    this.totalPorEstado += element.precio;
                  });

                  this.titulo =
                    'Lista de los dispositivos en mantenimiento, y el precio total del valor de compra de los dispositivos es ';
                });

                break;

              default:
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  this.listDevice = data.filter((m) => m.co === 'Cedi');
                  this.dataSource.data = this.listDevice;

                  this.listDevice.forEach((element) => {
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
                  this.listDevice = data.filter((m) => m.co === 'Cedi');
                  this.dataSource.data = this.listDevice;

                  this.listDevice.forEach((element) => {
                    this.totalPorEstado += element.precio;
                  });

                  this.titulo =
                    'Lista de los dispositivos activos, y el precio total del valor de compra de los dispositivos es ';
                });
                break;

              case 'activos':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  this.listDevice = data.filter(
                    (m) => m.co === 'Cedi' && m.estado === 'Activo'
                  );
                  this.dataSource.data = this.listDevice;

                  this.listDevice.forEach((element) => {
                    this.totalPorEstado += element.precio;
                  });

                  this.titulo =
                    'Lista de los dispositivos activos, y el precio total del valor de compra de los dispositivos es ';
                });
                break;

              case 'inactivos':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  this.listDevice = data.filter(
                    (m) => m.co === 'Cedi' && m.estado === 'Inactivo'
                  );
                  this.dataSource.data = this.listDevice;

                  this.listDevice.forEach((element) => {
                    this.totalPorEstado += element.precio;
                  });

                  this.titulo =
                    'Lista de los dispositivos inactivos, y el precio total del valor de compra de los dispositivos es ';
                });

                break;

              case 'mantenimiento':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  this.listDevice = data.filter(
                    (m) => m.co === 'Cedi' && m.estado === 'Mantenimiento'
                  );
                  this.dataSource.data = this.listDevice;

                  this.listDevice.forEach((element) => {
                    this.totalPorEstado += element.precio;
                  });

                  this.titulo =
                    'Lista de los dispositivos en mantenimiento, y el precio total del valor de compra de los dispositivos es ';
                });

                break;

              default:
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  this.listDevice = data.filter((m) => m.co === 'Cedi');
                  this.dataSource.data = this.listDevice;

                  this.listDevice.forEach((element) => {
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
                  this.listDevice = data.filter((m) => m.co === 'Cosmocentro');
                  this.dataSource.data = this.listDevice;

                  this.listDevice.forEach((element) => {
                    this.totalPorEstado += element.precio;
                  });

                  this.titulo =
                    'Lista de los dispositivos activos, y el precio total del valor de compra de los dispositivos es ';
                });
                break;

              case 'activos':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  this.listDevice = data.filter(
                    (m) => m.co === 'Cosmocentro' && m.estado === 'Activo'
                  );
                  this.dataSource.data = this.listDevice;

                  this.listDevice.forEach((element) => {
                    this.totalPorEstado += element.precio;
                  });

                  this.titulo =
                    'Lista de los dispositivos activos, y el precio total del valor de compra de los dispositivos es ';
                });
                break;

              case 'inactivos':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  this.listDevice = data.filter(
                    (m) => m.co === 'Cosmocentro' && m.estado === 'Inactivo'
                  );
                  this.dataSource.data = this.listDevice;

                  this.listDevice.forEach((element) => {
                    this.totalPorEstado += element.precio;
                  });

                  this.titulo =
                    'Lista de los dispositivos inactivos, y el precio total del valor de compra de los dispositivos es ';
                });

                break;

              case 'mantenimiento':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  this.listDevice = data.filter(
                    (m) =>
                      m.co === 'Cosmocentro' && m.estado === 'Mantenimiento'
                  );
                  this.dataSource.data = this.listDevice;

                  this.listDevice.forEach((element) => {
                    this.totalPorEstado += element.precio;
                  });

                  this.titulo =
                    'Lista de los dispositivos en mantenimiento, y el precio total del valor de compra de los dispositivos es ';
                });

                break;

              default:
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  this.listDevice = data.filter((m) => m.co === 'Cosmocentro');
                  this.dataSource.data = this.listDevice;

                  this.listDevice.forEach((element) => {
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
                  this.listDevice = data.filter((m) => m.co === 'Centro');
                  this.dataSource.data = this.listDevice;

                  this.listDevice.forEach((element) => {
                    this.totalPorEstado += element.precio;
                  });

                  this.titulo =
                    'Lista de los dispositivos activos, y el precio total del valor de compra de los dispositivos es ';
                });
                break;

              case 'activos':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  this.listDevice = data.filter(
                    (m) => m.co === 'Centro' && m.estado === 'Activo'
                  );
                  this.dataSource.data = this.listDevice;

                  this.listDevice.forEach((element) => {
                    this.totalPorEstado += element.precio;
                  });

                  this.titulo =
                    'Lista de los dispositivos activos, y el precio total del valor de compra de los dispositivos es ';
                });
                break;

              case 'inactivos':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  this.listDevice = data.filter(
                    (m) => m.co === 'Centro' && m.estado === 'Inactivo'
                  );
                  this.dataSource.data = this.listDevice;

                  this.listDevice.forEach((element) => {
                    this.totalPorEstado += element.precio;
                  });

                  this.titulo =
                    'Lista de los dispositivos inactivos, y el precio total del valor de compra de los dispositivos es ';
                });

                break;

              case 'mantenimiento':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  this.listDevice = data.filter(
                    (m) => m.co === 'Centro' && m.estado === 'Mantenimiento'
                  );
                  this.dataSource.data = this.listDevice;

                  this.listDevice.forEach((element) => {
                    this.totalPorEstado += element.precio;
                  });

                  this.titulo =
                    'Lista de los dispositivos en mantenimiento, y el precio total del valor de compra de los dispositivos es ';
                });

                break;

              default:
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  this.listDevice = data.filter((m) => m.co === 'Centro');
                  this.dataSource.data = this.listDevice;

                  this.listDevice.forEach((element) => {
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
                  this.listDevice = data.filter((m) => m.co === 'Pasoancho');
                  this.dataSource.data = this.listDevice;

                  this.listDevice.forEach((element) => {
                    this.totalPorEstado += element.precio;
                  });

                  this.titulo =
                    'Lista de los dispositivos activos, y el precio total del valor de compra de los dispositivos es ';
                });
                break;

              case 'activos':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  this.listDevice = data.filter(
                    (m) => m.co === 'Pasoancho' && m.estado === 'Activo'
                  );
                  this.dataSource.data = this.listDevice;

                  this.listDevice.forEach((element) => {
                    this.totalPorEstado += element.precio;
                  });

                  this.titulo =
                    'Lista de los dispositivos activos, y el precio total del valor de compra de los dispositivos es ';
                });
                break;

              case 'inactivos':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  this.listDevice = data.filter(
                    (m) => m.co === 'Pasoancho' && m.estado === 'Inactivo'
                  );
                  this.dataSource.data = this.listDevice;

                  this.listDevice.forEach((element) => {
                    this.totalPorEstado += element.precio;
                  });

                  this.titulo =
                    'Lista de los dispositivos inactivos, y el precio total del valor de compra de los dispositivos es ';
                });

                break;

              case 'mantenimiento':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  this.listDevice = data.filter(
                    (m) => m.co === 'Pasoancho' && m.estado === 'Mantenimiento'
                  );
                  this.dataSource.data = this.listDevice;

                  this.listDevice.forEach((element) => {
                    this.totalPorEstado += element.precio;
                  });

                  this.titulo =
                    'Lista de los dispositivos en mantenimiento, y el precio total del valor de compra de los dispositivos es ';
                });

                break;

              default:
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  this.listDevice = data.filter((m) => m.co === 'Pasoancho');
                  this.dataSource.data = this.listDevice;

                  this.listDevice.forEach((element) => {
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
            const arrayTmp = this.dataSource.data.filter((m) => m._id !== id);
            this.dataSource.data = arrayTmp;
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

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
