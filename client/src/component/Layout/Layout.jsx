import { Link } from "react-router-dom"
export function Layout(props) {
  return (
    <>
    <nav>
      <Link to="/">Home</Link>
    </nav>
    {props.children}
    </>
  )
}