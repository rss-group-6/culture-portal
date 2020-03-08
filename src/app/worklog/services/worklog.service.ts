import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WorklogService {
  public counter = 0;
  private member = 0;
  public lang = 'RU';

  constructor() {}

  public getCurrentMember($event): number {
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

    return this.member;
  }
}
