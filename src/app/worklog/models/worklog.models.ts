export interface Item {
  id: number;
  points: string;
  title: string;
  completed: boolean;
}

export interface WorkLog {
  name: string;
  item: Item[];
}

export const GeneralLog: WorkLog[] = [
  {
    name: 'General',
    item: [
      {
        id: 1,
        points: '10',
        title: `Main page + page with a list of authors + author's page (only pages with content without widgets)`,
        completed: true,
      },
      {
        id: 2,
        points: '10',
        title: `Page with team members + page with worklog`,
        completed: true,
      },
      {
        id: 3,
        points: '10',
        title: `Page with list of authors contains search widget`,
        completed: true,
      },
      {
        id: 4,
        points: '20',
        title: `Portal has two languages`,
        completed: true,
      },
      { id: 5, points: '20', title: `Portal has page with style guide`, completed: true },
      { id: 6, points: '10', title: `Mobile version is okay`, completed: true },
      { id: 7, points: '10', title: `Ipad/tablet version is okay`, completed: true },
      { id: 8, points: '10', title: `Author's page contains timeline`, completed: true },
      { id: 9, points: '10', title: `Author's page contains video overlay`, completed: true },
      { id: 10, points: '20', title: `Author's page contains photo gallery`, completed: true },

      { id: 11, points: '10', title: `Author's page contains map (geo widget)`, completed: true },
      {
        id: 12,
        points: '20',
        title: `Design (typography, icons, colors, links + buttons + input, ui components are styled)`,
        completed: true,
      },
      { id: 13, points: '10', title: `Material-ui / bootstrap is used`, completed: true },
      { id: 14, points: '10', title: `Portal has third language`, completed: true },

      { id: 15, points: '10', title: `Confidence of the project presentation`, completed: true },
      {
        id: 16,
        points: '10',
        title: `Project is made using scully`,
        completed: true,
      },
      {
        id: 17,
        points: '10',
        title: `Contentful / netlify cms / other cms is used for content management`,
        completed: true,
      },
      { id: 18, points: '20', title: `Animations / special effects like paralax`, completed: true },
      { id: 19, points: '20', title: `Outstanding design`, completed: true },
      {
        id: 20,
        points: '20',
        title: `Storybook/styleguidist/other react style guide tool usage for the page with styles`,
        completed: true,
      },
    ],
  },
  {
    name: 'EVGENY KRAVCHENKO',
    item: [
      {
        id: 1,
        points: '0.5 hr',
        title: 'Add typography to project',
        completed: false,
      },
      {
        id: 2,
        points: '0.5 hr',
        title: 'Add bootstrap to project',
        completed: true,
      },
      {
        id: 3,
        points: '0.5 hr',
        title: 'Add bootstrap to project',
        completed: true,
      },
      {
        id: 4,
        points: '0.5 hr',
        title: 'Add routing to project',
        completed: true,
      },
      {
        id: 5,
        points: '3.0 hr',
        title: 'Work on header component',
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
        title: 'Generate project',
        completed: true,
      },
      {
        id: 2,
        points: '0.5 hr',
        title: 'Collect team data',
        completed: true,
      },
      {
        id: 3,
        points: '0.5 hr',
        title: 'Work on team component',
        completed: true,
      },
    ],
  },
  {
    name: 'MIKHAIL SIDARKEVICH',
    item: [
      {
        id: 1,
        points: '8 hr',
        title: 'Work on work log page',
        completed: true,
      },
      {
        id: 2,
        points: '2 hr',
        title: 'Collect team work log data',
        completed: true,
      },
      {
        id: 3,
        points: '2 hr',
        title: 'Work log mockup and styles',
        completed: true,
      },
    ],
  },
  {
    name: 'MIKHAIL SHCHEGLAKOV',
    item: [
      {
        id: 1,
        points: '8 hr',
        title: 'Work on work log page',
        completed: true,
      },
    ],
  },
  {
    name: 'MARIA GOLOMB',
    item: [
      {
        id: 1,
        points: '1 hr',
        title: 'Add core and shared modules',
        completed: true,
      },
      {
        id: 2,
        points: '1 hr',
        title: `work on 'directors' component`,
        completed: true,
      },
    ],
  },
  {
    name: 'ANASTASIYA POPOVA',
    item: [
      {
        id: 1,
        points: '8 hr',
        title: 'create a necessary modules',
        completed: true,
      },
      {
        id: 2,
        points: '8 hr',
        title: 'collect data about directors',
        completed: true,
      },
      {
        id: 2,
        points: '8 hr',
        title: 'work on director of the day component',
        completed: true,
      },
    ],
  },
];
