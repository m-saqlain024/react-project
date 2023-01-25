import react from "react"
import { Link } from "react-router-dom"
export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <link className="navbar-brand" to="/Home">{props.title}</link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <link className="nav-link active" aria-current="page" to="/Home">Home</link>
              </li>
              <li className="nav-item">
                <link className="nav-link" to="/About">{props.abouttitle}</link>
              </li>
            </ul>
            {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form> */}
          </div>
            <div className={`form-check form-switch text-${props.mode==="light"?"dark":"light"}`}>
              <input className="form-check-input" onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.label}</label>
            </div>
        </div>
      </nav>
    </>
  )
}