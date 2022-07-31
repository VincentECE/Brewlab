import axios from 'axios';

const url = 'https://maps.googleapis.com/maps/api/geocode/json?address=';

export const getGeoCode = (street, city, state) => {

  return axios({
    method: 'get',
    url: `${url}${street},+${city},+${state}&key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}`,
    responseType: 'json'

  });
}