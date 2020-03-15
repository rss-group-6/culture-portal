import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  @Input() public photos: string[];
  public currentImage: string;

  constructor(private modalService: NgbModal) {}

  public openVerticallyCentered(content: any, image: string): void {
    this.modalService.open(content, { centered: true, size: 'xl' });
    this.currentImage = image;
  }
}
