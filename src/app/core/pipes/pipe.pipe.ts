import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'pipe',
  pure:false
})
export class PipePipe implements PipeTransform {
string=""
  transform(value: any ,...args: unknown[]): any{
    if(value!== undefined && value!== null){
      return _.uniqBy(value, 'name');
  }
  return value;
}

}
