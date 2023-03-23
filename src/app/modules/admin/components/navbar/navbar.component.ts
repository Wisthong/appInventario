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
      //TODO: Centros de Operaciones
      {
        label: 'Lista general',
        icon: 'pi pi-fw pi-list',
        routerLink: ['/admin/lista'],
      },
      {
        label: 'Centros de Operaciones',
        icon: 'pi pi-fw pi-th-large',
        items: [
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
            label: 'Calima',
            icon: 'pi pi-fw pi-circle-fill',
            items: [
              {
                label: 'Listas',
                icon: 'pi pi-fw pi-list',
                items: [
                  {
                    label: 'General',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/admin/calima/lista'],
                  },
                  {
                    label: 'Activos',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/admin/calima/activos'],
                  },
                  {
                    label: 'Inactivos',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/admin/calima/inactivos'],
                  },
                  {
                    label: 'Mantenimiento',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/admin/calima/mantenimiento'],
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
      //TODO: Areas
      {
        label: 'Areas',
        icon: 'pi pi-fw pi-book',
        items: [
          {
            label: 'Bodega',
            icon: 'pi pi-fw pi-circle-fill',
            items: [
              {
                label: 'Listas',
                icon: 'pi pi-fw pi-list',
                items: [
                  {
                    label: 'General',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/admin/bodega/lista'],
                  },
                  {
                    label: 'Activos',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/admin/bodega/activos'],
                  },
                  {
                    label: 'Inactivos',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/admin/bodega/inactivos'],
                  },
                  {
                    label: 'Mantenimiento',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/admin/bodega/mantenimiento'],
                  },
                ],
              },
            ],
          },
          {
            label: 'Compras',
            icon: 'pi pi-fw pi-circle-fill',
            items: [
              {
                label: 'Listas',
                icon: 'pi pi-fw pi-list',
                items: [
                  {
                    label: 'General',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/admin/compras/lista'],
                  },
                  {
                    label: 'Activos',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/admin/compras/activos'],
                  },
                  {
                    label: 'Inactivos',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/admin/compras/inactivos'],
                  },
                  {
                    label: 'Mantenimiento',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/admin/compras/mantenimiento'],
                  },
                ],
              },
            ],
          },
          {
            label: 'Contabilidad',
            icon: 'pi pi-fw pi-circle-fill',
            items: [
              {
                label: 'Listas',
                icon: 'pi pi-fw pi-list',
                items: [
                  {
                    label: 'General',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/admin/contabilidad/lista'],
                  },
                  {
                    label: 'Activos',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/admin/contabilidad/activos'],
                  },
                  {
                    label: 'Inactivos',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/admin/contabilidad/inactivos'],
                  },
                  {
                    label: 'Mantenimiento',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/admin/contabilidad/mantenimiento'],
                  },
                ],
              },
            ],
          },
          {
            label: 'Inventario',
            icon: 'pi pi-fw pi-circle-fill',
            items: [
              {
                label: 'Listas',
                icon: 'pi pi-fw pi-list',
                items: [
                  {
                    label: 'General',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/admin/inventario/lista'],
                  },
                  {
                    label: 'Activos',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/admin/inventario/activos'],
                  },
                  {
                    label: 'Inactivos',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/admin/inventario/inactivos'],
                  },
                  {
                    label: 'Mantenimiento',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/admin/inventario/mantenimiento'],
                  },
                ],
              },
            ],
          },
          {
            label: 'Recursos humanos',
            icon: 'pi pi-fw pi-circle-fill',
            items: [
              {
                label: 'Listas',
                icon: 'pi pi-fw pi-list',
                items: [
                  {
                    label: 'General',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/admin/recursoshumanos/lista'],
                  },
                  {
                    label: 'Activos',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/admin/recursoshumanos/activos'],
                  },
                  {
                    label: 'Inactivos',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/admin/recursoshumanos/inactivos'],
                  },
                  {
                    label: 'Mantenimiento',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/admin/recursoshumanos/mantenimiento'],
                  },
                ],
              },
            ],
          },
          {
            label: 'Sistemas',
            icon: 'pi pi-fw pi-circle-fill',
            items: [
              {
                label: 'Listas',
                icon: 'pi pi-fw pi-list',
                items: [
                  {
                    label: 'General',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/admin/sistemas/lista'],
                  },
                  {
                    label: 'Activos',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/admin/sistemas/activos'],
                  },
                  {
                    label: 'Inactivos',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/admin/sistemas/inactivos'],
                  },
                  {
                    label: 'Mantenimiento',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/admin/sistemas/mantenimiento'],
                  },
                ],
              },
            ],
          },
          {
            label: 'Tesoreria',
            icon: 'pi pi-fw pi-circle-fill',
            items: [
              {
                label: 'Listas',
                icon: 'pi pi-fw pi-list',
                items: [
                  {
                    label: 'General',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/admin/tesoreria/lista'],
                  },
                  {
                    label: 'Activos',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/admin/tesoreria/activos'],
                  },
                  {
                    label: 'Inactivos',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/admin/tesoreria/inactivos'],
                  },
                  {
                    label: 'Mantenimiento',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/admin/tesoreria/mantenimiento'],
                  },
                ],
              },
            ],
          },
          {
            label: 'Ventas',
            icon: 'pi pi-fw pi-circle-fill',
            items: [
              {
                label: 'Listas',
                icon: 'pi pi-fw pi-list',
                items: [
                  {
                    label: 'General',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/admin/ventas/lista'],
                  },
                  {
                    label: 'Activos',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/admin/ventas/activos'],
                  },
                  {
                    label: 'Inactivos',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/admin/ventas/inactivos'],
                  },
                  {
                    label: 'Mantenimiento',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/admin/ventas/mantenimiento'],
                  },
                ],
              },
            ],
          },
          {
            label: 'Otro',
            icon: 'pi pi-fw pi-circle-fill',
            items: [
              {
                label: 'Listas',
                icon: 'pi pi-fw pi-list',
                items: [
                  {
                    label: 'General',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/admin/otro/lista'],
                  },
                  {
                    label: 'Activos',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/admin/otro/activos'],
                  },
                  {
                    label: 'Inactivos',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/admin/otro/inactivos'],
                  },
                  {
                    label: 'Mantenimiento',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/admin/otro/mantenimiento'],
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
    Swal.fire({
      title: '¿Estas seguro de cerrar la sesión?',
      icon: 'question',
      showDenyButton: true,
      // showCancelButton: true,
      confirmButtonText: 'Si',
      denyButtonText: 'No',
      customClass: {
        actions: 'my-actions',
        // cancelButton: 'order-1 right-gap',
        confirmButton: 'order-1',
        denyButton: 'order-2',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        this.authSvc.logout();
        Swal.fire({
          icon: 'info',
          title: 'Has cerrado sesión',
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 1500);
      }
      // else if (result.isDenied) {
      //   // Swal.fire('Accion', '', 'info');
      // }
    });
  }
}
