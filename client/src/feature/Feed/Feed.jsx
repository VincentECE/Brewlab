import { useOpenBrewery } from "../../store";
import { OverviewTile } from "../../component/Tile";
import { v4 as uuid } from "uuid";
import { Layout } from "../../component/Layout"
export const Feed = () => {
  const breweries = useOpenBrewery((state) => state.breweries);

  return breweries.length > 0 ? (
    <Layout>
      {breweries.map((brewery) => {
        return (
          <div key={uuid()}>
            <OverviewTile brewery={ brewery } />
          </div>
        );
      })}
    </Layout>
  ) : (
    <span>Sorry! Mars has not been conquered yet, and this city hasn't been either. Come back when it does and we'll cheers together 🍻</span>
  );
};
