import { Pipe, PipeTransform } from '@angular/core';
import { Director } from '@shared/models/director';

@Pipe({
  name: 'searchByParam',
})
export class SearchByParamPipe implements PipeTransform {
  public transform(value: Director[], ...args: string[]): Director[] {
    if (!args[0] || args[0].length < 3) {
      return value;
    } else {
      return this.search(value, args);
    }
  }

  private search(value: Director[], args: string[]): Director[] {
    console.log(value);
    const paramName = 'name';
    const paramCity = 'city';
    const paramSearch = args[0].toLowerCase();
    switch (args[1]) {
      case paramName:
        return value.filter(
          item =>
            item.name.toLowerCase().indexOf(paramSearch) !== -1 ||
            item.surname.toLowerCase().indexOf(paramSearch) !== -1,
        );
      case paramCity:
        return value.filter(item => item.birthPlace.toLowerCase().indexOf(paramSearch) !== -1);
      default:
        return value;
    }
  }
}
