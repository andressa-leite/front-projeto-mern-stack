import React from "react";
import logo from "../../images/LogoBN.png";
import { Button, ImageLogo, InputSpace, Nav } from "./NavBarStyled";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function NavBar() {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  function onSearch(data) {
    /* console.log(data); */
    const { title } = data;
    navigate(`/search/${title}`);
    reset();
  }
  return (
    <>
      <Nav>
        <form onSubmit={handleSubmit(onSearch)}>
          {/* <form onSubmit={onSearch}> */}
          <InputSpace>
            <button type="submit">
              <i className="bi bi-search"></i>
            </button>
            <input
              {...register("title")}
              type="text"
              placeholder="pesquise por um título"
            />
          </InputSpace>
        </form>
        <Link to="/"> 
          <ImageLogo src={logo} alt="Logo Breaking News" />
        </Link>
        <Button>Entrar</Button>
      </Nav>
      <Outlet />
    </>
  );
}

export default NavBar;
