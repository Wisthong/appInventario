import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GestionUserComponent } from './pages/gestion-user/gestion-user.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [NavbarComponent, GestionUserComponent],
  imports: [CommonModule, MasterRoutingModule, MaterialModule],
})
export class MasterModule {}
