import { RootRoute } from './routes';
import { useEffect } from 'react';
import './styles/index.css';
import { useOpenBrewery } from './store';

function App() {

  const {
    fetchBreweries,
    breweriesIsLoaded
    } = useOpenBrewery((state) => ({
      fetchBreweries: state.fetchBreweries,
      breweriesIsLoaded: state.breweriesIsLoaded,
    }));

  useEffect(() => {

    if (!breweriesIsLoaded) {
      console.log('Fetching breweries from App');
      fetchBreweries();
    }
  }, [breweriesIsLoaded, fetchBreweries],);

  return breweriesIsLoaded ?(
    <div className="App">
     <RootRoute />
    </div>
  ) :(<></>);
}

export default App;
