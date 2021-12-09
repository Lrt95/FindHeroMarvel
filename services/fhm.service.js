import {getAllHeroesMarvelIo, getHeroMarvelIo} from './fhm-io.service';

const SIZE_IMAGE = '/portrait_large.';

export function getAllHeroesMarvel(offset, limit) {
  return getAllHeroesMarvelIo(offset, limit)
    .then(result => {
      const heroes = result?.data?.data?.results
        ? result?.data?.data?.results
        : [];
      return heroes.map(hero => {
        const url = transformHttpToHttps(hero.thumbnail.path);
        return {
          name: hero.name,
          image: url + SIZE_IMAGE + hero.thumbnail.extension,
          description: hero.description,
        };
      });
    })
    .catch(error => {
      console.log(error);
      return [];
    });
}

export function getHeroMarvel(id) {
  return getHeroMarvelIo(id)
    .then(result => {
      const heroes = result?.data?.data?.results
        ? result?.data?.data?.results
        : [];
      return heroes.map(hero => {
        const url = transformHttpToHttps(hero.thumbnail.path);
        return {
          name: hero.name,
          image: url + SIZE_IMAGE + hero.thumbnail.extension,
          description: hero.description,
        };
      });
    })
    .catch(error => {
      console.log(error);
      return [];
    });
}

export async function getFindMyHero() {
  const offset = randomNumberBetween(0, 1000);
  return getAllHeroesMarvel(offset, 1)
    .then(result => {
      return result;
    })
    .catch(error => {
      console.log(error);
      return {};
    });
}

function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function transformHttpToHttps(url) {
  let urlHttps = '';
  const tab = url.split(':');
  let https = tab[0];
  if (https === 'http') {
    https = 'https';
  }
  urlHttps = https + ':' + tab[1];
  return urlHttps;
}
