import React from "react";
import { Navbar, NavbarText, NavbarBrand } from "reactstrap";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="inner-wrapper">
      <div className="content">
        <Navbar className="navbar" dark={true} expand={true}>
          <NavbarText>
            <Link className="link" to={"/home"}>
              Home
            </Link>
          </NavbarText>
          <NavbarText>
            <Link className="link" to={"/projects"}>
              Projects
            </Link>
          </NavbarText>
          <NavbarText>
            <Link className="link" to={"/bands"}>
              Bands
            </Link>
          </NavbarText>
          <NavbarText>
            <Link className="link" to={"/Gallery"}>
              Gallery
            </Link>
          </NavbarText>
          {/*Brands*/}
        </Navbar>
      </div>
    </div>
  );
}

export default NavBar;
