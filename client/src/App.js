import { RootRoute } from "./routes";
import { useEffect } from 'react';
import "./App.css";
import {useStore} from "./store"

function App() {
  const { fetchBreweries, isLoaded } = useStore((state) => ({ fetchBreweries: state.fetchBreweries, breweries: state.breweries }));

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
