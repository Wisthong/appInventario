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
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [NavbarComponent, InicioComponent, LoginComponent, SigninComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MaterialModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
  ],
})
export class HomeModule {}
