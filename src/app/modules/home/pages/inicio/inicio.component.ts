import { LiveAnnouncer } from '@angular/cdk/a11y';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  inject,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { Device } from 'src/app/modules/model/auth';
import { AuthService } from 'src/app/modules/services/auth.service';
import { HostnameService } from 'src/app/modules/services/hostname.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InicioComponent implements AfterViewInit, OnInit, OnDestroy {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  private readonly _liveAnnouncer = inject(LiveAnnouncer);
  private readonly hostnameSvc = inject(HostnameService);
  private readonly authSvc = inject(AuthService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  listObservers$: Array<Subscription> = [];

  listHost: Device[] = [];
  titulo = 'Lista de todos los dispositivos';
  totalPorEstado: number = 0;

  displayedColumns: string[] = [
    'qr',
    'ip',
    'hostname',
    'device',
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
    'accion',
  ];

  dataSource = new MatTableDataSource(this.listHost);

  ngOnInit(): void {
    const observer1$ = this.authSvc.validarToken().subscribe((resOk) => {
      if (!resOk) {
        this.paginator._intl.itemsPerPageLabel = 'Dispositivos';
        this.paginator._intl.firstPageLabel = 'Primera página';
        this.paginator._intl.previousPageLabel = 'Página anterior';
        this.paginator._intl.nextPageLabel = 'Siguiente página';
        this.paginator._intl.lastPageLabel = 'Última página';

        this.route.url.subscribe(
          (params) => {
            let total = 0;
            switch (params[0].path) {
              case 'lista':
                this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                  this.listHost = data;
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
                      const arrayTmp = data.filter(
                        (m) => m.co === 'Avenida sexta'
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
                        (m) =>
                          m.co === 'Avenida sexta' && m.estado === 'Inactivo'
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
                          m.co === 'Avenida sexta' &&
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
                      const arrayTmp = data.filter(
                        (m) => m.co === 'Cosmocentro'
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
                      const arrayTmp = data.filter(
                        (m) => m.co === 'Cosmocentro'
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
                        (m) =>
                          m.co === 'Pasoancho' && m.estado === 'Mantenimiento'
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

              //TODO:POR AREAS
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
                        (m) =>
                          m.area === 'Bodega' && m.estado === 'Mantenimiento'
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
                        (m) =>
                          m.area === 'Compras' && m.estado === 'Mantenimiento'
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
                        (m) =>
                          m.area === 'Contabilidad' && m.estado === 'Activo'
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
                          m.area === 'Contabilidad' && m.estado === 'Inactivo'
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
                          m.area === 'Contabilidad' &&
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
                      const arrayTmp = data.filter(
                        (m) => m.area === 'Inventario'
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
                        (m) =>
                          m.area === 'Inventario' && m.estado === 'Inactivo'
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
                          m.area === 'Inventario' &&
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
                        (m) => m.area === 'Inventario'
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

              case 'sistemas':
                switch (params[1].path) {
                  case 'lista':
                    this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                      const arrayTmp = data.filter(
                        (m) => m.area === 'Sistemas'
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
                        (m) =>
                          m.area === 'Sistemas' && m.estado === 'Mantenimiento'
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
                        (m) => m.area === 'Sistemas'
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
                          m.area === 'Recursos humanos' &&
                          m.estado === 'Inactivo'
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
                        (m) =>
                          m.area === 'Ventas' && m.estado === 'Mantenimiento'
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
                      const arrayTmp = data.filter(
                        (m) => m.area === 'Tesoreria'
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
                      const arrayTmp = data.filter(
                        (m) => m.area === 'Tesoreria'
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

              case 'otro':
                switch (params[1].path) {
                  case 'lista':
                    this.hostnameSvc.obtenerLista().subscribe(({ data }) => {
                      const arrayTmp = data.filter((m) => m.area === 'Otro');
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
                        (m) => m.area === 'Otro' && m.estado === 'Activo'
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
                        (m) => m.area === 'Otro' && m.estado === 'Inactivo'
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
                        (m) => m.area === 'Otro' && m.estado === 'Mantenimiento'
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
                      const arrayTmp = data.filter((m) => m.area === 'Otro');
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
      } else {
        this.router.navigate(['/admin']);
      }
    });

    this.listObservers$ = [observer1$];
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach((m) => m.unsubscribe());
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  onDetails(id: string) {
    this.router.navigate(['home/view/' + id]);
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
