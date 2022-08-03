import { useOpenBrewery } from '../../store';
import { Tile, Layout } from '../../component';
import { v4 as uuid } from 'uuid';

export const Feed = () => {
  const breweries = useOpenBrewery((state) => state.breweries);

  return breweries.length > 0 ? (
    <Layout>
      {breweries.map((brewery) => {
        if(brewery?.street !== null) {
          return (
            <div key={uuid()}>
              <Tile brewery={brewery} />
            </div>
          );
        }
      })}
    </Layout>
  ) : (
    <span>Sorry! Mars has not been conquered yet, and this city hasn't been either. Come back when it does and we'll cheers together 🍻</span>
  );
};
