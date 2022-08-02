import { Link } from 'react-router-dom';
import { useOpenBrewery } from '../../store';

export function Layout(props) {
  return (
    <>
    <nav className='navbar layout-padding-1'>
      <Link to="/">
        <h1 className="header1">Brew Lab</h1>
      </Link>
    </nav>
    <div className="layout-padding-1 layout-flex-column-spacing-1">
      {props.children}
    </div>
    </>
  )
}