import { Layout } from "../../component/Layout";
import { useStore } from "../../store";
import { Map } from '../../component/Map';

export const Details = () => {

  const brewery = useStore((state) => state.brewery)

  const {
    name,
    brewery_type,
    street,
    address_2,
    city,
    state,
    postal_code,
    website_url,
  } = brewery;

  return (
    <Layout>
      <div className="overview-tile">
      <p>{brewery_type}</p>
      <p>{street}</p>
      <p>{city}</p>
      <p>{postal_code}</p>
      <a href={website_url} target="_blank" rel="noreferrer">
        {website_url}
      </a>
      <Map/>
    </div>
    </Layout>
  )
}