import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SliderConfig } from '../../models/SliderConfig';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  @Input() public photos: string[];
  public currentImage: string;

  public slideConfig: SliderConfig = {
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true,
    centerMode: true,
  };

  constructor(private modalService: NgbModal) {}

  public openVerticallyCentered(content: any, image: string): void {
    this.modalService.open(content, { centered: true, size: 'xl' });
    this.currentImage = image;
  }
}
