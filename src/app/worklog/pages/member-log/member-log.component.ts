import { Component } from '@angular/core';
import { GeneralLog } from '../../models/worklog.models';
import { WorklogService } from '../../services/worklog.service';

@Component({
  selector: 'app-member-log',
  templateUrl: './member-log.component.html',
  styleUrls: ['./member-log.component.scss'],
})
export class MemberLogComponent {
  public logs = GeneralLog;

  constructor(public worklogService: WorklogService) {}

  public findItem(id: number): void {
    this.logs[this.worklogService.counter].item[id - 1].completed = !this.logs[this.worklogService.counter]
      .item[id - 1].completed;
  }

  public calculateTotal(): string {
    let acc = 0;
    let total: string;

    if (this.worklogService.counter === 0) {
      this.logs[this.worklogService.counter].item.map(e => {
        if (e.completed) {
          acc += +e.points;
        }
      });
      total = `Total: ${acc} pt`;
    } else {
      this.logs[this.worklogService.counter].item.map(e => {
        if (e.completed) {
          acc += +e.points.slice(0, -3);
        }
      });
      total = `Total: ${acc} hr`;
    }

    return total;
  }
}
