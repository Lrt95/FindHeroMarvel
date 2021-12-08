import {getRequest} from './request.service';
import {
  PRIVATE_KEY_MARVEL,
  PUBLIC_KEY_MARVEL,
  URL_MARVEL,
} from '../constantes/fhm.constante';
import MD5 from 'crypto-js/md5';

const PATH_GET_HEROES = '/characters';
const LIMIT = '?limit=';
const OFFSET = '&offset=';
const TIMESTAMP = '&ts=';
const APIKEY = '&apikey=';
const HASH = '&hash=';

function getHashRequest() {
  const currentTimestamp = new Date().toUTCString();
  const hashMD5 = MD5(
    currentTimestamp + PRIVATE_KEY_MARVEL + PUBLIC_KEY_MARVEL,
  );
  return {currentTimestamp, hashMD5};
}

export async function getAllHeroesMarvelIo(offsetRate, limitRate) {
  const {currentTimestamp, hashMD5} = getHashRequest();
  const url =
    URL_MARVEL +
    PATH_GET_HEROES +
    LIMIT +
    limitRate +
    OFFSET +
    offsetRate +
    TIMESTAMP +
    currentTimestamp +
    APIKEY +
    PUBLIC_KEY_MARVEL +
    HASH +
    hashMD5;
  return await getRequest(url);
}

export async function getHeroMarvelIo(id) {
  const {currentTimestamp, hashMD5} = getHashRequest();
  const url =
    URL_MARVEL +
    PATH_GET_HEROES +
    '/' +
    id +
    '?' +
    TIMESTAMP +
    currentTimestamp +
    APIKEY +
    PUBLIC_KEY_MARVEL +
    HASH +
    hashMD5;
  return await getRequest(url);
}
