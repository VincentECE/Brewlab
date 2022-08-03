import { useOpenBrewery } from '../../store';
import { formatPhoneNumber } from '../../utils/formatter';

export const Card = () => {
  const { brewery } = useOpenBrewery((state) => ({
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
  return (
    <div className="card container-padding-1">
       <div className="header" style={nameColor}>
        <h1 className="header-1">{name}</h1>
      </div>

      <div>
        <div>
          <p>{street}</p>
        </div>
        <div>
          <p>{`${city}, ${state} ${postal_code}`}</p>
        </div>
        {phone ? <p>{formatPhoneNumber(phone)}</p> : <></>}
      </div>

      <div>
        <strong>Brewery Type: </strong> <p>{brewery_type}</p>
        <a href={website_url} target="_blank" rel="noreferrer">
          {website_url}
        </a>
      </div>
    </div>
  );
};
