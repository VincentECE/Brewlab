import create from 'zustand';
import { getBreweries, getGeoCode } from '../api';
import { tileNameColors } from '../styles/tileNameColors';

export const useOpenBrewery = create((set, get) => ({
  breweries: [],
  breweriesIsLoaded: false,
  brewery: {},
  breweryIsLoaded: false,

  fetchBreweries: async (page) => {
    try {
      const { data } = await getBreweries(page);

      for(let i = 0; i < data.length; i++) {
        const randomColor = tileNameColors[Math.floor(Math.random()* tileNameColors.length)];

        data[i].nameColor = randomColor;
      }

      set({ breweries: data, breweriesIsLoaded: true });
    } catch (err) {
      set({ breweriesIsLoaded: true });
      console.error(err.message);
    }
  },

  setBrewery: async (breweryId = '' ) => {
   const breweries = await get().breweries;
   let brewery;

   for(let i  = 0; i < breweries.length; i++) {
    const currentBrewery = breweries[i];

    if(currentBrewery?.id === breweryId) {
      brewery = currentBrewery;
    }
   }
    //openBrewery returns null for some lat/longs.
    //this gets geocode data from google geocodingAPI if needed
    if(brewery?.latitude === null && brewery?.longitude === null) {

      const {
        street,
        city,
        state
      } = brewery;

      try{
        console.log('getting geocode');
        const { data: { results } } = await getGeoCode(street, city, state);
        if(results.length === 0) throw new Error('No Geocode data available');

        const { lat, lng } = results?.[0]?.geometry.location;

        brewery.latitude = lat;
        brewery.longitude = lng;

      } catch(err) {
        console.error(err.message);
      }

    }

    set({ brewery });
    set({breweryIsLoaded: true});

  },

  clearBrewery: () => {
    set({brewery: {}});
    set({breweryIsLoaded: false});
  }
}));
