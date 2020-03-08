import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WorklogService {
  public counter = 0;

  public getCurrentMember($event): void {
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
  }
}
