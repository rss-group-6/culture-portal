import { Injectable } from '@angular/core';
import { Director } from '@shared/models/director';
import { Directors } from '@shared/mock-data/mock.directors';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetRandomAuthorService {
  public directors: Director[] = Directors;
  public author: Subject<number> = new Subject<number>();
  public author$: Observable<number> = this.author.asObservable();

  constructor() { }

  public getAuthor(): void {
    // const director = this.directors[Math.floor(Math.random() * this.directors.length)];
    const director = Math.floor(Math.random() * this.directors.length);
    this.author.next(director);
  }
}
