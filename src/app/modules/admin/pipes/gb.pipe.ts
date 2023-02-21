import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gb',
})
export class GbPipe implements PipeTransform {
  transform(value: number): string {
    if (value > 0) {
      return value.toString() + ' gb';
    } else {
      return value.toString();
    }
  }
}
