import create from "zustand";
import { getBreweries, getGeoCode } from "../api";

export const useOpenBrewery = create((set, get) => ({
  breweries: [],
  isLoaded: false,
  brewery: {},

  fetchBreweries: async (page) => {
    try {
      const { data } = await getBreweries(page);
      set({ breweries: data, isLoaded: true });
    } catch (err) {
      set({ isLoaded: true });
      console.log("Something went wrong while fetching data ", err);
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
      const { data: { results } } = await getGeoCode(street, city, state);
      const { lat, lng } = results?.[0].geometry.location;

      brewery.latitude = lat;
      brewery.longitude = lng;

      set({ brewery });

    } else {
      set({ brewery });
    }

  },

  clearBrewery: () => {
    set({brewery: {}});
  }
}));
