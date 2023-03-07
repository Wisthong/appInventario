import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  anioActual!: number;
  title = 'appInventario';
  ngOnInit(): void {
    const fecha = new Date();
    this.anioActual = fecha.getFullYear();
  }
}
