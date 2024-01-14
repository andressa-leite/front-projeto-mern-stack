import React from "react";
import logo from "../../images/LogoBN.png";
import { Button, ImageLogo, InputSpace, Nav } from "./NavBarStyled";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { z } from zod;
import { zodResolver } from "ghookform/resolvers/zod"

function NavBar() {
  const { register, handleSubmit, reset, formState: { errors} } = useForm({
    resolver: zodResolver(searchSchema)
  });
  const navigate = useNavigate();

  const searchSchema = z.object({
    title: z.string().nonempty({ message: "search must be non empty"}).refine((value => !/^\s*$/.test(value)), {message:"invalid search submission"})
  });

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
      {errors.title && <ErrorSpam>{errors.title.message}</ErrorSpam>}
      <Outlet />
    </>
  );
}

export default NavBar;
