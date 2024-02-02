import React from "react";
import { Register_Auth_Container, Section } from "./Register_Auth_Styled";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/input/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signinSchema } from "../../schemas/signinSchema";
import { signupSchema } from "../../schemas/signupSchema";
import { ErrorSpan } from "../../components/NavBar/NavBarStyled";
import { signup } from "../../services/userService";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function Register_Auth() {
  const {
    register: registerSignup,
    handleSubmit: handleSubmitSignup,
    formState: { errors: errorsSignup },
  } = useForm({ resolver: zodResolver(signupSchema) });

  const {
    register: registerSignin,
    handleSubmit: handleSubmitSignin,
    formState: { errors: errorsSignin },
  } = useForm({ resolver: zodResolver(signinSchema) });

  async function inHandleSubmit(data) {
    try {
      const response = await signup(data);
      Cookies.set("token", response.data.token, { expires: 1 });
      navigate("/");
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  const navigate = useNavigate();

  async function upHandleSubmit(data) {
    try {
      const response = await signup(data);
      Cookies.set("data", response.data, { expires: 1 });
      navigate("/");
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Register_Auth_Container>
      <Section type="signin">
        <h2>Entrar</h2>
        <form onSubmit={handleSubmitSignin(inHandleSubmit)}>
          <Input
            type="email"
            placeholder="Email"
            name="email"
            register={registerSignin}
            rule={{ required: true }}
          />
          {errorsSignin.email && (
            <ErrorSpan>{errorsSignin.email.message}</ErrorSpan>
          )}
          <Input
            type="password"
            placeholder="password"
            name="password"
            register={registerSignin}
            rule={{ required: true }}
          />
          {errorsSignin.password && (
            <ErrorSpan>{errorsSignin.password.message}</ErrorSpan>
          )}
          <Button type="submit" text="Entrar" />
        </form>
      </Section>
      <Section type="signup">
        <h2>Cadastrar</h2>
        <form onSubmit={handleSubmitSignup(upHandleSubmit)}>
          <Input
            type="name"
            placeholder="Name"
            name="name"
            register={registerSignup}
            rule={{ required: true }}
          />
          {errorsSignup.name && (
            <ErrorSpan>{errorsSignup.name.message}</ErrorSpan>
          )}
          <Input
            type="email"
            placeholder="Email"
            name="email"
            register={registerSignup}
            rule={{ required: true }}
          />
          {errorsSignup.email && (
            <ErrorSpan>{errorsSignup.email.message}</ErrorSpan>
          )}
          <Input
            type="password"
            placeholder="Password"
            name="password"
            register={registerSignup}
            rule={{ required: true }}
          />
          {errorsSignup.password && (
            <ErrorSpan>{errorsSignup.password.message}</ErrorSpan>
          )}
          <Input
            type="password"
            placeholder="Confirm password"
            name="confirmPassword"
            register={registerSignup}
            rule={{ required: true }}
          />
          {errorsSignup.password && (
            <ErrorSpan>{errorsSignup.password.message}</ErrorSpan>
          )}
          <Button type="submit" text="Cadastrar" />
        </form>
      </Section>
    </Register_Auth_Container>
  );
}

export default Register_Auth;
