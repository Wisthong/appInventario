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
        label: 'Registrar',
        icon: 'pi pi-fw pi-plus',
        items: [
          {
            label: 'Registar Usuario',
            icon: 'pi pi-fw pi-plus',
            routerLink: ['register'],
          },
        ],
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
