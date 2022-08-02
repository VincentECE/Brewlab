import { useNavigate } from "react-router-dom";
import { useOpenBrewery } from "../../store";

export const OverviewTile = ({ brewery }) => {
  const navigate = useNavigate();
  const setBrewery = useOpenBrewery((state) => state.setBrewery);

  const { name,
    brewery_type,
    street,
    city,
    postal_code,
    website_url,
    id,
  } = brewery;

  const showDetailBrewery = () => {
    navigate(`details/${id}`);
  }

  return (
    <div onClick={showDetailBrewery} className="tile container-padding-1 layout-flex-column-spacing-1 container-flex-column-1">
      <span >{name}</span>
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