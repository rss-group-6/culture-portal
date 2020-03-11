import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class LanguageService {
  public subject: Subject<string> = new Subject<string>();

  public setLanguage(lang: string): void {
    this.subject.next(lang);
  }

  public getLanguage(): Observable<string> {
    return this.subject.asObservable();
  }
}
