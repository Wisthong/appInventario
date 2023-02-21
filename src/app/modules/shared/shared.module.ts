import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableRegisterComponent } from './components/table-register/table-register.component';
import { FechaBajaPipe } from './pipes/fecha-baja.pipe';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [TableRegisterComponent, FechaBajaPipe],
  imports: [CommonModule,MaterialModule],
  exports: [TableRegisterComponent],
})
export class SharedModule {}
