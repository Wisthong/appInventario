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
  private readonly authSvc = inject(AuthService);
  private readonly router = inject(Router);

  ngOnInit(): void {
    const observer1$ = this.authSvc.validarToken().subscribe((resOk) => {
      if (resOk) {
        this.router.navigate(['/admin']);
      }
    });
    this.listObservers$ = [observer1$];
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach((m) => m.unsubscribe());
  }
}
