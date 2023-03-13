import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  items!: MenuItem[];
  itemSesion!: MenuItem[];

  ngOnInit() {
    this.items = [
      //TODO: Centros de operaciones
      {
        label: 'Centros de Operaciones',
        icon: 'pi pi-fw pi-th-large',
        items: [
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
                    routerLink: ['/home/14/lista'],
                  },
                  {
                    label: 'Activos',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/home/14/activos'],
                  },
                  {
                    label: 'Inactivos',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/home/14/inactivos'],
                  },
                  {
                    label: 'Mantenimiento',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/home/14/mantenimiento'],
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
                    routerLink: ['/home/avenidasexta/lista'],
                  },
                  {
                    label: 'Activos',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/home/avenidasexta/activos'],
                  },
                  {
                    label: 'Inactivos',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/home/avenidasexta/inactivos'],
                  },
                  {
                    label: 'Mantenimiento',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/home/avenidasexta/mantenimiento'],
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
                    routerLink: ['/home/cedi/lista'],
                  },
                  {
                    label: 'Activos',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/home/cedi/activos'],
                  },
                  {
                    label: 'Inactivos',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/home/cedi/inactivos'],
                  },
                  {
                    label: 'Mantenimiento',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/home/cedi/mantenimiento'],
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
                    routerLink: ['/home/centro/lista'],
                  },
                  {
                    label: 'Activos',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/home/centro/activos'],
                  },
                  {
                    label: 'Inactivos',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/home/centro/inactivos'],
                  },
                  {
                    label: 'Mantenimiento',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/home/centro/mantenimiento'],
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
                    routerLink: ['/home/cosmocentro/lista'],
                  },
                  {
                    label: 'Activos',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/home/cosmocentro/activos'],
                  },
                  {
                    label: 'Inactivos',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/home/cosmocentro/inactivos'],
                  },
                  {
                    label: 'Mantenimiento',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/home/cosmocentro/mantenimiento'],
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
                    routerLink: ['/home/pasoancho/lista'],
                  },
                  {
                    label: 'Activos',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/home/pasoancho/activos'],
                  },
                  {
                    label: 'Inactivos',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/home/pasoancho/inactivos'],
                  },
                  {
                    label: 'Mantenimiento',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/home/pasoancho/mantenimiento'],
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
                    routerLink: ['/home/bodega/lista'],
                  },
                  {
                    label: 'Activos',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/home/bodega/activos'],
                  },
                  {
                    label: 'Inactivos',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/home/bodega/inactivos'],
                  },
                  {
                    label: 'Mantenimiento',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/home/bodega/mantenimiento'],
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
                    routerLink: ['/home/compras/lista'],
                  },
                  {
                    label: 'Activos',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/home/compras/activos'],
                  },
                  {
                    label: 'Inactivos',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/home/compras/inactivos'],
                  },
                  {
                    label: 'Mantenimiento',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/home/compras/mantenimiento'],
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
                    routerLink: ['/home/contabilidad/lista'],
                  },
                  {
                    label: 'Activos',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/home/contabilidad/activos'],
                  },
                  {
                    label: 'Inactivos',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/home/contabilidad/inactivos'],
                  },
                  {
                    label: 'Mantenimiento',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/home/contabilidad/mantenimiento'],
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
                    routerLink: ['/home/inventario/lista'],
                  },
                  {
                    label: 'Activos',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/home/inventario/activos'],
                  },
                  {
                    label: 'Inactivos',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/home/inventario/inactivos'],
                  },
                  {
                    label: 'Mantenimiento',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/home/inventario/mantenimiento'],
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
                    routerLink: ['/home/sistemas/lista'],
                  },
                  {
                    label: 'Activos',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/home/sistemas/activos'],
                  },
                  {
                    label: 'Inactivos',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/home/sistemas/inactivos'],
                  },
                  {
                    label: 'Mantenimiento',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/home/sistemas/mantenimiento'],
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
                    routerLink: ['/home/recursoshumanos/lista'],
                  },
                  {
                    label: 'Activos',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/home/recursoshumanos/activos'],
                  },
                  {
                    label: 'Inactivos',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/home/recursoshumanos/inactivos'],
                  },
                  {
                    label: 'Mantenimiento',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/home/recursoshumanos/mantenimiento'],
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
                    routerLink: ['/home/tesoreria/lista'],
                  },
                  {
                    label: 'Activos',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/home/tesoreria/activos'],
                  },
                  {
                    label: 'Inactivos',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/home/tesoreria/inactivos'],
                  },
                  {
                    label: 'Mantenimiento',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/home/tesoreria/mantenimiento'],
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
                    routerLink: ['/home/ventas/lista'],
                  },
                  {
                    label: 'Activos',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/home/ventas/activos'],
                  },
                  {
                    label: 'Inactivos',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/home/ventas/inactivos'],
                  },
                  {
                    label: 'Mantenimiento',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/home/ventas/mantenimiento'],
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
                    routerLink: ['/home/otro/lista'],
                  },
                  {
                    label: 'Activos',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/home/otro/activos'],
                  },
                  {
                    label: 'Inactivos',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/home/otro/inactivos'],
                  },
                  {
                    label: 'Mantenimiento',
                    icon: 'pi pi-fw pi-filter-fill',
                    routerLink: ['/home/otro/mantenimiento'],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        label: 'Iniciar Sesion',
        icon: 'pi pi-fw pi-users',
        routerLink: ['/home/login'],
      },
    ];

    this.itemSesion = [
      {
        label: 'Iniciar Sesion',
        icon: 'pi pi-fw pi-users',
        routerLink: ['/home/login'],
      },
    ];
  }
}
