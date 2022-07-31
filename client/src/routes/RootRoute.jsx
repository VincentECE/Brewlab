import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { Feed, Details } from '../feature'

export function RootRoute() {
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Feed/>} />
        <Route exact path="details/:breweryId" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}