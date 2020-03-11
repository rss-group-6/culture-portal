import { Injectable } from '@angular/core';
import { Director } from '@shared/models/director';
import { Directors } from '@shared/mock-data/mock.directors';

@Injectable({
  providedIn: 'root',
})
export class DirectorService {
  constructor() {}

  public getDirectorById(id: string): Director {
    return Directors.find(director => director.id === id);
  }
}
