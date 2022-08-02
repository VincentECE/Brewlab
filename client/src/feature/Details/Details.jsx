import { useEffect } from "react"
import { Layout } from '../../component/Layout';
import { useOpenBrewery } from '../../store';
import { Map } from '../../component/Map';
import { useParams } from 'react-router-dom';

export const Details = () => {
  const { breweryId } = useParams();

  const {
    brewery,
    clearBrewery,
    breweryIsLoaded,
    breweries,
    breweriesIsLoaded,
    setBrewery
   } = useOpenBrewery((state) => ({
    brewery: state.brewery,
    clearBrewery: state.clearBrewery,
    breweryIsLoaded: state.breweryIsLoaded,
    breweries: state.breweries,
    setBrewery: state.setBrewery,
    breweriesIsLoaded: state.breweriesIsLoaded
  }));

  useEffect(() => {
    console.log('Details rendered');

    console.log('breweryIsLoaded: ', breweryIsLoaded);

    if(!breweryIsLoaded || breweryId !== brewery?.id) {
      console.log('set brewery from Details')
      setBrewery(breweryId);
    }

    // if(!breweryIsLoaded && breweriesIsLoaded) {
    //   if(breweryId) {
    //     console.log('inside Details')
    //     setBrewery(breweryId);
    //   }
    // }
    return () => {
      console.log('details useeffect return')
        clearBrewery();
    }
  }, [clearBrewery, setBrewery]);

  const {
    name,
    brewery_type,
    street,
    city,
    state,
    postal_code,
    website_url,
    phone,
  } = brewery;

  return Object.keys(brewery).length ? (
    <Layout>
      <span></span>
      <div className="details-tile">
      <h3>{name}</h3>
      <p>{brewery_type}</p>
      <p>{street}</p>
      <p>{city}</p>
      <p>{state}</p>
      <p>{postal_code}</p>
      <p>{phone}</p>
      <a href={website_url} target="_blank" rel="noreferrer">
        {website_url}
      </a>
      <Map/>
    </div>
    </Layout>
  ) : (<></>)
}