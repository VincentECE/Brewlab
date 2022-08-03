import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../utils/images/logo.svg';

export const Layout = (props) => {
  return (
    <>
    <nav className='navbar layout-padding-1'>
      <div className="nav-logo-container">
        <span>
          <Logo width="50px" height="auto" />
        </span>
        <Link to="/" className="link">
          <h1 className="title-1">Brew Lab</h1>
        </Link>
      </div>
    </nav>
    <div className="layout-padding-1 layout-flex-column-spacing-1">
      {props.children}
    </div>
    </>
  )
}