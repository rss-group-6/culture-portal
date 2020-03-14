import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  @Input() public placesOfActivity: { activity: string; center: number[] }[];

  constructor() {}

  public ngOnInit(): void {}

  public setMarkerText(text: string): { hintContent: string; balloonContent: string } {
    return {
      hintContent: '',
      balloonContent: text,
    };
  }
}
