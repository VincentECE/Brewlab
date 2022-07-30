import useStore from '../../store';
import { v4 as uuid } from "uuid";
import { OverviewTile } from "../Tile";

export function Layout() {
  const breweries = useStore(state => state.breweries);

  return breweries.length > 0 ? (
    <>
      {breweries.map((brewery) => {
        <div key={uuid()}> Blah </div>
      })}
    </>
  ) : (
    <>No breweries to show yet..</>
  );
}