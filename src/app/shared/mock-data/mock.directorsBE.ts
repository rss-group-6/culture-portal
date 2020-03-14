// tslint:disable:max-line-length
import { Director } from '@shared/models/director';

export const Directors: Director[] = [
  {
    name: 'Еўсцiгней',
    surname: 'Miровiч',
    id: '1',
    yearsOfLife: '29 ліпеня [10 жнiўня], 1878 - 25 лютага, 1952',
    birthPlace: 'Санкт-Пецярбург, Расійская імперыя',
    generalInfo:
      'расійскі і беларускі савецкі акцёр, рэжысёр, драматург, педагог, прафесар (1945). Народны артыст Беларускай ССР (1940).',
    biography: [
      {
        date: '1900',
        content:
          'Прафесійную сцэнічную дзейнасць пачаў у 1900 году ў Пецярбургу як акцёр і рэжысёр. Гуляў у Адміралцейскім, Екацярынінскім, Кранштацкай тэатрах, з 1910 у тэатрах мініяцюр: Траецкім, інтымныя, Ліцейным.',
      },
      {
        date: '1921—1931',
        content:
          'Пачаў працаваць у тэатрах Беларусі. Мастацкі кіраўнік Беларускага дзяржаўнага драматычнага тэатра ў Мінску.',
      },
      {
        date: '1937—1940 ',
        content: 'Мастацкі кіраўнік Беларускага тэатра юнага гледача імя Н. Крупскай.',
      },
      {
        date: '1941—1945',
        content:
          'рэжысёр 1-га Беларускага дзяржаўнага драматычнага тэатра ў Мінску (цяпер - Нацыянальны акадэмічны тэатр імя Янкі Купалы).',
      },
      {
        date: '1945',
        content:
          ' Мастацкі кіраўнік і загадчык кафедры майстэрства акцёра Беларускага тэатральна-мастацкага інстытута. Прафесар. Займаўся таксама выкладчыцкай дзейнасцю ў тэатральных студыях, у Мінскім тэатральным вучылішчы.',
      },
    ],
    listOfWorks: [
      {
        date: '1923',
        work: 'Кастусь Калiновскi',
      },
      {
        date: '1927',
        work: 'Мяцеж',
      },
      {
        date: '1937',
        work: 'Як гартавалася сталь',
      },
      {
        date: '1939',
        work: 'Цудоўная дудка',
      },
    ],
    photos: [
      '../assets/images/mirovich1.jpg',
      '../assets/images/mirovich2.jpg',
      '../assets/images/mirovich3.jpg',
      '../assets/images/mirovich4.jpg',
      '../assets/images/mirovich5.jpg',
    ],
    videos: ['https://www.youtube.com/watch?v=Yunms45xnog&feature=emb_logo'],
    placesOfActivity: [
      {
        activity:
          '1-шы Беларускі дзяржаўны драматычны тэатр у Мінску (цяпер - Нацыянальны акадэмічны тэатр імя Янкі Купалы)',
        center: [53.90088357066573, 27.562774500000007],
      },
    ],
  },
  {
    name: 'Ларыса',
    surname: 'Александроўская',
    id: '2',
    generalInfo:
      'беларуская, савецкая оперная спявачка (сапрана), рэжысёр, публіцыст, грамадскі дзеяч. Народная артыстка СССР (1940).',
    yearsOfLife: '2 лютага [15 лютага], 1902 - 23 траўня, 1980',
    birthPlace: 'Мінск, Расійская імперыя',
    biography: [
      {
        date: '1924-1928',
        content: 'Вучылася ў Мінскім музычным тэхнікуме, у 1928 - у спецыяльным оперным класе.',
      },
      {
        date: '1933 - 1951',
        content:
          'Салістка Беларускага тэатра оперы і балета ў Мінску. Выконвала як сапранавага, так і мецца-сапранавага партыі. Падчас вайны выступаў з канцэртамі на франтах, у шпіталях і ў партызанскіх атрадах.',
      },
      {
        date: '1951—1960 ',
        content:
          "Была адначасова і галоўным рэжысёрам Беларускага тэатра оперы і балета. У год ёй атрымоўвалася выпускаць па два прэм'ерных спектакля.",
      },
      {
        date: '1946—1980',
        content: 'Ініцыятар стварэння і нязменны старшыня праўлення Беларускага тэатральнага грамадства.',
      },
    ],
    listOfWorks: [
      {
        date: '1951',
        work: 'Ціхі Дон',
      },
      {
        date: '1953',
        work: 'Аiда',
      },
      {
        date: '1954',
        work: 'Барыс Гадуноў',
      },
      {
        date: '1955',
        work: 'Трубадур',
      },
      {
        date: '1960',
        work: 'Пікавая дама',
      },
    ],
    photos: [
      '../assets/images/aleksandrovskaya1.jpg',
      '../assets/images/aleksandrovskaya2.jpg',
      '../assets/images/aleksandrovskaya3.jpg',
      '../assets/images/aleksandrovskaya4.jpg',
      '../assets/images/aleksandrovskaya5.jpg',
    ],
    videos: ['https://www.youtube.com/watch?v=v3LC9JtorMM'],
    placesOfActivity: [
      {
        activity: 'Беларускі тэатр оперы і балета',
        center: [53.91074407066195, 27.561848999999974],
      },
    ],
  },
  {
    name: 'Барыс',
    surname: 'Луценка',
    id: '3',
    generalInfo:
      'савецкі і беларускі рэжысёр-пастаноўшчык тэатра і кіно. Народны артыст Рэспублікі Беларусь (1995). Заслужаны дзеяч мастацтваў Беларускай ССР (1975).',
    yearsOfLife: '16 верасня, 1937 - 5 лютага, 2020',
    birthPlace: 'Майкоп, Краснадарскі край, РСФСР, СССР',
    biography: [
      {
        date: '1967',
        content:
          'Скончыў Беларускі дзяржаўны тэатральна-мастацкі інстытут (курс Заслужанага дзеяча мастацтваў Беларускай ССР В. А. Маланкіна).',
      },
      {
        date: '1967—1973, 1981—1982',
        content: 'Працаваў рэжысэрам Нацыянальнага акадэмічнага тэатра імя Я. Купалы.',
      },
      {
        date: '1973—1981',
        content: 'Працаваў галоўным рэжысёрам Дзяржаўнага рускага драматычнага тэатра Беларускай ССР.',
      },
      {
        date: '1991-2008, 2008-2020',
        content:
          'Мастацкі кіраўнік, а затым рэжысёр-пастаноўшчык Нацыянальнага акадэмічнага драматычнага тэатра імя М. Горкага.',
      },
    ],
    listOfWorks: [
      {
        date: '1974',
        work: 'У. Шэкспір «Макбет»',
      },
      {
        date: '1975',
        work: 'А. Твардоўскі «Васіль Цёркін»',
      },
      {
        date: '1976',
        work: 'М. Горкі «Апошнія»',
      },
      {
        date: '1978',
        work: 'В. Быкаў «Пайсці і не вярнуцца»',
      },
      {
        date: '1997',
        work: 'Я. Купала «Раскіданае гняздо»',
      },
      {
        date: '2002',
        work: 'Я. Купала «Сон на кургане»',
      },
    ],
    photos: [
      '../assets/images/lucenko1.jpg',
      '../assets/images/lucenko2.jpg',
      '../assets/images/lucenko4.jpg',
    ],
    videos: ['https://www.youtube.com/watch?v=wM-HkQ59usY'],
    placesOfActivity: [
      {
        activity: 'Нацыянальны акадэмічны драматычны тэатр імя М. Горкага',
        center: [53.89840557065936, 27.551131999999964],
      },
    ],
  },
  {
    name: 'Iгнат',
    surname: 'Буйнiцкi',
    id: '4',
    yearsOfLife: '10 [22] жнiўня, 1861 - 9 [22] верасня, 1917',
    birthPlace: 'сядзіба Поливачи Прозорокской воласці (Глыбоцкі раён Віцебскай вобласці)',
    generalInfo:
      'беларускі акцёр, рэжысёр, тэатральны дзеяч, заснавальнік першага прафесійнага нацыянальнага беларускага тэатра.',
    biography: [
      {
        date: '1907',
        content:
          'Разам з дочкамі Вандай і Аленай, а таксама са сваімі блізкімі сябрамі стварыў у фальварку Поливачи аматарскую трупу. Асаблівасцю выступленняў было тое, што са сцэны гучала беларуская мова, выконваліся знаёмыя простым людзям народныя танцы.',
      },
      {
        date: '1910',
        content: 'На яе аснове была сфарміравана пастаянная група і пачаты працяглыя гастролі па Беларусі.',
      },
      {
        date: '1913',
        content:
          'Буйніцкі арганізаваў Прозорокское беларускае крэдытнае таварыства, у якім кожны селянін пад невялікі працэнт мог атрымаць пазыку.',
      },
      {
        date: '1914—1916',
        content: 'Буйніцкі прымаў актыўны ўдзел у дзейнасці віленскага таварыства «У дапамогу фронту».',
      },
      {
        date: '1917',
        content:
          'Быў адным з ініцыятараў стварэння «Першага таварыства беларускай драмы і камедыі» ў Мінску, на базе якога паўстаў Нацыянальны акадэмічны тэатр імя Янкі Купалы.',
      },
      {
        date: '1917',
        content: 'Адправіўся на Заходні фронт Першай сусветнай вайны.',
      },
    ],
    listOfWorks: [
      {
        date: '1913',
        work: '«Лявонiха»',
      },
      {
        date: '1914',
        work: '«Дуда-весялуха»',
      },
      {
        date: '1914',
        work: '«Па рэвізіі» М. Крапіўніцкі',
      },
      {
        date: '1916',
        work: '«Модны шляхцюк» К. Каганца',
      },
    ],
    photos: ['../assets/images/bujnicki1.jpg', '../assets/images/bujnicki4.jpg'],
    videos: ['https://www.youtube.com/watch?v=ACDGr4TUkvs'],
    placesOfActivity: [
      {
        activity: 'сядзіба Поливачи Прозорокской воласці (Глыбоцкі раён Віцебскай вобласці)',
        center: [55.18449707014662, 27.862847499999972],
      },
    ],
  },
  {
    name: 'Леон',
    surname: 'Рахленка',
    id: '5',
    yearsOfLife: '6 [19] верасня, 1907 - 9 сакавiка, 1986',
    birthPlace: 'пас. Церахоўка, Гомельскі павет, Магілёўская губерня, Расійская імперыя',
    generalInfo: 'савецкі акцёр, рэжысёр, педагог. Народны артыст СССР (1966).',
    biography: [
      {
        date: '1924—1927',
        content:
          'Вучыўся ў Ленінградскім тэхнікуме сцэнічных мастацтваў (вучань Л.С. Вивьена і С.Э. Радлова).',
      },
      {
        date: '1926-1927',
        content: 'Артыст і асістэнт рэжысёра Ленінградскага працоўнага тэатра Пралеткульта.',
      },
      {
        date: '1927-1928',
        content: 'Мастацкі кіраўнік тэатральнай рабочай студыі Кіеўскага Савета прафсаюзаў.',
      },
      {
        date: '1929—1981',
        content:
          'Акцёр і рэжысёр (з 1935) (у 1938-1943 гадах - загадчык мастацкай часткай) Тэатра ім. Я. Купалы ў Мінску. Рэжысёрскую дзейнасць пачаў пад кіраўніцтвам Е. А. Міровіча.',
      },
    ],
    listOfWorks: [
      {
        date: '1938',
        work: '«Партызаны» К. Крапівы',
      },
      {
        date: '1942',
        work: '«Фронт» А. Е. Корнейчука',
      },
      {
        date: '1943',
        work: '«Рускія людзі »К. М. Сіманава',
      },
      {
        date: '1956',
        work: '«Крамлёўскія куранты» Н. Ф. Пагодзіна',
      },
      {
        date: '1957',
        work: '«Навальнічны год» А. Я. Каплеры',
      },
    ],
    photos: ['../assets/images/rahlenko1.jpg', '../assets/images/rahlenko3.jpg'],
    videos: ['https://www.youtube.com/watch?v=kimvRGqEe-U'],
    placesOfActivity: [
      {
        activity:
          '1-шы Беларускі дзяржаўны драматычны тэатр у Мінску (цяпер - Нацыянальны акадэмічны тэатр імя Янкі Купалы)',
        center: [53.90088357066573, 27.562774500000007],
      },
    ],
  },
  {
    name: 'Ўладзiмiр',
    surname: 'Цезаўроўскi',
    id: '6',
    yearsOfLife: '1880 - 1955',
    birthPlace: 'Ліўны, Арлоўская губерня, Расійская імперыя',
    generalInfo: 'савецкі акцёр і рэжысёр, Заслужаны артыст РСФСР (1945 г.).',
    biography: [
      {
        date: '1901',
        content: 'Сустрэўся з Неміровіча-Данчанкі і стаў працаваць у яго тэатры.',
      },
      {
        date: '1905',
        content: 'Скончыў мастацкую школу пры тэатры і адразу быў прыняты ў асноўную трупу тэатра.',
      },
      {
        date: '1905—1918',
        content:
          'Акцёр МХТ. У 1918 году арганізаваў у Адэсе мастацкую студыю. Затым працаваў як рэжысёр у тэатры Массодрам (Адэса).',
      },
      {
        date: '1917',
        content: 'Зняў свой адзіны нямы мастацкі фільм у 4 частках «Жанчына без галавы».',
      },
      {
        date: '1941—1946',
        content: 'Галоўны рэжысёр Маскоўскага абласнога тэатра юнага гледача.',
      },
      {
        date: '1925',
        content:
          'Рэжысёр-адміністратар Опернай студыі К. С. Станіслаўскага ў Маскве. Кіраваў операй у Мінску і Тыфлісе. Быў першым оперным рэжысёрам і заснавальнікам беларускай оперы.',
      },
    ],
    listOfWorks: [
      {
        date: '1925',
        work: '«Залаты пеўнік» (М.Рымскага-Корсакаў)',
      },
      {
        date: '1926',
        work: '«Яўген Анегін» (П.Чайкоўскі)',
      },
      {
        date: '1917',
        work: '«Жанчына без галавы»',
      },
      {
        date: '1930',
        work: '«Беднасць не загана» (А.Астроўскага)',
      },
    ],
    photos: [
      '../assets/images/tezavrovski1.jpg',
      '../assets/images/tezavrovski2.jpg',
      '../assets/images/tezavrovski3.jpg',
      '../assets/images/tezavrovski4.jpg',
      '../assets/images/tezavrovski5.jpg',
    ],
    videos: ['https://www.youtube.com/watch?v=nK_FVB1d_RM'],
    placesOfActivity: [
      {
        activity: 'Маскоўскі акадэмічны Музычны тэатр К. С. Станіслаўскага і У. І. Неміровіча-Данчанкі',
        center: [55.764520568969374, 37.61039499999998],
      },
    ],
  },
];
