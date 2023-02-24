import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AuthService } from 'src/app/modules/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  items!: MenuItem[];
  itemSesion!: MenuItem[];

  private readonly authSvc = inject(AuthService);
  private readonly router = inject(Router);

  ngOnInit() {
    this.items = [
      {
        label: 'Centros de Operaciones',
        icon: 'pi pi-fw pi-th-large',
        items: [
          {
            label: 'Lista general',
            icon: 'pi pi-fw pi-list',
            routerLink: ['/admin/lista'],
          },
          {
            label: '14',
            icon: 'pi pi-fw pi-circle-fill',
            items: [
              {
                label: 'Listas',
                icon: 'pi pi-fw pi-list',
                items: [
                  {
                    label: 'General',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/admin/14/lista'],
                  },
                  {
                    label: 'Activos',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/admin/14/activos'],
                  },
                  {
                    label: 'Inactivos',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/admin/14/inactivos'],
                  },
                  {
                    label: 'Mantenimiento',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/admin/14/mantenimiento'],
                  },
                ],
              },
            ],
          },
          {
            label: 'Avenida sexta',
            icon: 'pi pi-fw pi-circle-fill',
            items: [
              {
                label: 'Listas',
                icon: 'pi pi-fw pi-list',
                items: [
                  {
                    label: 'General',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/admin/avenidasexta/lista'],
                  },
                  {
                    label: 'Activos',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/admin/avenidasexta/activos'],
                  },
                  {
                    label: 'Inactivos',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/admin/avenidasexta/inactivos'],
                  },
                  {
                    label: 'Mantenimiento',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/admin/avenidasexta/mantenimiento'],
                  },
                ],
              },
            ],
          },
          {
            label: 'Cedi',
            icon: 'pi pi-fw pi-circle-fill',
            items: [
              {
                label: 'Listas',
                icon: 'pi pi-fw pi-list',
                items: [
                  {
                    label: 'General',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/admin/cedi/lista'],
                  },
                  {
                    label: 'Activos',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/admin/cedi/activos'],
                  },
                  {
                    label: 'Inactivos',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/admin/cedi/inactivos'],
                  },
                  {
                    label: 'Mantenimiento',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/admin/cedi/mantenimiento'],
                  },
                ],
              },
            ],
          },
          {
            label: 'Centro',
            icon: 'pi pi-fw pi-circle-fill',
            items: [
              {
                label: 'Listas',
                icon: 'pi pi-fw pi-list',
                items: [
                  {
                    label: 'General',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/admin/centro/lista'],
                  },
                  {
                    label: 'Activos',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/admin/centro/activos'],
                  },
                  {
                    label: 'Inactivos',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/admin/centro/inactivos'],
                  },
                  {
                    label: 'Mantenimiento',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/admin/centro/mantenimiento'],
                  },
                ],
              },
            ],
          },
          {
            label: 'Cosmocentro',
            icon: 'pi pi-fw pi-circle-fill',
            items: [
              {
                label: 'Listas',
                icon: 'pi pi-fw pi-list',
                items: [
                  {
                    label: 'General',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/admin/cosmocentro/lista'],
                  },
                  {
                    label: 'Activos',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/admin/cosmocentro/activos'],
                  },
                  {
                    label: 'Inactivos',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/admin/cosmocentro/inactivos'],
                  },
                  {
                    label: 'Mantenimiento',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/admin/cosmocentro/mantenimiento'],
                  },
                ],
              },
            ],
          },
          {
            label: 'Pasoancho',
            icon: 'pi pi-fw pi-circle-fill',
            items: [
              {
                label: 'Listas',
                icon: 'pi pi-fw pi-list',
                items: [
                  {
                    label: 'General',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/admin/pasoancho/lista'],
                  },
                  {
                    label: 'Activos',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/admin/pasoancho/activos'],
                  },
                  {
                    label: 'Inactivos',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/admin/pasoancho/inactivos'],
                  },
                  {
                    label: 'Mantenimiento',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/admin/pasoancho/mantenimiento'],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        label: 'Registrar',
        icon: 'pi pi-fw pi-plus',
        routerLink: ['/admin/create'],
      },
    ];

    this.itemSesion = [
      {
        label: 'Cerrar Sesion',
        icon: 'pi pi-fw pi-user-minus',
        // routerLink: ['/admin/login'],
      },
    ];
  }

  onCerrarSesion() {
    this.authSvc.logout();
    Swal.fire('Aviso', 'Has cerrado sesión', 'info');
    this.router.navigate(['/home']);
  }
}
