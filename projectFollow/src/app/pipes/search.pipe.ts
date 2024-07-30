import { Pipe, PipeTransform } from '@angular/core';
import { Project } from '../models/project.model';

@Pipe({
  name: 'search',
  standalone: true,
})
export class SearchPipe implements PipeTransform {
  transform(value: Project[], keyword: string): Project[] {
    return keyword != undefined
      ? value.filter((p) => p.name?.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()))
      : value;
  }
}
