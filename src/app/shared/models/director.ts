import { Sys } from 'contentful';

interface Image {
  width: number;
  height: number;
}

interface Details {
  size: number;
  image: Image;
}

interface File {
  url: string;
  details: Details;
  fileName: string;
  contentType: string;
}

interface Photos {
  sys: Sys;
  fields: {
    title: string;
    file: File;
  };
}

export interface Biography {
  date: string;
  content: string;
}

export interface ListOfWorks {
  date?: string;
  work: string;
}

export interface PlacesOfActivity {
  center: number[];
  activity: string;
}

export interface Director {
  name: string;
  surname: string;
  id: string;
  yearsOfLife: string;
  birthPlace: string;
  generalInfo: string;
  biography: Biography[];
  listOfWorks: ListOfWorks[];
  photos: Photos[];
  videos?: string[];
  placesOfActivity?: PlacesOfActivity[];
}
