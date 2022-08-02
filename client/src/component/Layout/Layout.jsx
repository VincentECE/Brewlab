import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../utils/images/logo3.svg';

export function Layout(props) {
  return (
    <>
    <nav className='navbar layout-padding-1'>
      <Link to="/">
        <Logo/>
        <h1 className="header1">Brew Lab</h1>
      </Link>
    </nav>
    <div className="layout-padding-1 layout-flex-column-spacing-1">
      {props.children}
    </div>
    </>
  )
}