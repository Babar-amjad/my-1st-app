import { Link } from "react-router-dom";

function Navbar(props){
    return(
<div>




        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
          
  <div className="container-fluid">
    <a className="navbar-brand" to="#">Textutiles</a>
   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active"  to="about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="contact">contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="Help">Help</Link>
        </li>
       
      </ul>
      <forrm className="d-flex">
        <input className="form=-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </forrm>
    </div>
  </div>
  <div className="form-check form-switch text-light">
  <input className="form-check-input" type="checkbox" onClick={props.togglemode}  role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">enable darkmode</label>
</div>
</nav>
</div>
    )
};
export default Navbar;