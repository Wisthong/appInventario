import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css'],
})
export class NotfoundComponent {
  constructor(private readonly router: Router) {
    setTimeout(() => {
      router.navigate(['/home']);
    }, 1000 * 10);
  }
}
