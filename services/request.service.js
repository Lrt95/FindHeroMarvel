import axios from 'axios';

export async function getRequest(url, config = {}) {
  return await axios.get(url, config);
}
