import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../utils/images/monopolyman.svg";

export const Layout = (props) => {
  return (
    <>
      <nav className="navbar layout-padding-1">
        <Link to="/" className="link">
          <div className="nav-logo-container">
            <span>
              <Logo className="logo" />
            </span>
            <h1 className="title-1">Brewopoly</h1>
          </div>
        </Link>
      </nav>
      <div className="layout-padding-1 layout-flex-column-spacing-1">
        {props.children}
      </div>
    </>
  );
};
