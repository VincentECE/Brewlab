import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';



export function RootRoute() {
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<div>hello world</div>} />
        <Route exact path="details" element={<div>Details page</div>} />
      </Routes>
    </BrowserRouter>
  );
}