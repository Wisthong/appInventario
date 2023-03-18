import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { FormsComponent } from './components/forms/forms.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';
import { GeneralComponent } from './pages/listas/general/general.component';
import { CerrarsesionComponent } from './components/cerrarsesion/cerrarsesion.component';
import { GbPipe } from './pipes/gb.pipe';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  declarations: [
    FormsComponent,
    DashboardComponent,
    NavbarComponent,
    GeneralComponent,
    CerrarsesionComponent,
    GbPipe,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule,
    QRCodeModule,
  ],
  exports: [GbPipe],
})
export class AdminModule {}
