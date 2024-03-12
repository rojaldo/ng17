import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten',
  standalone: true
})
export class ShortenPipe implements PipeTransform {

  transform(value: string, ...args: number[]): string {
    console.log('shorten: ');
    if(!args.length) return value;
    else return value.substring(0, args[0]) + '...';
  }

}
