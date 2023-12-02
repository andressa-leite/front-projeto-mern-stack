import React from "react";
import logo from "../../images/LogoBN.png";
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <div className="input-search-space">
        <i class="bi bi-search"></i>
        <input type="text" placeholder="pesquise por um título"/>
      </div>

      <img src={logo} alt="Logo Breaking News" />

      <button>Entrar</button>
    </nav>
  );
}

export default NavBar;
