import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DirectorService } from '../../services/director.service';
import { Director } from '@shared/models/director';

@Component({
  selector: 'app-detailes',
  templateUrl: './detailes.component.html',
  styleUrls: ['./detailes.component.scss'],
})
export class DetailesComponent implements OnInit {
  public director: Director;
  public currentVideo: string;

  constructor(private route: ActivatedRoute, private directorService: DirectorService) {}

  public ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.director = this.directorService.getDirectorById(params.id);
      console.log(this.director);
    });
  }
}
