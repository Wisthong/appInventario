import { Component } from '@angular/core';
import { inject } from '@angular/core/testing';
import { AuthService } from 'src/app/modules/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor(private readonly authSvc: AuthService) {}

  get usuario() {
    return this.authSvc.usuario;
  }
}
