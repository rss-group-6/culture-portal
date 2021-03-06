import { Injectable } from '@angular/core';
import { Director } from '@shared/models/director';
import { Directors } from '@shared/mock-data/mock.directors';
import { Directors as DirectorsBE } from '@shared/mock-data/mock.directorsBE';
import { Directors as DirectorsEN } from '@shared/mock-data/mock.directorsEN';

@Injectable({
  providedIn: 'root',
})
export class DirectorService {
  constructor() {}

  public getDirectorById(id: string, lang: string): Director {
    if (lang === 'RU') {
      return Directors.find(director => director.id === id);
    } else if (lang === 'EN') {
      return DirectorsEN.find(director => director.id === id);
    }

    return DirectorsBE.find(director => director.id === id);
  }
}
