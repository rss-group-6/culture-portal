import { Component, OnInit } from '@angular/core';
import { GeneralLog } from '../../models/worklog.models';
import { WorklogService } from '../../services/worklog.service';

@Component({
  selector: 'app-member-log',
  templateUrl: './member-log.component.html',
  styleUrls: ['./member-log.component.scss'],
})
export class MemberLogComponent {
  public logs = GeneralLog;
  public generalDifficulties =
    GeneralLog[this.worklogService.lang][this.worklogService.counter].difficultiesLn;

  constructor(public worklogService: WorklogService) {}

  public findItem(id: number): void {
    this.logs[this.worklogService.lang][this.worklogService.counter].item[id - 1].completed = !this.logs[
      this.worklogService.lang
    ][this.worklogService.counter].item[id - 1].completed;
  }

  public calculateTotal(lang: string): string {
    let acc = 0;
    let total: string;

    if (this.worklogService.counter === 0) {
      this.logs[lang][this.worklogService.counter].item.map(e => {
        if (e.completed) {
          acc += +e.points;
        }
      });
    }

    if (this.worklogService.counter) {
      this.logs[lang][this.worklogService.counter].item.map(e => {
        if (e.completed) {
          acc += +e.points.slice(0, -3);
        }
      });
    }

    switch (lang) {
      case 'RU':
        !this.worklogService.counter ? (total = `Всего: ${acc} баллов`) : (total = `Всего: ${acc} часа(ов)`);
        break;
      case 'EN':
        !this.worklogService.counter ? (total = `Total: ${acc} pt`) : (total = `Total: ${acc} hr`);
        break;
      case 'BY':
        !this.worklogService.counter ? (total = `Усяго: ${acc} балаў`) : (total = `Усяго: ${acc} гадзін(ы)`);
        break;
    }

    return total;
  }
}
