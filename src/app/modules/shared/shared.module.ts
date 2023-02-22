import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableRegisterComponent } from './components/table-register/table-register.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [TableRegisterComponent],
  imports: [CommonModule,MaterialModule],
  exports: [TableRegisterComponent],
})
export class SharedModule {}
