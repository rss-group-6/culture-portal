import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DirectorService } from '../../services/director.service';
import { Director } from '@shared/models/director';
import { LanguageService } from '@core/services/language.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-detailes',
  templateUrl: './detailes.component.html',
  styleUrls: ['./detailes.component.scss'],
})
export class DetailesComponent implements OnInit {
  public director: Director;
  public currentVideo: string;
  public language = 'EN';
  public id: string;

  constructor(
    private route: ActivatedRoute,
    private directorService: DirectorService,
    private translate: TranslateService,
    private languageService: LanguageService,
  ) {
    this.languageService.getLanguage().subscribe(lang => {
      this.translate.use(lang);
      this.language = lang;
      this.getDirector(this.id);
    });
  }

  public ngOnInit(): void {
    this.translate.setDefaultLang('EN');
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.getDirector(params.id);
    });
  }

  public getDirector(id: string): void {
    this.director = this.directorService.getDirectorById(id, this.language);
  }
}
