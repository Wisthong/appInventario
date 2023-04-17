import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/modules/services/auth.service';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css'],
})
export class BienvenidaComponent implements OnInit, OnDestroy {
  listObservers$: Array<Subscription> = [];

  products = [
    {
      imagen: '../../../../../assets/img/carousel.jpg',
      info: 'Mes de la mujer',
    },
    {
      imagen: '../../../../../assets/img/carousel1.jpg',
      info: 'Información de nuestros productos',
    },
    {
      imagen: '../../../../../assets/img/fondo.jpg',
      info: 'Papeleria Universal',
    },
  ];

  responsiveOptions!: any[];

  private readonly authSvc = inject(AuthService);
  private readonly router = inject(Router);

  ngOnInit(): void {
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
    // const observer1$ = this.authSvc.validarToken().subscribe((resOk) => {
    //   if (resOk) {
    //     this.router.navigate(['/admin']);
    //   }
    // });
    // this.listObservers$ = [observer1$];
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach((m) => m.unsubscribe());
  }

  getSeverity(status: string): any {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return 'info';
    }
  }
}
