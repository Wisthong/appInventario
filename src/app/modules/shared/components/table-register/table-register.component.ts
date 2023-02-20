import { Component, OnInit } from '@angular/core';
import { Device } from 'src/app/modules/model/auth';
import { AuthService } from 'src/app/modules/services/auth.service';
import { HostnameService } from 'src/app/modules/services/hostname.service';

@Component({
  selector: 'app-table-register',
  templateUrl: './table-register.component.html',
  styleUrls: ['./table-register.component.css'],
})
export class TableRegisterComponent implements OnInit {
  listDevice: Device[] = [];

  constructor(
    private readonly hostnameSvc: HostnameService,
    private readonly authSvc: AuthService
  ) {}

  ngOnInit(): void {
    this.hostnameSvc.obtenerLista().subscribe(({ data, message }) => {
      this.listDevice = data;
    });
  }
}
