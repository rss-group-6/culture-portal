export interface Item {
  id: number;
  points: string;
  title: string;
  completed: boolean;
  name?: string;
}

export interface WorkLog {
  name: string;
  item: Item[];
}

export const GeneralLog: WorkLog[] = [
  {
    name: 'general work log',
    item: [
      {
        id: 1,
        points: '10',
        title: 'MainPage',
        completed: true,
      },
      {
        id: 2,
        points: '10',
        title: `teamPage`,
        completed: true,
      },
      {
        id: 3,
        points: '10',
        title: `authorPage`,
        completed: true,
      },
      {
        id: 4,
        points: '20',
        title: `twoLanguage`,
        completed: true,
      },
      { id: 5, points: '20', title: `styleguidePage`, completed: true },
      { id: 6, points: '10', title: `mobileVersion`, completed: true },
      { id: 7, points: '10', title: `ipdaVersion`, completed: true },
      { id: 8, points: '10', title: `authorPageTimeline`, completed: true },
      { id: 9, points: '10', title: `authorPageVideo`, completed: true },
      { id: 10, points: '20', title: `authorPagePhotoGallery`, completed: true },

      { id: 11, points: '10', title: `authorPageGeowidget`, completed: true },
      {
        id: 12,
        points: '20',
        title: `design`,
        completed: true,
      },
      { id: 13, points: '20', title: `bootstrap`, completed: true },
      { id: 14, points: '10', title: `thirdLanguage`, completed: true },

      { id: 15, points: '10', title: `presentation`, completed: true },
      {
        id: 16,
        points: '10',
        title: `useScully`,
        completed: false,
      },
      {
        id: 17,
        points: '10',
        title: `cms`,
        completed: false,
      },
      { id: 18, points: '20', title: `animation`, completed: true },
      { id: 19, points: '20', title: `outstandingDesigne`, completed: true },
      {
        id: 20,
        points: '20',
        title: `storybook`,
        completed: false,
      },
    ],
  },
  {
    name: 'EVGENY KRAVCHENKO',
    item: [
      {
        id: 1,
        points: '0.5 hr',
        title: 'typography',
        completed: true,
      },
      {
        id: 2,
        points: '0.5 hr',
        title: 'addBootstrap',
        completed: true,
      },
      {
        id: 3,
        points: '0.5 hr',
        title: 'lazyloaded',
        completed: true,
      },
      {
        id: 4,
        points: '2.0 hr',
        title: 'header',
        completed: true,
      },
      {
        id: 5,
        points: '2.0 hr',
        title: 'portalDescription',
        completed: true,
      },
      {
        id: 6,
        points: '4.0 hr',
        title: 'i18n',
        completed: true,
      },
      {
        id: 7,
        points: '4.0 hr',
        title: 'headerTranslate',
        completed: true,
      },
      {
        id: 8,
        points: '4.0 hr',
        title: 'portalDescriptionTranslate',
        completed: true,
      },
    ],
  },
  {
    name: 'EKATERINA LYSIUK',
    item: [
      {
        id: 1,
        points: '0.5 hr',
        title: 'initProject',
        completed: true,
      },
      {
        id: 2,
        points: '1.0 hr',
        title: 'developerListData',
        completed: true,
      },
      {
        id: 3,
        points: '4.0 hr',
        title: 'ourTeamPage',
        completed: true,
      },
      {
        id: 3,
        points: '1.0 hr',
        title: 'ourTeamPageTranslate',
        completed: true,
      },
      {
        id: 4,
        points: '4.0 hr',
        title: 'createStyleGuide',
        completed: true,
      },
    ],
  },
  {
    name: 'MIKHAIL SIDARKEVICH',
    item: [
      {
        id: 1,
        points: '0.5 hr',
        title: 'worklogPage',
        completed: true,
      },
      {
        id: 2,
        points: '1.0 hr',
        title: 'collectLogData',
        completed: true,
      },
      {
        id: 3,
        points: '2.0 hr',
        title: 'worklogMockup',
        completed: true,
      },
      {
        id: 4,
        points: '1.0 hr',
        title: 'teamNamesCarousel',
        completed: true,
      },
      {
        id: 5,
        points: '2.0 hr',
        title: 'memberLogComponent',
        completed: true,
      },
      {
        id: 6,
        points: '1.0 hr',
        title: 'total',
        completed: true,
      },
      {
        id: 7,
        points: '3.0 hr',
        title: 'refactorWorklogData',
        completed: true,
      },
      {
        id: 8,
        points: '3.0 hr',
        title: 'worklogDictionary',
        completed: true,
      },
      {
        id: 9,
        points: '2.0 hr',
        title: 'worklogTranslate',
        completed: true,
      },
    ],
  },
  {
    name: 'MIKHAIL SHCHEGLAKOV',
    item: [
      {
        id: 1,
        points: '2.0 hr',
        title: 'detailedInformationPage',
        completed: true,
      },
      {
        id: 2,
        points: '4.0 hr',
        title: 'authorPageTimelineTask',
        completed: true,
      },
      {
        id: 3,
        points: '2.0 hr',
        title: 'authorPageVideoTask',
        completed: true,
      },
      {
        id: 4,
        points: '4.0 hr',
        title: 'authorPagePhotoGalleryTask',
        completed: true,
      },
      {
        id: 5,
        points: '2.0 hr',
        title: 'authorPageGeowidgetTask',
        completed: true,
      },
    ],
  },
  {
    name: 'MARIA GOLOMB',
    item: [
      {
        id: 1,
        points: '6.0 hr',
        title: 'createSharedModules',
        completed: true,
      },
      {
        id: 2,
        points: '6.0 hr',
        title: `directorsComponent`,
        completed: true,
      },
      {
        id: 3,
        points: '6.0 hr',
        title: `addSearch`,
        completed: true,
      },
    ],
  },
  {
    name: 'ANASTASIYA POPOVA',
    item: [
      {
        id: 1,
        points: '0.5 hr',
        title: 'createModules',
        completed: true,
      },
      {
        id: 2,
        points: '3.0 hr',
        title: 'collectMockDataRus',
        completed: true,
      },
      {
        id: 3,
        points: '4.0 hr',
        title: 'authorOfTheDay',
        completed: true,
      },
      {
        id: 4,
        points: '1.0 hr',
        title: 'getRandomAuthor',
        completed: true,
      },
      {
        id: 5,
        points: '0.5 hr',
        title: 'initWorklog',
        completed: true,
      },
      {
        id: 6,
        points: '2.0 hr',
        title: 'extraMockData',
        completed: true,
      },
      {
        id: 7,
        points: '1.0 hr',
        title: '404Page',
        completed: true,
      },
      {
        id: 8,
        points: '4.5 hr',
        title: 'translateMockData',
        completed: true,
      },
      {
        id: 9,
        points: '2.0 hr',
        title: 'translateAuthorOfTheDay',
        completed: true,
      },
    ],
  },
];
