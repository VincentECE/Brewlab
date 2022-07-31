import { useNavigate } from "react-router-dom"
import { useStore } from "../../store"

export const OverviewTile = ({ brewery }) => {
  const setBrewery = useStore((state) => state.setBrewery)
  const navigate = useNavigate();

  const { name,
    brewery_type,
    street,
    city,
    postal_code,
    website_url,
    id,
  } = brewery;

  const showDetailBrewery = () => {
    setBrewery(brewery);
    navigate(`details/${id}`);
  }

  return (
    <div className="overview-tile">
      <span onClick={showDetailBrewery}>{name}</span>
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
