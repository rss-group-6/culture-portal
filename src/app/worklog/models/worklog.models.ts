export interface Item {
  id: number;
  points: string;
  title: string;
  completed: boolean;
}

export interface WorkLog {
  EN: {
    name: string;
    difficultiesLn?: string;
    difficulties?: string[];
    item: Item[];
  }[];
  RU: {
    name: string;
    difficultiesLn?: string;
    difficulties?: string[];
    item: Item[];
  }[];
  BE: {
    name: string;
    difficultiesLn?: string;
    difficulties?: string[];
    item: Item[];
  }[];
}

export const GeneralLog: WorkLog = {
  EN: [
    {
      name: 'general work log',
      difficultiesLn: 'difficulties during create project',
      difficulties: [
        'find time to develop a project',
        'Translation of data into different languages',
        `Understanding Ng-bootstrap's internal workflow`,
      ],
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
        { id: 13, points: '20', title: `Material-ui / bootstrap is used`, completed: true },
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
      difficulties: [''],
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
  ],
  RU: [
    {
      name: 'Общий рабочий журнал',
      difficultiesLn: 'Трудности при разработки проекта',
      difficulties: [
        'Найти время на разработку проекта',
        'Перевод данных на разные языки',
        'Разбраться во внутреннем устройстве работы Ng-bootstrap',
      ],
      item: [
        {
          id: 1,
          points: '10',
          title: `Главная страница + страница со списком авторов + страница автора`,
          completed: true,
        },
        {
          id: 2,
          points: '10',
          title: `Страница с членами команды + страница с рабочим журналом`,
          completed: true,
        },
        {
          id: 3,
          points: '10',
          title: `Страница со списком авторов и поиском`,
          completed: true,
        },
        {
          id: 4,
          points: '20',
          title: `Портал имеет два языка`,
          completed: true,
        },
        { id: 5, points: '20', title: `На портале есть страница с руководством по стилю`, completed: true },
        { id: 6, points: '10', title: `Мобильная версия`, completed: true },
        { id: 7, points: '10', title: `Версия для планшетов`, completed: true },
        { id: 8, points: '10', title: `Страница автора содержит временную шкалу`, completed: true },
        { id: 9, points: '10', title: `Страница автора содержит видео`, completed: true },
        { id: 10, points: '20', title: `Страница автора содержит фотогалерею`, completed: true },

        {
          id: 11,
          points: '10',
          title: `Страница автора содержит карту (гео виджет)`,
          completed: true,
        },
        {
          id: 12,
          points: '20',
          title: `Дизайн (типографика, значки, цвета, ссылки + кнопки + ввод, стилизованы компоненты пользовательского интерфейса)`,
          completed: true,
        },
        { id: 13, points: '20', title: `Используется material-ui / bootstrap`, completed: true },
        { id: 14, points: '10', title: `Портал имеет третий язык`, completed: true },

        { id: 15, points: '10', title: `Уверенная презентация проекта`, completed: true },
        {
          id: 16,
          points: '10',
          title: `Проект разработан с использованием scully`,
          completed: true,
        },
        {
          id: 17,
          points: '10',
          title: `CMS используется для управления контентом`,
          completed: true,
        },
        { id: 18, points: '20', title: `Анимации / спецэффекты, такие как параллакс`, completed: true },
        { id: 19, points: '20', title: `Современный дизайн`, completed: true },
        {
          id: 20,
          points: '20',
          title: `Руководство по использованию страницы со стилями`,
          completed: true,
        },
      ],
    },
    {
      name: 'евгений кравченко',
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
      name: 'екатерина лисюк',
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
      name: 'михаил сидоркевич',
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
      name: 'Mихаил щеглаков',
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
      name: 'мария голомб',
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
      name: 'анастасия попова',
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
  ],
  BE: [
    {
      name: 'Агульны працоўны часопіс',
      difficultiesLn: 'Цяжкасці пры распрацоўцы праекта',
      difficulties: [
        'Знайсці час на распрацоўку праекта',
        'Пераклад дадзеных на розныя мовы',
        'Разбраться ва ўнутраным прыладзе працы Ng-bootstrap',
      ],
      item: [
        {
          id: 1,
          points: '10',
          title: `Галоўная старонка + старонка са спісам аўтараў + старонка аўтара`,
          completed: true,
        },
        {
          id: 2,
          points: '10',
          title: `Старонка з членамі каманды + старонка з рабочым часопісам`,
          completed: true,
        },
        {
          id: 3,
          points: '10',
          title: `Старонка са спісам аўтараў і пошукам`,
          completed: true,
        },
        {
          id: 4,
          points: '20',
          title: `Партал мае дзве мовы`,
          completed: true,
        },
        { id: 5, points: '20', title: `На партале ёсць старонка з кіраўніцтвам па стылі`, completed: true },
        { id: 6, points: '10', title: `мабільная версія`, completed: true },
        { id: 7, points: '10', title: `Версія для планшэтаў`, completed: true },
        { id: 8, points: '10', title: `Старонка аўтара змяшчае часовую шкалу`, completed: true },
        { id: 9, points: '10', title: `Старонка аўтара утрымлівае відэа`, completed: true },
        { id: 10, points: '20', title: `Старонка аўтара змяшчае фотагалерэю`, completed: true },

        {
          id: 11,
          points: '10',
          title: `Старонка аўтара змяшчае карту (гео віджэт)`,
          completed: true,
        },
        {
          id: 12,
          points: '20',
          title: `Дызайн (тыпаграфікі, значкі, колеру, спасылкі + кнопкі + ўвод, стылізаваныя кампаненты карыстацкага інтэрфейсу)`,
          completed: true,
        },
        { id: 13, points: '20', title: `Выкарыстоўваецца Material-ui / bootstrap`, completed: true },
        { id: 14, points: '10', title: `Партал мае тры мовы`, completed: true },

        { id: 15, points: '10', title: `Упэўненая прэзентацыя праекта`, completed: true },
        {
          id: 16,
          points: '10',
          title: `Праект распрацаваны з выкарыстаннем scully`,
          completed: true,
        },
        {
          id: 17,
          points: '10',
          title: `CMS выкарыстоўваецца для кіравання кантэнтам`,
          completed: true,
        },
        { id: 18, points: '20', title: `Анімацыі / спецэфекты, такія як паралакс`, completed: true },
        { id: 19, points: '20', title: `Сучасны дызайн`, completed: true },
        {
          id: 20,
          points: '20',
          title: `Кіраўніцтва па выкарыстанні старонкі са стылямі`,
          completed: true,
        },
      ],
    },
    {
      name: 'яўген краўчанка',
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
      name: 'кацярына лясюк',
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
      name: 'міхаіл сідаркевіч',
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
      name: 'міхаіл шчаглакоў',
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
      name: 'марыя галомб',
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
      name: 'анастасія папова',
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
  ],
};
