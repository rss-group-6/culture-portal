export interface Director {
  name: string;
  surname: string;
  yearsOfLife: string;
  generalInfo: string;
  biography: {
    date: string;
    content: string;
  }[];
  listOfWorks: {
    date: string;
    work: string;
  }[];
  photos: string[];
  videos: string[];
  placesOfActivity: {
    activity: string;
    mapLink: string;
  }[];
}
