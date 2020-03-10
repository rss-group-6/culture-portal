import { Component, OnInit } from '@angular/core';
import { GetRandomAuthorService } from '@core/services/get-random-author.service';
import { Director } from '@shared/models/director';

@Component({
  selector: 'app-director-of-day-page',
  templateUrl: './director-of-day-page.component.html',
  styleUrls: ['./director-of-day-page.component.scss']
})
export class DirectorOfDayPageComponent implements OnInit {
  public author: Director;

  constructor(private service: GetRandomAuthorService) {
    this.service.author$.subscribe(
      (director) => {
        this.author = director;
      }
    );
  }

  ngOnInit(): void {
    this.service.getAuthor();
  }

}
