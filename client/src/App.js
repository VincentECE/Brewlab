import { RootRoute } from "./routes";
import { useEffect } from 'react';
import "./styles/index.css";
import { useOpenBrewery } from "./store"

function App() {
  const {
    fetchBreweries,
    breweriesIsLoaded
    } = useOpenBrewery((state) => ({
      fetchBreweries: state.fetchBreweries,
      breweries: state.breweries
    }));

  useEffect(() => {
    if (!breweriesIsLoaded) {
      fetchBreweries();
    }
  }, [breweriesIsLoaded]);

  return (
    <div className="App">
     <RootRoute />
    </div>
  );
}

export default App;
