import React from "react";
import logo from "../../images/LogoBN.png";

import { Button, ImageLogo, InputSpace, Nav } from "./NavBarStyled";
import { Outlet } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Nav>
        <InputSpace>
          <i className="bi bi-search"></i>
          <input type="text" placeholder="pesquise por um título" />
        </InputSpace>

        <ImageLogo src={logo} alt="Logo Breaking News" />

        <Button>Entrar</Button>
      </Nav>
      <Outlet />
    </>
  );
}

export default NavBar;
