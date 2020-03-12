import { Component, OnInit } from '@angular/core';
import { GeneralLog } from '../../models/worklog.models';
import { WorklogService } from '../../services/worklog.service';
import { LanguageService } from '@core/services/language.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-member-log',
  templateUrl: './member-log.component.html',
  styleUrls: ['./member-log.component.scss'],
})
export class MemberLogComponent implements OnInit {
  public logs = GeneralLog;
  public counter = this.worklogService.counter;

  constructor(
    public worklogService: WorklogService,
    private languageService: LanguageService,
    public translate: TranslateService,
  ) {
    this.languageService.getLanguage().subscribe(lang => {
      this.translate.use(lang);
    });
  }

  public ngOnInit(): void {
    this.translate.setDefaultLang('EN');
  }

  public findItem(id: number): void {
    this.logs[this.worklogService.counter].item[id - 1].completed = !this.logs[this.worklogService.counter]
      .item[id - 1].completed;
  }

  public calculateTotal(language: string): string {
    let acc = 0;
    let total: string;

    if (this.worklogService.counter === 0) {
      this.logs[this.worklogService.counter].item.map(e => {
        if (e.completed) {
          acc += +e.points;
        }
      });
    }

    if (this.worklogService.counter) {
      this.logs[this.worklogService.counter].item.map(e => {
        if (e.completed) {
          acc += +e.points.slice(0, -3);
        }
      });
    }

    switch (language) {
      case 'RU':
        !this.worklogService.counter ? (total = `Всего: ${acc} баллов`) : (total = `Всего: ${acc} часа(ов)`);
        break;
      case 'EN':
        !this.worklogService.counter ? (total = `Total: ${acc} pt`) : (total = `Total: ${acc} hr`);
        break;
      case 'BE':
        !this.worklogService.counter ? (total = `Усяго: ${acc} балаў`) : (total = `Усяго: ${acc} гадзін(ы)`);
        break;
    }

    return total;
  }
}
