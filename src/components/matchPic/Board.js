import { cloneDeep } from 'lodash';
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
// prettier-ignore
const MatchPicBoard = [
  {solved: false, id: 'LaPx103CTzWFfeaOXU1a4', value: 'beaver', img: beaver },
  {solved: false, id: 'az2DVkNRTqjqOgirK7UTw', value: 'beaver', img: beaver },
  {solved: false, id: '8expdWHus0ZeCdtTnv4Ne', value: 'cow', img: cow },
  {solved: false, id: 'TodHSZ_enB9MVrgLJ2hFz', value: 'cow', img: cow },
  {solved: false, id: 'BGzdB0l232fOah4pNcOkN', value: 'dog', img: dog },
  {solved: false, id: 'OYa-jPouou2chaShx8ciK', value: 'dog', img: dog },
  {solved: false, id: 'aVYavpar06j5tVRIziV1F', value: 'donkey', img: donkey },
  {solved: false, id: 'v5OWfqZZMaAoh0BwkPKN_', value: 'donkey', img: donkey },
  {solved: false, id: 'mj4nfZRjoEABzQlcZsUjN', value: 'elephant', img: elephant },
  {solved: false, id: '06eB705qb4ssMBtGJBRXV', value: 'elephant', img: elephant },
  {solved: false, id: 'iqjFJYwRX0BqBdjceWh2A', value: 'frog', img: frog },
  {solved: false, id: 'WMsvrETSEbJS2CPF5bDyZ', value: 'frog', img: frog },
  {solved: false, id: 'Lul6ogxRyHrO9-KFmM2qZ', value: 'lion', img: lion },
  {solved: false, id: 'IgC5s1qvv88KrGmsVYR00', value: 'lion', img: lion },
  {solved: false, id: 'gr3ISHe2g4rDblC-zbE-y', value: 'monkey', img: monkey },
  {solved: false, id: 'Abj7JQwzBxGmViyCfn44W', value: 'monkey', img: monkey },
  {solved: false, id: 'ShM53tFWRgaVCSdgvEVkA', value: 'panda', img: panda },
  {solved: false, id: 'cIO5JCp7HLZPw8nmzubmy', value: 'panda', img: panda },
  {solved: false, id: 'GD0fDB4R67V2apNKHil7Q', value: 'penguin', img: penguin },
  {solved: false, id: 'jiHvHrFV6kl5okL25odJy', value: 'penguin', img: penguin },
  {solved: false, id: 'gER27yIngh1vOa-R89zlh', value: 'pig', img: pig },
  {solved: false, id: 'GMqs3AeBvXVnqJTbzoXL0', value: 'pig', img: pig },
  {solved: false, id: 'LwlWJreZ0vvnbv61F0kw2', value: 'polarBear', img: polarBear },
  {solved: false, id: 'SKChZ4-m-fO7tKUXwG13e', value: 'polarBear', img: polarBear },
  {solved: false, id: '-n-ii_1PlFEODorND8ttN', value: 'rabbit', img: rabbit },
  {solved: false, id: 'Ke6iFozJs7fZJmJg3hn6G', value: 'rabbit', img: rabbit },
  {solved: false, id: 'S4aJ3lAlnyR-mKhR1QkZa', value: 'sheep', img: sheep },
  {solved: false, id: 'pDgPuL7bVU01XlYuUxXET', value: 'sheep', img: sheep },
  {solved: false, id: 'MfFEUxibhLjXhD2KP41fT', value: 'skunk', img: skunk },
  {solved: false, id: 'rqCFTRu22Ja7cuRGYz1Y0', value: 'skunk', img: skunk },
  {solved: false, id: 'DiBg6svpvUJRoF028ff5I', value: 'tiger', img: tiger },
  {solved: false, id: 'c9CvjxJ2512t2sEehcL4T', value: 'tiger', img: tiger },
  {solved: false, id: 'PY9wHBqie28YjNvYreOoZ', value: 'wolf', img: wolf },
  {solved: false, id: 'EKnhFU2D517n53NjCxBt_', value: 'wolf', img: wolf },
  {solved: false, id: 'mWIMsNnSfDTZV6IveWdJo', value: 'zebra', img: zebra },
  {solved: false, id: 'UbYP6zVYEbYoh87WEFuJS', value: 'zebra', img: zebra }
];

export const newGameData = () => {
  const data = cloneDeep(MatchPicBoard);
  return shuffle(data);
};
