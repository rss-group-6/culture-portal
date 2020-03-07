export interface Director {
    name: string,
    surname: string,
    yearsOfLife: string,
    biography: {
        date: string,
        content: string
    }[],
    listOfWorks: {
        date: string,
        work: string
    }[],
    photos: any[],
    videos: string[],
    placesOfActivity: {
        activity: string,
        mapLink: string
    }[]
}