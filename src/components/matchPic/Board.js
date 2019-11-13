import beaver from './images/beaver.png';
import cow from './images/cow.png';
import dog from './images/dog.png';
import donkey from './images/donkey.png';
import elephant from './images/elephant.png';
import frog from './images/frog.png';
import lion from './images/lion.png';
import monkey from './images/monkey.png';
import panda from './images/panda.png';
import penguin from './images/penguin.png';
import pig from './images/pig.png';
import polarBear from './images/polarBear.png';
import rabbit from './images/rabbit.png';
import sheep from './images/sheep.png';
import skunk from './images/skunk.png';
import tiger from './images/tiger.png';
import wolf from './images/wolf.png';
import zebra from './images/zebra.png';
import { shuffle } from 'lodash';

const MatchPicBoard = [
  { x: 0, y: 0, id: 'LaPx103CTzWFfeaOXU1a4', value: 'beaver', img: beaver },
  { x: 0, y: 1, id: 'az2DVkNRTqjqOgirK7UTw', value: 'beaver', img: beaver },
  { x: 0, y: 2, id: '8expdWHus0ZeCdtTnv4Ne', value: 'cow', img: cow },
  { x: 0, y: 3, id: 'TodHSZ_enB9MVrgLJ2hFz', value: 'cow', img: cow },
  { x: 0, y: 4, id: 'BGzdB0l232fOah4pNcOkN', value: 'dog', img: dog },
  { x: 0, y: 5, id: 'OYa-jPouou2chaShx8ciK', value: 'dog', img: dog },
  { x: 1, y: 0, id: 'aVYavpar06j5tVRIziV1F', value: 'donkey', img: donkey },
  { x: 1, y: 1, id: 'v5OWfqZZMaAoh0BwkPKN_', value: 'donkey', img: donkey },
  { x: 1, y: 2, id: 'mj4nfZRjoEABzQlcZsUjN', value: 'elephant', img: elephant },
  { x: 1, y: 3, id: '06eB705qb4ssMBtGJBRXV', value: 'elephant', img: elephant },
  { x: 1, y: 4, id: 'iqjFJYwRX0BqBdjceWh2A', value: 'frog', img: frog },
  { x: 1, y: 5, id: 'WMsvrETSEbJS2CPF5bDyZ', value: 'frog', img: frog },
  { x: 2, y: 0, id: 'Lul6ogxRyHrO9-KFmM2qZ', value: 'lion', img: lion },
  { x: 2, y: 1, id: 'IgC5s1qvv88KrGmsVYR00', value: 'lion', img: lion },
  { x: 2, y: 2, id: 'gr3ISHe2g4rDblC-zbE-y', value: 'monkey', img: monkey },
  { x: 2, y: 3, id: 'Abj7JQwzBxGmViyCfn44W', value: 'monkey', img: monkey },
  { x: 2, y: 4, id: 'ShM53tFWRgaVCSdgvEVkA', value: 'panda', img: panda },
  { x: 2, y: 5, id: 'cIO5JCp7HLZPw8nmzubmy', value: 'panda', img: panda },
  { x: 3, y: 0, id: 'GD0fDB4R67V2apNKHil7Q', value: 'penguin', img: penguin },
  { x: 3, y: 1, id: 'jiHvHrFV6kl5okL25odJy', value: 'penguin', img: penguin },
  { x: 3, y: 2, id: 'gER27yIngh1vOa-R89zlh', value: 'pig', img: pig },
  { x: 3, y: 3, id: 'GMqs3AeBvXVnqJTbzoXL0', value: 'pig', img: pig },
  {
    x: 3,
    y: 4,
    id: 'LwlWJreZ0vvnbv61F0kw2',
    value: 'polarBear',
    img: polarBear
  },
  {
    x: 3,
    y: 5,
    id: 'SKChZ4-m-fO7tKUXwG13e',
    value: 'polarBear',
    img: polarBear
  },
  { x: 4, y: 0, id: '-n-ii_1PlFEODorND8ttN', value: 'rabbit', img: rabbit },
  { x: 4, y: 1, id: 'Ke6iFozJs7fZJmJg3hn6G', value: 'rabbit', img: rabbit },
  { x: 4, y: 2, id: 'S4aJ3lAlnyR-mKhR1QkZa', value: 'sheep', img: sheep },
  { x: 4, y: 3, id: 'pDgPuL7bVU01XlYuUxXET', value: 'sheep', img: sheep },
  { x: 4, y: 4, id: 'MfFEUxibhLjXhD2KP41fT', value: 'skunk', img: skunk },
  { x: 4, y: 5, id: 'rqCFTRu22Ja7cuRGYz1Y0', value: 'skunk', img: skunk },
  { x: 5, y: 0, id: 'DiBg6svpvUJRoF028ff5I', value: 'tiger', img: tiger },
  { x: 5, y: 1, id: 'c9CvjxJ2512t2sEehcL4T', value: 'tiger', img: tiger },
  { x: 5, y: 2, id: 'PY9wHBqie28YjNvYreOoZ', value: 'wolf', img: wolf },
  { x: 5, y: 3, id: 'EKnhFU2D517n53NjCxBt_', value: 'wolf', img: wolf },
  { x: 5, y: 4, id: 'mWIMsNnSfDTZV6IveWdJo', value: 'zebra', img: zebra },
  { x: 5, y: 5, id: 'UbYP6zVYEbYoh87WEFuJS', value: 'zebra', img: zebra }
];

export const newGameData = shuffle(MatchPicBoard);
