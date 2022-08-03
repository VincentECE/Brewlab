import { useEffect } from 'react';
import { useOpenBrewery } from '../../store';
import { useParams } from 'react-router-dom';
import { Layout, Card, Map } from '../../component';

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

    if(!breweryIsLoaded || breweryId !== brewery?.id) {
      setBrewery(breweryId);
    }

    return () => {
        clearBrewery();
    }
  }, [clearBrewery, setBrewery]);

  return Object.keys(brewery).length ? (
    <Layout>
      <Card />
      <Map />
    </Layout>
  ) : (<></>)
}
