import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(
    private readonly authSvc: AuthService,
    private readonly router: Router
  ) {}

  onCerrarSesion() {
    this.authSvc.logout();
    Swal.fire('Aviso', 'Has cerrado sesión', 'info');
    this.router.navigate(['/home']);
  }
}
