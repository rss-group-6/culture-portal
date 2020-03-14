import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
})
export class VideosComponent implements OnInit {
  @Input() public videos: string[];
  public currentVideo: string;

  constructor(private modalService: NgbModal) {}

  public ngOnInit(): void {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

  public openVerticallyCentered(content: any, video: string): void {
    this.modalService.open(content, { centered: true, size: 'xl' });
    this.currentVideo = video;
  }

  public getVideoId(url: string): string {
    const id: string = url.match(/v\=[A-Za-z0-9]+/)[0];
    console.log(id);
    return id.slice(2);
  }
}
