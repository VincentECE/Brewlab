import axios from 'axios';

// const url = 'https://api.openbrewerydb.org/breweries?by_city=austin&per_page=20';
const url = 'http://localhost:3001/listBreweries';


export function getBreweries(page = 1) {

  return axios({
    method: 'get',
    url: url,
    responseType: 'json'
  });

};

// export function getBreweries(page = 1) {

//   return axios({
//     method: 'get',
//     url: `${url}&page=${page}`,
//     responseType: 'json'
//   });

// };