import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondsToTime'
})
export class TimePipe implements PipeTransform {
  times = {
    D: 86400,
    H: 3600,
    M: 60,
    S: 1
  }

  transform(seconds){
    let time_string: string = '';
    let plural: string = '';
    for(var key in this.times){
      if(Math.floor(seconds / this.times[key]) > 0) {
        time_string += key.toString()+':' +(Math.floor(seconds / this.times[key]).toString())+'/';
        seconds = seconds - this.times[key] * Math.floor(seconds / this.times[key]);
      }
    }
    return time_string;
  }
}