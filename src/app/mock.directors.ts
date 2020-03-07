import { Director } from './director';

import mirovich1 from '../assets/images/mirovich1.jpg';
import mirovich2 from '../assets/images/mirovich2.jpg';
import mirovich3 from '../assets/images/mirovich3.jpg';
import mirovich4 from '../assets/images/mirovich4.jpg';
import mirovich5 from '../assets/images/mirovich5.jpg';

import aleksandrovskaya1 from '../assets/images/aleksandrovskaya1.jpg';
import aleksandrovskaya2 from '../assets/images/aleksandrovskaya2.jpg';
import aleksandrovskaya3 from '../assets/images/aleksandrovskaya3.jpg';
import aleksandrovskaya4 from '../assets/images/aleksandrovskaya4.jpg';
import aleksandrovskaya5 from '../assets/images/aleksandrovskaya5.jpg';

import lucenko1 from '../assets/images/lucenko1.jpg';
import lucenko2 from '../assets/images/lucenko2.jpg';
import lucenko3 from '../assets/images/lucenko3.jpg';
import lucenko4 from '../assets/images/lucenko4.jpg';
import lucenko5 from '../assets/images/lucenko5.jpg';

export const Directors: Director[] = [
  {
    name: 'Евстигней',
    surname: 'Мирович',
    yearsOfLife: '29 июля [10 августа], 1878 - 25 февраля, 1952',
    biography: [
        {
        date: '1900',
        content: 'Профессиональную сценическую деятельность начал в 1900 году в Петербурге как актёр и режиссёр. Играл в Адмиралтейском, Екатерининском, Кронштадтском театрах, с 1910 в театрах миниатюр: Троицком, Интимном, Литейном.'
    },
    {
        date: '1921—1931',
        content: 'Начал работать в театрах Белоруссии. Художественный руководитель Белорусского государственного драматического театра в Минске.'
    },
    {
        date: '1937—1940 ',
        content: 'Художественный руководитель Белорусского театра юного зрителя имени Н. Крупской.'
    },
    {
        date: '1941—1945',
        content: 'режиссёр 1-го Белорусского государственного драматического театра в Минске (ныне — Национальный академический театр имени Янки Купалы).'
    },{
        date: '1945',
        content: ' Художественный руководитель и заведующий кафедрой мастерства актёра Белорусского театрально-художественного института. Профессор. Занимался также преподавательской деятельностью в театральных студиях, в Минском театральном училище.'
    }],
    listOfWorks: [{
        date: '1923',
        work: 'Кастусь Калиновский'
    },
    {
        date: '1927',
        work: 'Мятеж'
    },
    {
        date: '1937',
        work: 'Как закалялась сталь' 
    },
    {
        date: '1939',
        work: 'Чудесная дудка'
    }],
    photos: [
        mirovich1,
        mirovich2,
        mirovich3,
        mirovich4,
        mirovich5
    ],
    videos: ['https://www.youtube.com/watch?v=Yunms45xnog&feature=emb_logo'],
    placesOfActivity: [{
        activity: '1-ый Белорусский государственный драматический театр в Минске (ныне — Национальный академический театр имени Янки Купалы)',
        mapLink: 'https://www.google.com/maps/place/%D0%9D%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9+%D0%90%D0%BA%D0%B0%D0%B4%D0%B5%D0%BC%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9+%D1%82%D0%B5%D0%B0%D1%82%D1%80+%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8+%D0%AF%D0%BD%D0%BA%D0%B8+%D0%9A%D1%83%D0%BF%D0%B0%D0%BB%D1%8B/@53.9008774,27.5604835,17z/data=!3m1!4b1!4m5!3m4!1s0x46dbcfa19e6b0a93:0xbadbbeae414b10b5!8m2!3d53.9008774!4d27.5626722'
    }]
  },
  {
    name: 'Лариса',
    surname: 'Александровская',
    yearsOfLife: '2 февраля [15 февраля], 1902 - 23 мая, 1980',
    biography: [
        {
        date: '1924-1928',
        content: 'Училась в Минском музыкальном техникуме, в 1928 — в специальном оперном классе.'
    },
    {
        date: '1933 - 1951',
        content: 'Солистка Белорусского театра оперы и балета в Минске. Исполняла как сопрановые, так и меццо-сопрановые партии. Во время войны выступала с концертами на фронтах, в госпиталях и в партизанских отрядах.'
    },
    {
        date: '1951—1960 ',
        content: 'Была одновременно и главным режиссёром Белорусского театра оперы и балета. В год ей удавалось выпускать по два премьерных спектакля.'
    },
    {
        date: '1946—1980',
        content: 'Инициатор создания и неизменный председатель правления Белорусского театрального общества.'
    }],
    listOfWorks: [{
        date: '1951',
        work: 'Тихий Дон'
    },
    {
        date: '1953',
        work: 'Аида'
    },
    {
        date: '1954',
        work: 'Борис Годунов'
    },
    {
        date: '1955',
        work: 'Трубадур' 
    },
    {
        date: '1960',
        work: 'Пиковая дама'
    }],
    photos: [
        aleksandrovskaya1,
        aleksandrovskaya2,
        aleksandrovskaya3,
        aleksandrovskaya4,
        aleksandrovskaya5 
    ],
    videos: [
        'https://www.youtube.com/watch?v=v3LC9JtorMM',
        'https://www.youtube.com/watch?v=nHR-jd2IKCE',
        'https://www.youtube.com/watch?v=6Ls4HgTsC9o&feature=emb_logo'
    ],
    placesOfActivity: [{
        activity: 'Белорусский театр оперы и балета',
        mapLink: 'https://www.google.com/maps?q=%D0%B1%D0%B5%D0%BB%D0%BE%D1%80%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9+%D1%82%D0%B5%D0%B0%D1%82%D1%80+%D0%BE%D0%BF%D0%B5%D1%80%D1%8B+%D0%B8+%D0%B1%D0%B0%D0%BB%D0%B5%D1%82%D0%B0&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjR_uiP5YXoAhVGR5oKHUV6DCAQ_AUoAnoECBYQBA'
    }]
  },
  {
    name: 'Борис',
    surname: 'Луценко',
    yearsOfLife: '16 сентябряб 1937 - 5 февраля, 2020',
    biography: [
        {
        date: '1967',
        content: 'Окончил Белорусский государственный театрально-художественный институт (курс Заслуженного деятеля искусств Белорусской ССР В. А. Маланкина).'
    },
    {
        date: '1967—1973, 1981—1982',
        content: 'Работал режиссёром Национального академического театра имени Я. Купалы.'
    },
    {
        date: '1973—1981',
        content: 'Работал главным режиссёром Государственного русского драматического театра Белорусской ССР.'
    },
    {
        date: '1991-2008, 2008-2020',
        content: 'Художественный руководитель, а затем режиссёр-постановщик Национального академического драматического театра имени М. Горького.'
    }],
    listOfWorks: [{
        date: '1974',
        work: 'У. Шекспир «Макбет»'
    },
    {
        date: '1975',
        work: 'А. Твардовский «Василий Тёркин»'
    },
    {
        date: '1976',
        work: 'М. Горький «Последние»'
    },
    {
        date: '1978',
        work: 'В. Быков «Пойти и не вернуться»'
    },
    {
        date: '1997',
        work: 'Я. Купала «Раскіданае гняздо»'
    },
    {
        date: '2002',
        work: 'Я. Купала «Сон на кургане»' 
    }],
    photos: [
        lucenko1,
        lucenko2,
        lucenko3,
        lucenko4,
        lucenko5
    ],
    videos: [
        'https://www.youtube.com/watch?v=wM-HkQ59usY',
        'https://www.youtube.com/watch?v=WNog9EWuJ7Q'
    ],
    placesOfActivity: [{
        activity: 'Национальный академический драматический театр имени М. Горького',
        mapLink: 'https://www.google.com/maps/place/Maksim+Gorky+Theather/@53.898314,27.5486068,17z/data=!3m1!4b1!4m5!3m4!1s0x46dbcfe849ff45d7:0xd352a9a2081042d8!8m2!3d53.898314!4d27.5507955'
    }]
  }
]