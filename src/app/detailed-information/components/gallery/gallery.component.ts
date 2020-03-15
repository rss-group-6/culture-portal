import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  @Input() public photos: string[];
  public currentImage: string;

  constructor(private modalService: NgbModal) {}

  public ngOnInit(): void {}

  public openVerticallyCentered(content: any, image: string): void {
    this.modalService.open(content, { centered: true, size: 'xl' });
    this.currentImage = image;
  }
}
