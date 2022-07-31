import create from 'zustand';
import { getGeoCode } from '../api';

export const useGeocode = create((set, get) => ({
  longitude: '',
  latitude: '',
  getCoordinates: (address) => {

  },
  setCoordinates: (longitude, latitude) => {
    set({ longitude, latitude });
  },
}));