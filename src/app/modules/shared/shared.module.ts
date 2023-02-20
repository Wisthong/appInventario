import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableRegisterComponent } from './components/table-register/table-register.component';
import { FechaBajaPipe } from './pipes/fecha-baja.pipe';

@NgModule({
  declarations: [TableRegisterComponent, FechaBajaPipe],
  imports: [CommonModule],
  exports: [TableRegisterComponent],
})
export class SharedModule {}
