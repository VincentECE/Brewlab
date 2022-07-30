import { RootRoute } from "./routes";
import { useState, useEffect } from 'react';
import "./App.css";
import useStore from "./store"


function App() {

  const [isLoaded, setIsLoaded] = useState(false);
  const fetchBreweries = useStore((state) => state.fetchBreweries);

  useEffect(() => {

    if(!isLoaded) {
      fetchBreweries();
      setIsLoaded(true);
    }

  });

  return (
    <div className="App">
     <RootRoute />
    </div>
  );
}

export default App;
