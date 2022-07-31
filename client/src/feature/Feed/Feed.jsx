import { useStore } from "../../store";
import { OverviewTile } from "../../component/Tile";
import { v4 as uuid } from "uuid";
import { Layout } from "../../component/Layout"
export const Feed = () => {
  const breweries = useStore((state) => state.breweries);

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
    <span>Sorry! Mars doesn't have a brewery yet and so doesn't this city.</span>
  );
};
