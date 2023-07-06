import './Navigation.css';
import React from "react";
import Image from './backbround_image/alien_logo.jpg';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from "react-router-dom";

const Navigation = () => {
  return (
    <>
  <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark" fixed="top" >
        <Navbar.Brand href="/" class="collapse navbar-collapse">
              <img
                src= {Image}
                alt="alien logo"
                width="90"
                className="alien_logo d-inline-block align-top"
              />
        </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav  className="links" defaultActiveKey="/home" >
              <Link class="link" to="/about">About</Link>
              <Link class="link" to="/sightings">Sightings</Link>
              <Link class="link" to="/shows">Shows</Link>
              <Link class="link" to="/memes">Memes</Link>
        </Nav>
    </Navbar.Collapse>
  </Navbar>
  </>
  )
  };

  export default Navigation;