import { useNavigate } from 'react-router-dom';
import MaterialTile from '@mui/material/Card';

export const Tile = ({ brewery }) => {
  const navigate = useNavigate();
  const {
    name,
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
  };

  return (
    <MaterialTile
      onClick={showDetailBrewery}
      className="tile container-padding-1 container-flex-column-1"
    >
      <div className="header" style={nameColor}>
        <h1 className="header-1">{name}</h1>
      </div>
      <div className="body">
        <span>
        <p>{street}</p>
        </span>
        <span>
          <p>{`${city}, ${state} ${postal_code}`}</p>
        </span>
        <a href={website_url} target="_blank" rel="noreferrer">
          {website_url}
        </a>
      </div>
      <div>
        <strong>Brewery Type: </strong> <p>{brewery_type}</p>
      </div>
    </MaterialTile>
  );
};
