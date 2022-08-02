import { useEffect } from "react"
import { Layout } from '../../component/Layout';
import { useOpenBrewery } from '../../store';
import { Map } from '../../component/Map';
import { useParams } from 'react-router-dom';
import { DetailsTile } from '../../component/Tile';
import Tile from '@mui/material/Card';

export const Details = () => {
  const { breweryId } = useParams();

  const {
    brewery,
    clearBrewery,
    breweryIsLoaded,
    setBrewery,
   } = useOpenBrewery((state) => ({
    brewery: state.brewery,
    clearBrewery: state.clearBrewery,
    breweryIsLoaded: state.breweryIsLoaded,
    setBrewery: state.setBrewery,
  }));

  useEffect(() => {
    console.log('Details rendered');

    console.log('breweryIsLoaded: ', breweryIsLoaded);

    if(!breweryIsLoaded || breweryId !== brewery?.id) {
      console.log('set brewery from Details')
      setBrewery(breweryId);
    }

    return () => {
      console.log('details useeffect return')
        clearBrewery();
    }
  }, [clearBrewery, setBrewery]);

  return Object.keys(brewery).length ? (
    <Layout>
      <div className="tile container-padding-1 layout-flex-column-spacing-1 container-flex-column-1">
      <DetailsTile/>
        <Map/>
      </div>
    </Layout>
  ) : (<></>)
}
