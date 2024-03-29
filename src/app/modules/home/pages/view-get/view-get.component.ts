import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Device } from 'src/app/modules/model/auth';
import { AuthService } from 'src/app/modules/services/auth.service';
import { HostnameService } from 'src/app/modules/services/hostname.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-get',
  templateUrl: './view-get.component.html',
  styleUrls: ['./view-get.component.css'],
})
export class ViewGetComponent implements OnInit {
  private readonly hostnameSvc = inject(HostnameService);
  private readonly authSvc = inject(AuthService);
  private readonly route = inject(ActivatedRoute);
  private readonly location = inject(Location);

  device!: Device;
  flag: boolean = false;

  ngOnInit(): void {
    this.authSvc.validarToken().subscribe((resOk) => {
      if (resOk) {
        console.log(resOk);

        this.flag = resOk;
      }
    });
    let id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.hostnameSvc.obtenerUno(id).subscribe(
        (resOk) => {
          // console.log(resOk);

          this.device = resOk;
        },
        ({ error }: HttpErrorResponse) => {
          Swal.fire('Advertencia', error.message, 'warning');
        }
      );
    }
  }

  onBack() {
    this.location.back();
  }
}
