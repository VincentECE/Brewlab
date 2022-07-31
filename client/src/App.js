import { RootRoute } from "./routes";
import { useEffect } from 'react';
import "./App.css";
import { useOpenBrewery } from "./store"

function App() {
  const { fetchBreweries, isLoaded } = useOpenBrewery((state) => ({ fetchBreweries: state.fetchBreweries, breweries: state.breweries }));

  useEffect(() => {
    if (!isLoaded) {
      fetchBreweries();
    }
  }, [isLoaded]);

  return (
    <div className="App">
     <RootRoute />
    </div>
  );
}

export default App;
