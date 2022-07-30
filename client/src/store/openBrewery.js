import create from 'zustand';

const useStore = create((set, get) => ({
  breweries: [],

  fetchBreweries: async () => {
    try{

    } catch(err) {
      console.log(err);
    }
  }
}));