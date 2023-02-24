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

      // {
      //   label: 'Events',
      //   icon: 'pi pi-fw pi-calendar',
      //   items: [
      //     {
      //       label: 'Edit',
      //       icon: 'pi pi-fw pi-pencil',
      //       items: [
      //         {
      //           label: 'Save',
      //           icon: 'pi pi-fw pi-calendar-plus',
      //         },
      //         {
      //           label: 'Delete',
      //           icon: 'pi pi-fw pi-calendar-minus',
      //         },
      //       ],
      //     },
      //     {
      //       label: 'Archieve',
      //       icon: 'pi pi-fw pi-calendar-times',
      //       items: [
      //         {
      //           label: 'Remove',
      //           icon: 'pi pi-fw pi-calendar-minus',
      //         },
      //       ],
      //     },
      //   ],
      // },
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
