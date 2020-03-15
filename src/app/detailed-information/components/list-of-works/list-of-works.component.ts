import { Component, Input } from '@angular/core';
import { ListOfWorks } from '@shared/models/director';

@Component({
  selector: 'app-list-of-works',
  templateUrl: './list-of-works.component.html',
  styleUrls: ['./list-of-works.component.scss'],
})
export class ListOfWorksComponent {
  @Input() public listOfWorks: ListOfWorks[];
}
