import { useEffect } from "react"
import { Layout } from '../../component/Layout';
import { useOpenBrewery } from '../../store';
import { Map } from '../../component/Map';
import { useParams } from "react-router-dom"

export const Details = () => {
  const { breweryId } = useParams();

  const {
    brewery,
    clearBrewery,
    breweryIsLoaded,
    breweries,
    setBrewery
   } = useOpenBrewery((state) => ({
    brewery: state.brewery,
    clearBrewery: state.clearBrewery,
    breweryIsLoaded: state.breweryIsLoaded,
    breweries: state.breweries,
    setBrewery: state.setBrewery
  }));

  useEffect(() => {

    if(breweryIsLoaded){
      return () => {
        clearBrewery();
      }
    } else {
      for(let i = 0; i < breweries.length; i++) {
        const currentBrewery = breweries[i];

        if(currentBrewery.id === breweryId) {
          setBrewery(currentBrewery);
        }
      }
    }
  })

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

  return (
    <Layout>
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
  )
}