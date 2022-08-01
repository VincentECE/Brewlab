import create from "zustand";
import { getBreweries, getGeoCode } from "../api";

export const useOpenBrewery = create((set, get) => ({
  breweries: [],
  breweriesIsLoaded: false,
  brewery: {},
  breweryIsLoaded: false,

  fetchBreweries: async (page) => {
    try {
      const { data } = await getBreweries(page);
      set({ breweries: data, breweriesIsLoaded: true });
    } catch (err) {
      set({ breweriesIsLoaded: true });
      console.error(err.message);
    }
  },

  setBrewery: async (brewery) => {
    const { longitude,
      latitude,
      street,
      city,
      state
    } = brewery;
    //openBrewery returns null for some lat/longs.
    //this gets geocode data from google geocodingAPI if needed
    if(longitude === null || latitude === null) {

      try{
        const { data: { results } } = await getGeoCode(street, city, state);
        if(results.length === 0) throw new Error('No Geolocation data available');

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
