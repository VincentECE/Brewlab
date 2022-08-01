import { Layout } from "../../component/Layout";
import { useOpenBrewery } from "../../store";
import { Map } from '../../component/Map';

export const Details = () => {

  const brewery = useOpenBrewery((state) => state.brewery)

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