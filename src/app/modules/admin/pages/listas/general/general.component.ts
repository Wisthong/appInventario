import { LiveAnnouncer } from '@angular/cdk/a11y';
import { HttpErrorResponse } from '@angular/common/http';
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
import { HostnameService } from 'src/app/modules/services/hostname.service';
import { environment } from 'src/environments/environment';
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

  public readonly local = environment.direccion;

  totalPorEstado: number = 0;
  listHost: Device[] = [];
  titulo = 'Lista de todos los dispositivos';
  dataSource = new MatTableDataSource(this.listHost);
  displayedColumns: string[] = [
    'qr',
    'ip',
    'hostname',
    'device',
    // 'numserie',
    // 'descripcion',
    'area',
    'co',
    'precio',
    'providers',
    'fecha_ingreso',
    'estado',
    // 'fecha_baja',
    // 'discoduro',
    // 'ram',
    // 'procesador',
    // 'so',
    // 'antivirus',
    // 'licencias',
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
        let total = 0;
        switch (params[0].path) {
          //TODO: Centros de operaciones
          case 'lista':
            this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
              this.listHost = data.reverse();
              this.dataSource.data = data;
              data.forEach((element) => {
                total += element.precio;
              });
              this.totalPorEstado = total;
            });
            this.titulo =
              'Lista de los dispositivos, y el precio total del valor de compra de los dispositivos es ';

            break;

          case 'avenidasexta':
            switch (params[1].path) {
              case 'lista':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter((m) => m.co === 'Avenida sexta');
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                });
                this.titulo =
                  'Lista de los dispositivos, y el precio total del valor de compra de los dispositivos es ';
                break;

              case 'activos':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) => m.co === 'Avenida sexta' && m.estado === 'Activo'
                  );
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                });
                this.titulo =
                  'Lista de los dispositivos activos, y el precio total del valor de compra de los dispositivos es ';
                break;

              case 'inactivos':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) => m.co === 'Avenida sexta' && m.estado === 'Inactivo'
                  );
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                });
                this.titulo =
                  'Lista de los dispositivos inactivos, y el precio total del valor de compra de los dispositivos es ';

                break;

              case 'mantenimiento':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) =>
                      m.co === 'Avenida sexta' && m.estado === 'Mantenimiento'
                  );
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                });
                this.titulo =
                  'Lista de los dispositivos en mantenimiento, y el precio total del valor de compra de los dispositivos es ';

                break;

              default:
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter((m) => m.co === 'Cedi');
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                });
                this.titulo =
                  'Lista de los dispositivos activos, y el precio total del valor de compra de los dispositivos es ';
                break;
            }
            break;

          case 'calima':
            switch (params[1].path) {
              case 'lista':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter((m) => m.co === 'Calima');
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                });
                this.titulo =
                  'Lista de los dispositivos, y el precio total del valor de compra de los dispositivos es ';
                break;

              case 'activos':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) => m.co === 'Calima' && m.estado === 'Activo'
                  );
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                });
                this.titulo =
                  'Lista de los dispositivos activos, y el precio total del valor de compra de los dispositivos es ';
                break;

              case 'inactivos':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) => m.co === 'Calima' && m.estado === 'Inactivo'
                  );
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                });
                this.titulo =
                  'Lista de los dispositivos inactivos, y el precio total del valor de compra de los dispositivos es ';

                break;

              case 'mantenimiento':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) => m.co === 'Calima' && m.estado === 'Mantenimiento'
                  );
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                });
                this.titulo =
                  'Lista de los dispositivos en mantenimiento, y el precio total del valor de compra de los dispositivos es ';

                break;

              default:
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter((m) => m.co === 'Cedi');
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                });
                this.titulo =
                  'Lista de los dispositivos, y el precio total del valor de compra de los dispositivos es ';
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
                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                });
                this.titulo =
                  'Lista de los dispositivos, y el precio total del valor de compra de los dispositivos es ';
                break;

              case 'activos':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) => m.co === 'Cedi' && m.estado === 'Activo'
                  );
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                });
                this.titulo =
                  'Lista de los dispositivos activos, y el precio total del valor de compra de los dispositivos es ';
                break;

              case 'inactivos':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) => m.co === 'Cedi' && m.estado === 'Inactivo'
                  );
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                });
                this.titulo =
                  'Lista de los dispositivos inactivos, y el precio total del valor de compra de los dispositivos es ';

                break;

              case 'mantenimiento':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) => m.co === 'Cedi' && m.estado === 'Mantenimiento'
                  );
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                });
                this.titulo =
                  'Lista de los dispositivos en mantenimiento, y el precio total del valor de compra de los dispositivos es ';

                break;

              default:
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter((m) => m.co === 'Cedi');
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                });
                this.titulo =
                  'Lista de los dispositivos, y el precio total del valor de compra de los dispositivos es ';
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
                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                });
                this.titulo =
                  'Lista de los dispositivos, y el precio total del valor de compra de los dispositivos es ';
                break;

              case 'activos':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) => m.co === 'Cosmocentro' && m.estado === 'Activo'
                  );
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                });
                this.titulo =
                  'Lista de los dispositivos activos, y el precio total del valor de compra de los dispositivos es ';
                break;

              case 'inactivos':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) => m.co === 'Cosmocentro' && m.estado === 'Inactivo'
                  );
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                });
                this.titulo =
                  'Lista de los dispositivos inactivos, y el precio total del valor de compra de los dispositivos es ';

                break;

              case 'mantenimiento':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) =>
                      m.co === 'Cosmocentro' && m.estado === 'Mantenimiento'
                  );
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                });
                this.titulo =
                  'Lista de los dispositivos en mantenimiento, y el precio total del valor de compra de los dispositivos es ';

                break;

              default:
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter((m) => m.co === 'Cosmocentro');
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                });
                this.titulo =
                  'Lista de los dispositivos, y el precio total del valor de compra de los dispositivos es ';
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
                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                });
                this.titulo =
                  'Lista de los dispositivos, y el precio total del valor de compra de los dispositivos es ';
                break;

              case 'activos':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) => m.co === 'Centro' && m.estado === 'Activo'
                  );
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                });
                this.titulo =
                  'Lista de los dispositivos activos, y el precio total del valor de compra de los dispositivos es ';
                break;

              case 'inactivos':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) => m.co === 'Centro' && m.estado === 'Inactivo'
                  );
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                });
                this.titulo =
                  'Lista de los dispositivos inactivos, y el precio total del valor de compra de los dispositivos es ';

                break;

              case 'mantenimiento':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) => m.co === 'Centro' && m.estado === 'Mantenimiento'
                  );
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                });
                this.titulo =
                  'Lista de los dispositivos en mantenimiento, y el precio total del valor de compra de los dispositivos es ';

                break;

              default:
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter((m) => m.co === 'Centro');
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                });
                this.titulo =
                  'Lista de los dispositivos, y el precio total del valor de compra de los dispositivos es ';
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
                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                });
                this.titulo =
                  'Lista de los dispositivos, y el precio total del valor de compra de los dispositivos es ';
                break;

              case 'activos':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) => m.co === 'Pasoancho' && m.estado === 'Activo'
                  );
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                });
                this.titulo =
                  'Lista de los dispositivos activos, y el precio total del valor de compra de los dispositivos es ';
                break;

              case 'inactivos':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) => m.co === 'Pasoancho' && m.estado === 'Inactivo'
                  );
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                });
                this.titulo =
                  'Lista de los dispositivos inactivos, y el precio total del valor de compra de los dispositivos es ';

                break;

              case 'mantenimiento':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) => m.co === 'Pasoancho' && m.estado === 'Mantenimiento'
                  );
                  this.dataSource.data = arrayTmp;
                  arrayTmp.forEach((element) => {
                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                });
                this.titulo =
                  'Lista de los dispositivos en mantenimiento, y el precio total del valor de compra de los dispositivos es ';

                break;

              default:
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter((m) => m.co === 'Pasoancho');
                  arrayTmp.forEach((element) => {
                    this.dataSource.data = arrayTmp;

                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                  this.titulo =
                    'Lista de los dispositivos, y el precio total del valor de compra de los dispositivos es ';
                });
                break;
            }
            break;

          //TODO: Areas
          case 'bodega':
            switch (params[1].path) {
              case 'lista':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter((m) => m.area === 'Bodega');
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                });
                this.titulo =
                  'Lista de los dispositivos, y el precio total del valor de compra de los dispositivos es ';
                break;

              case 'activos':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) => m.area === 'Bodega' && m.estado === 'Activo'
                  );
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                });
                this.titulo =
                  'Lista de los dispositivos activos, y el precio total del valor de compra de los dispositivos es ';
                break;

              case 'inactivos':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) => m.area === 'Bodega' && m.estado === 'Inactivo'
                  );
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                });
                this.titulo =
                  'Lista de los dispositivos inactivos, y el precio total del valor de compra de los dispositivos es ';

                break;

              case 'mantenimiento':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) => m.area === 'Bodega' && m.estado === 'Mantenimiento'
                  );
                  this.dataSource.data = arrayTmp;
                  arrayTmp.forEach((element) => {
                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                });
                this.titulo =
                  'Lista de los dispositivos en mantenimiento, y el precio total del valor de compra de los dispositivos es ';

                break;

              default:
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter((m) => m.area === 'Bodega');
                  arrayTmp.forEach((element) => {
                    this.dataSource.data = arrayTmp;

                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                  this.titulo =
                    'Lista de los dispositivos, y el precio total del valor de compra de los dispositivos es ';
                });
                break;
            }
            break;

          case 'callcenter':
            switch (params[1].path) {
              case 'lista':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter((m) => m.area === 'Callcenter');
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                });
                this.titulo =
                  'Lista de los dispositivos, y el precio total del valor de compra de los dispositivos es ';
                break;

              case 'activos':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) => m.area === 'Callcenter' && m.estado === 'Activo'
                  );
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                });
                this.titulo =
                  'Lista de los dispositivos activos, y el precio total del valor de compra de los dispositivos es ';
                break;

              case 'inactivos':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) => m.area === 'Callcenter' && m.estado === 'Inactivo'
                  );
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                });
                this.titulo =
                  'Lista de los dispositivos inactivos, y el precio total del valor de compra de los dispositivos es ';

                break;

              case 'mantenimiento':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) =>
                      m.area === 'Callcenter' && m.estado === 'Mantenimiento'
                  );
                  this.dataSource.data = arrayTmp;
                  arrayTmp.forEach((element) => {
                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                });
                this.titulo =
                  'Lista de los dispositivos en mantenimiento, y el precio total del valor de compra de los dispositivos es ';

                break;

              default:
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter((m) => m.area === 'Callcenter');
                  arrayTmp.forEach((element) => {
                    this.dataSource.data = arrayTmp;

                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                  this.titulo =
                    'Lista de los dispositivos, y el precio total del valor de compra de los dispositivos es ';
                });
                break;
            }
            break;

          case 'compras':
            switch (params[1].path) {
              case 'lista':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter((m) => m.area === 'Compras');
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                });
                this.titulo =
                  'Lista de los dispositivos, y el precio total del valor de compra de los dispositivos es ';
                break;

              case 'activos':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) => m.area === 'Compras' && m.estado === 'Activo'
                  );
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                });
                this.titulo =
                  'Lista de los dispositivos activos, y el precio total del valor de compra de los dispositivos es ';
                break;

              case 'inactivos':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) => m.area === 'Compras' && m.estado === 'Inactivo'
                  );
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                });
                this.titulo =
                  'Lista de los dispositivos inactivos, y el precio total del valor de compra de los dispositivos es ';

                break;

              case 'mantenimiento':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) => m.area === 'Compras' && m.estado === 'Mantenimiento'
                  );
                  this.dataSource.data = arrayTmp;
                  arrayTmp.forEach((element) => {
                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                });
                this.titulo =
                  'Lista de los dispositivos en mantenimiento, y el precio total del valor de compra de los dispositivos es ';

                break;

              default:
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter((m) => m.area === 'Compras');
                  arrayTmp.forEach((element) => {
                    this.dataSource.data = arrayTmp;

                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                  this.titulo =
                    'Lista de los dispositivos, y el precio total del valor de compra de los dispositivos es ';
                });
                break;
            }
            break;

          case 'contabilidad':
            switch (params[1].path) {
              case 'lista':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) => m.area === 'Contabilidad'
                  );
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                });
                this.titulo =
                  'Lista de los dispositivos, y el precio total del valor de compra de los dispositivos es ';
                break;

              case 'activos':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) => m.area === 'Contabilidad' && m.estado === 'Activo'
                  );
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                });
                this.titulo =
                  'Lista de los dispositivos activos, y el precio total del valor de compra de los dispositivos es ';
                break;

              case 'inactivos':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) => m.area === 'Contabilidad' && m.estado === 'Inactivo'
                  );
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                });
                this.titulo =
                  'Lista de los dispositivos inactivos, y el precio total del valor de compra de los dispositivos es ';

                break;

              case 'mantenimiento':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) =>
                      m.area === 'Contabilidad' && m.estado === 'Mantenimiento'
                  );
                  this.dataSource.data = arrayTmp;
                  arrayTmp.forEach((element) => {
                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                });
                this.titulo =
                  'Lista de los dispositivos en mantenimiento, y el precio total del valor de compra de los dispositivos es ';

                break;

              default:
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) => m.area === 'Contabilidad'
                  );
                  arrayTmp.forEach((element) => {
                    this.dataSource.data = arrayTmp;

                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                  this.titulo =
                    'Lista de los dispositivos, y el precio total del valor de compra de los dispositivos es ';
                });
                break;
            }
            break;

          case 'inventario':
            switch (params[1].path) {
              case 'lista':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter((m) => m.area === 'Inventario');
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                });
                this.titulo =
                  'Lista de los dispositivos, y el precio total del valor de compra de los dispositivos es ';
                break;

              case 'activos':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) => m.area === 'Inventario' && m.estado === 'Activo'
                  );
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                });
                this.titulo =
                  'Lista de los dispositivos activos, y el precio total del valor de compra de los dispositivos es ';
                break;

              case 'inactivos':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) => m.area === 'Inventario' && m.estado === 'Inactivo'
                  );
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                });
                this.titulo =
                  'Lista de los dispositivos inactivos, y el precio total del valor de compra de los dispositivos es ';

                break;

              case 'mantenimiento':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) =>
                      m.area === 'Inventario' && m.estado === 'Mantenimiento'
                  );
                  this.dataSource.data = arrayTmp;
                  arrayTmp.forEach((element) => {
                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                });
                this.titulo =
                  'Lista de los dispositivos en mantenimiento, y el precio total del valor de compra de los dispositivos es ';

                break;

              default:
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter((m) => m.area === 'Inventario');
                  arrayTmp.forEach((element) => {
                    this.dataSource.data = arrayTmp;

                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                  this.titulo =
                    'Lista de los dispositivos, y el precio total del valor de compra de los dispositivos es ';
                });
                break;
            }
            break;

          case 'mercadeo':
            switch (params[1].path) {
              case 'lista':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter((m) => m.area === 'Mercadeo');
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                });
                this.titulo =
                  'Lista de los dispositivos, y el precio total del valor de compra de los dispositivos es ';
                break;

              case 'activos':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) => m.area === 'Mercadeo' && m.estado === 'Activo'
                  );
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                });
                this.titulo =
                  'Lista de los dispositivos activos, y el precio total del valor de compra de los dispositivos es ';
                break;

              case 'inactivos':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) => m.area === 'Mercadeo' && m.estado === 'Inactivo'
                  );
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                });
                this.titulo =
                  'Lista de los dispositivos inactivos, y el precio total del valor de compra de los dispositivos es ';

                break;

              case 'mantenimiento':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) => m.area === 'Mercadeo' && m.estado === 'Mantenimiento'
                  );
                  this.dataSource.data = arrayTmp;
                  arrayTmp.forEach((element) => {
                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                });
                this.titulo =
                  'Lista de los dispositivos en mantenimiento, y el precio total del valor de compra de los dispositivos es ';

                break;

              default:
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter((m) => m.area === 'Mercadeo');
                  arrayTmp.forEach((element) => {
                    this.dataSource.data = arrayTmp;

                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                  this.titulo =
                    'Lista de los dispositivos, y el precio total del valor de compra de los dispositivos es ';
                });
                break;
            }
            break;

          case 'sistemas':
            switch (params[1].path) {
              case 'lista':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter((m) => m.area === 'Sistemas');
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                });
                this.titulo =
                  'Lista de los dispositivos, y el precio total del valor de compra de los dispositivos es ';
                break;

              case 'activos':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) => m.area === 'Sistemas' && m.estado === 'Activo'
                  );
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                });
                this.titulo =
                  'Lista de los dispositivos activos, y el precio total del valor de compra de los dispositivos es ';
                break;

              case 'inactivos':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) => m.area === 'Sistemas' && m.estado === 'Inactivo'
                  );
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                });
                this.titulo =
                  'Lista de los dispositivos inactivos, y el precio total del valor de compra de los dispositivos es ';

                break;

              case 'mantenimiento':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) => m.area === 'Sistemas' && m.estado === 'Mantenimiento'
                  );
                  this.dataSource.data = arrayTmp;
                  arrayTmp.forEach((element) => {
                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                });
                this.titulo =
                  'Lista de los dispositivos en mantenimiento, y el precio total del valor de compra de los dispositivos es ';

                break;

              default:
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter((m) => m.area === 'Sistemas');
                  arrayTmp.forEach((element) => {
                    this.dataSource.data = arrayTmp;

                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                  this.titulo =
                    'Lista de los dispositivos, y el precio total del valor de compra de los dispositivos es ';
                });
                break;
            }
            break;

          case 'recursoshumanos':
            switch (params[1].path) {
              case 'lista':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) => m.area === 'Recursos humanos'
                  );
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                });
                this.titulo =
                  'Lista de los dispositivos, y el precio total del valor de compra de los dispositivos es ';
                break;

              case 'activos':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) =>
                      m.area === 'Recursos humanos' && m.estado === 'Activo'
                  );
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                });
                this.titulo =
                  'Lista de los dispositivos activos, y el precio total del valor de compra de los dispositivos es ';
                break;

              case 'inactivos':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) =>
                      m.area === 'Recursos humanos' && m.estado === 'Inactivo'
                  );
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                });
                this.titulo =
                  'Lista de los dispositivos inactivos, y el precio total del valor de compra de los dispositivos es ';

                break;

              case 'mantenimiento':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) =>
                      m.area === 'Recursos humanos' &&
                      m.estado === 'Mantenimiento'
                  );
                  this.dataSource.data = arrayTmp;
                  arrayTmp.forEach((element) => {
                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                });
                this.titulo =
                  'Lista de los dispositivos en mantenimiento, y el precio total del valor de compra de los dispositivos es ';

                break;

              default:
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) => m.area === 'Recursos humanos'
                  );
                  arrayTmp.forEach((element) => {
                    this.dataSource.data = arrayTmp;

                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                  this.titulo =
                    'Lista de los dispositivos, y el precio total del valor de compra de los dispositivos es ';
                });
                break;
            }
            break;

          case 'ventas':
            switch (params[1].path) {
              case 'lista':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter((m) => m.area === 'Ventas');
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                });
                this.titulo =
                  'Lista de los dispositivos, y el precio total del valor de compra de los dispositivos es ';
                break;

              case 'activos':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) => m.area === 'Ventas' && m.estado === 'Activo'
                  );
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                });
                this.titulo =
                  'Lista de los dispositivos activos, y el precio total del valor de compra de los dispositivos es ';
                break;

              case 'inactivos':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) => m.area === 'Ventas' && m.estado === 'Inactivo'
                  );
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                });
                this.titulo =
                  'Lista de los dispositivos inactivos, y el precio total del valor de compra de los dispositivos es ';

                break;

              case 'mantenimiento':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) => m.area === 'Ventas' && m.estado === 'Mantenimiento'
                  );
                  this.dataSource.data = arrayTmp;
                  arrayTmp.forEach((element) => {
                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                });
                this.titulo =
                  'Lista de los dispositivos en mantenimiento, y el precio total del valor de compra de los dispositivos es ';

                break;

              default:
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter((m) => m.area === 'Ventas');
                  arrayTmp.forEach((element) => {
                    this.dataSource.data = arrayTmp;

                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                  this.titulo =
                    'Lista de los dispositivos, y el precio total del valor de compra de los dispositivos es ';
                });
                break;
            }
            break;

          case 'tesoreria':
            switch (params[1].path) {
              case 'lista':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter((m) => m.area === 'Tesoreria');
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                });
                this.titulo =
                  'Lista de los dispositivos, y el precio total del valor de compra de los dispositivos es ';
                break;

              case 'activos':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) => m.area === 'Tesoreria' && m.estado === 'Activo'
                  );
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                });
                this.titulo =
                  'Lista de los dispositivos activos, y el precio total del valor de compra de los dispositivos es ';
                break;

              case 'inactivos':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) => m.area === 'Tesoreria' && m.estado === 'Inactivo'
                  );
                  this.dataSource.data = arrayTmp;

                  arrayTmp.forEach((element) => {
                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                });
                this.titulo =
                  'Lista de los dispositivos inactivos, y el precio total del valor de compra de los dispositivos es ';

                break;

              case 'mantenimiento':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter(
                    (m) =>
                      m.area === 'Tesoreria' && m.estado === 'Mantenimiento'
                  );
                  this.dataSource.data = arrayTmp;
                  arrayTmp.forEach((element) => {
                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                });
                this.titulo =
                  'Lista de los dispositivos en mantenimiento, y el precio total del valor de compra de los dispositivos es ';

                break;

              default:
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  const arrayTmp = data.filter((m) => m.area === 'Tesoreria');
                  arrayTmp.forEach((element) => {
                    this.dataSource.data = arrayTmp;

                    total += element.precio;
                  });
                  this.totalPorEstado = total;
                  this.titulo =
                    'Lista de los dispositivos, y el precio total del valor de compra de los dispositivos es ';
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
      confirmButtonText: 'Si',
      denyButtonText: 'No',
      customClass: {
        actions: 'my-actions',
        confirmButton: 'order-1',
        denyButton: 'order-2',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        this.hostnameSvc.eliminarDevice(id!).subscribe(
          (resOk) => {
            const arrayTmp = this.dataSource.data.filter((m) => m._id !== id);
            this.dataSource.data = arrayTmp;

            Swal.fire({
              title: 'Accion',
              html: resOk,
              icon: 'success',
              showConfirmButton: false,
              timer: 4000,
            });
            // Swal.fire('Acción', resOk, 'success');
          },
          ({ error }: HttpErrorResponse) => {
            Swal.fire({
              title: 'Error del servidor',
              html: error.message,
              icon: 'error',
              showConfirmButton: false,
              timer: 5000,
            });
          }
        );
      }
      // else if (result.isDenied) {
      //   // Swal.fire('Accion', 'No se elimino el registro', 'info');
      // }
    });
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  onDetails(id: string) {
    this.router.navigate(['home/view/' + id]);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
