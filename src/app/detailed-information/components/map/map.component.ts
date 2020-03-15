import {Component, Input} from '@angular/core';
import { PlacesOfActivity } from '@shared/models/director';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  @Input() public placesOfActivity: PlacesOfActivity[];

  public setMarkerText(text: string): { hintContent: string; balloonContent: string } {
    return {
      hintContent: '',
      balloonContent: text,
    };
  }
}
