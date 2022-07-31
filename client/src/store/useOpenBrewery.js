import create from 'zustand';
import { getBreweries } from '../api';

export const useStore = create((set, get) => ({
  breweries: [],
  isLoaded: false,
  brewery: {},
  fetchBreweries: async (page) => {
    try {
      const { data } = await getBreweries(page);
      set( { breweries: data, isLoaded: true } );

    } catch(err) {
      set({ isLoaded: true })
      console.log('Something went wrong while fetching data ', err);
    }
  },
  setBrewery: (brewery) => {
    set({ brewery });
  },
}));