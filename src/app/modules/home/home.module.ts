import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { SigninComponent } from './pages/signin/signin.component';
import { AdminModule } from '@admin/admin.module';
import { ViewGetComponent } from './pages/view-get/view-get.component';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  declarations: [
    NavbarComponent,
    InicioComponent,
    LoginComponent,
    SigninComponent,
    ViewGetComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MaterialModule,
    AdminModule,
    QRCodeModule,
  ],
})
export class HomeModule {}
