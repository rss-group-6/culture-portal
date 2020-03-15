import { Component } from '@angular/core';
import { StyleItem } from '@shared/models/style';
import { StyleItems } from '@shared/mock-data/mock.style';

@Component({
  selector: 'app-style-list',
  templateUrl: './style-list.component.html',
  styleUrls: ['./style-list.component.scss'],
})
export class StyleListComponent {
  styleItems: StyleItem[] = StyleItems;
}
