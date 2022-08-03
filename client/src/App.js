import { RootRoute } from './routes';
import { useEffect } from 'react';
import './styles/index.css';
import { useOpenBrewery } from './store';
import Skeleton from '@mui/material/Skeleton';

const App = () => {

  const {
    fetchBreweries,
    breweriesIsLoaded
    } = useOpenBrewery((state) => ({
      fetchBreweries: state.fetchBreweries,
      breweriesIsLoaded: state.breweriesIsLoaded,
    }));

  useEffect(() => {

    if (!breweriesIsLoaded) {
      fetchBreweries();
    }
  }, [breweriesIsLoaded, fetchBreweries],);

  return breweriesIsLoaded ?(
    <div className="App">
     <RootRoute />
    </div>
  ) : (
      <Skeleton className="tile-skeleton" variant="rectangular"/>
  );
}

export default App;
