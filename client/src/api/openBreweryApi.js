import axios from 'axios';

// COMMENTS ARE INTENTIONALLY LEFT HERE TO EASILY SWITCH BETWEEN GETTING DATA FROM THE API OR BACKEND

// The following requests data from the backend
const url = 'http://localhost:3001/listBreweries';

export function getBreweries(page = 1) {

  return axios({
    method: 'get',
    url: url,
    responseType: 'json'
  });

};


// The following requests data from OpenBrewerydb.org. Make sure to comment out the code above before using

/*
const url = 'https://api.openbrewerydb.org/breweries?by_city=austin&per_page=20';

export function getBreweries(page = 1) {

  return axios({
    method: 'get',
    url: `${url}&page=${page}`,
    responseType: 'json'
  });

};
*/