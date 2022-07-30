
export function OverviewTile({ brewery }) {
  const {
    name,
    brewery_type,
    street,
    city,
    postal_code,
    website_url,
  } = brewery;

  return(
    <div className="overview-tile">
      <p>{name}</p>
    </div>
  );
}