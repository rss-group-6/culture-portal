import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WorklogService {
  public counter = 0;
  public member = 0;
  public general: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() {}

  public increase() {
    this.counter += 1;
  }

  getCurrentMember($event) {
    const event = $event.target.className;
    if (event === 'carousel-control-next-icon' || event === 'carousel-control-next') {
      this.counter += 1;
      if (this.counter > 6) {
        this.counter = 0;
      }
    }
    if (event === 'carousel-control-prev-icon' || event === 'carousel-control-prev') {
      this.counter -= 1;
      if (this.counter < 0) {
        this.counter = 6;
      }
    }

    if (this.counter) {
      this.general.next(true);
    } else {
      this.general.next(false);
    }
    return this.member;
  }
}
