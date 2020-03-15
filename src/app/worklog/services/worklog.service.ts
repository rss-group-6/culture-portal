import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WorklogService {
  public counter = 0;

  public getCurrentMember($event): void {
    const controlNext = $event.target.classList.contains('carousel-control-next');
    const controlNextIcon = $event.target.classList.contains('carousel-control-next-icon');
    const controlPrev = $event.target.classList.contains('carousel-control-prev');
    const controlPrevIcon = $event.target.classList.contains('carousel-control-prev-icon');

    if (controlNext || controlNextIcon) {
      this.counter += 1;
      if (this.counter > 6) {
        this.counter = 0;
      }
    }
    if (controlPrev || controlPrevIcon) {
      this.counter -= 1;
      if (this.counter < 0) {
        this.counter = 6;
      }
    }
  }
}
