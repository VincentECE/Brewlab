import { useOpenBrewery } from '../../store';
import Tile from '@mui/material/Card';


export const DetailsTile = () => {

  const {
    brewery,
   } = useOpenBrewery((state) => ({
    brewery: state.brewery,
  }));

  const {
    name,
    brewery_type,
    street,
    city,
    state,
    postal_code,
    website_url,
    phone,
    nameColor,
  } = brewery;

  return(
    <Tile className="details-tile">
        <p className="brewery-type">{brewery_type}</p>
        <h3 className="tile-name" style={nameColor}>{name}</h3>
        <p>{street}</p>
        <p>{`${city}, ${state}`}</p>
        <p>{postal_code}</p>
        <p>{phone}</p>
        <a href={website_url} target="_blank" rel="noreferrer">
          {website_url}
        </a>
    </Tile>
  )
}