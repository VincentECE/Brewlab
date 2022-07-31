import { Link } from "react-router-dom"
import { useStore } from "../../store"

export function OverviewTile({ brewery }) {

  const setBrewery = useStore((state) => state.setBrewery)

  const { name,
    brewery_type,
    street,
    city,
    postal_code,
    website_url
  } = brewery;

  return (
    <div className="overview-tile">
      <Link to='details' onClick={()=>{setBrewery(brewery)}}>{name}</Link>
      <p>{brewery_type}</p>
      <p>{street}</p>
      <p>{city}</p>
      <p>{postal_code}</p>
      <a href={website_url} target="_blank" rel="noreferrer">
        {website_url}
      </a>
    </div>
  );
}
