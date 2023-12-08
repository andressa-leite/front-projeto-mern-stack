import React from "react";
import logo from "../../images/LogoBN.png";

/* ******************************** */
//import "./NavBar.css";
//APAGUEI O IMPORT DO STYLED

import { Button, ImageLogo, InputSpace, Nav } from "./NavBarStyled";
/* ******************************** */

function NavBar() {
  return (
    <Nav>
      <InputSpace>
        <i class="bi bi-search"></i>
        <input type="text" placeholder="pesquise por um título" />
      </InputSpace>

      <ImageLogo src={logo} alt="Logo Breaking News" />

      <Button>Entrar</Button>
    </Nav>
  );
}

{
  /* ******************************** */
}
//APAGUEI E TRANSFERI PARA "NavBarStyled.js"
{
  /* ******************************** */
}

export default NavBar;
