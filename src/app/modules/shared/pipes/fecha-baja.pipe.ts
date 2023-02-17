import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fechaBaja',
})
export class FechaBajaPipe implements PipeTransform {
  transform(value: string): string {
    console.log(value);

    if (value === undefined) {
      return 'No ha sido dado de baja';
    } else {
      return value;
    }
  }
}
