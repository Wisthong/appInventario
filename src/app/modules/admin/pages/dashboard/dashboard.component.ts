import { Component, inject } from '@angular/core';
import { AuthService } from 'src/app/modules/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  private readonly authSvc = inject(AuthService);

  get usuario() {
    return this.authSvc.usuario;
  }
}
