import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  public language = 'EN';

  constructor() {}

  public setLanguage(lang: string): void {
    this.language = lang;
  }
}
