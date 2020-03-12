import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class LanguageService {
  public subject: BehaviorSubject<string> = new BehaviorSubject<string>('EN');

  public setLanguage(lang: string): void {
    this.subject.next(lang);
  }

  public getLanguage(): Observable<string> {
    return this.subject.asObservable();
  }
}
