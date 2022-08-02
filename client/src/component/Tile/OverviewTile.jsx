import { useNavigate } from "react-router-dom";
import Tile from '@mui/material/Card';

export const OverviewTile = ({ brewery }) => {
  const navigate = useNavigate();

  const { name,
    brewery_type,
    street,
    city,
    state,
    postal_code,
    website_url,
    id,
    nameColor,
  } = brewery;

  const showDetailBrewery = () => {
    navigate(`details/${id}`);
  }

  return (
    <Tile onClick={showDetailBrewery} className="tile container-padding-1 layout-flex-column-spacing-1 container-flex-column-1">
      <p className="brewery-type">{brewery_type}</p>
      <div className = "tile-name" style={nameColor}>{name} </div>
      <p>{street}</p>
      <p>{`${city}, ${state}`}</p>
      <p>{postal_code}</p>
      <a href={website_url} target="_blank" rel="noreferrer">
        {website_url}
      </a>
    </Tile>
  );
}
