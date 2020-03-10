import { Injectable } from '@angular/core';
import { Director } from '@shared/models/director';
import { Directors } from '../../shared/mock-data/mock.directors';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetRandomAuthorService {
  public directors: Director[] = Directors;
  public author: Subject<Director> = new Subject<Director>();
  public author$: Observable<Director> = this.author.asObservable();

  constructor() { }

  public getAuthor(): void {
    const director = this.directors[Math.floor(Math.random() * this.directors.length)];
    this.author.next(director);
  }
}
