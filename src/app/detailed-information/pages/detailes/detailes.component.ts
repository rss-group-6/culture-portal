import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { DirectorService } from '../../services/director.service';
import { Observable } from 'rxjs';
import { Director } from '@shared/models/director';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-detailes',
  templateUrl: './detailes.component.html',
  styleUrls: ['./detailes.component.scss'],
})
export class DetailesComponent implements OnInit {
  public director: Director;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private directorService: DirectorService,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.director = this.directorService.getDirectorById(params.id);
      console.log(this.director);
    });
  }
}
