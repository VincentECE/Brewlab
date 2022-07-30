import axios from 'axios';

const url = 'https://api.openbrewerydb.org/breweries?by_city=austin&per_page=20';

export function getBreweries(page = 1) {

  return axios({
    method: 'get',
    url: `${url}&page=${page}`,
    responseType: 'json'
  });

};