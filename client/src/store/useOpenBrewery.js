import create from 'zustand';
import { getBreweries } from '../api';

const useStore = create((set, get) => ({
  breweries: [],

  fetchBreweries: async (page) => {
    try{
      const { data } = await getBreweries(page);
      console.log(data);
      set( { breweries: data } );

    } catch(err) {
      console.log('Something went wrong while fetching data ', err);
    }
  },
}));

export default useStore;