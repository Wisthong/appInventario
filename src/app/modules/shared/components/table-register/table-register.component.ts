import { Component } from '@angular/core';
import { Device } from 'src/app/modules/model/auth';
import { HostnameService } from 'src/app/modules/services/hostname.service';

@Component({
  selector: 'app-table-register',
  templateUrl: './table-register.component.html',
  styleUrls: ['./table-register.component.css'],
})
export class TableRegisterComponent {
  listDevice: Device[] = [];

  constructor(private readonly hostnameSvc: HostnameService) {}

  ngOnInit(): void {
    this.hostnameSvc.obtenerLista().subscribe(({ data, message }) => {
      this.listDevice = data;
    });
  }
}
