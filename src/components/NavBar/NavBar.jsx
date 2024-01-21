import React from "react";
import logo from "../../images/LogoBN.png";
import { ErrorSpam, ImageLogo, InputSpace, Nav } from "./NavBarStyled";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../Button/Button";

function NavBar() {
  const searchSchema = z.object({
    title: z
      .string()
      .nonempty({ message: "search must be non empty" })
      .refine((value) => !/^\s*$/.test(value), {
        message: "invalid search submission",
      }),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(searchSchema),
  });
  const navigate = useNavigate();

  function onSearch(data) {
    /* console.log(data); */
    const { title } = data;
    navigate(`/search/${title}`);
    reset();
  }

  /*  function goAuth() {
    navigate("/auth");
  } */

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
        <Link to="/auth">
          <Button type="button" text="Entrar">
            Entrar
          </Button>
        </Link>
      </Nav>
      {errors.title && <ErrorSpam>{errors.title.message}</ErrorSpam>}
      <Outlet />
    </>
  );
}

export default NavBar;
