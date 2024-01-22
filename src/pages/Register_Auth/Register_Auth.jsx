import React from "react";
import { Register_Auth_Container, Section } from "./Register_Auth_Styled";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/input/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

function Register_Auth() {
  const {
    register: registerSignup,
    handleSubmit: handleSubmitSignup,
    formState: { errors: errorsSignup },
  } = useForm();

  const {
    register: registerSignin,
    handleSubmit: handleSubmitSignin,
    formState: { errors: errorsSignin },
  } = useForm();

  function inHandleSubmit(data) {
    console.log(data);
  }

  function upHandleSubmit(data) {
    console.log(data);
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
          <Input
            type="password"
            placeholder="password"
            name="password"
            register={registerSignin}
            rule={{ required: true }}
          />
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
          <Input
            type="email"
            placeholder="Email"
            name="email"
            register={registerSignup}
            rule={{ required: true }}
          />
          <Input
            type="password"
            placeholder="Password"
            name="password"
            register={registerSignup}
            rule={{ required: true }}
          />
          <Input
            type="password"
            placeholder="Confirm password"
            name="password"
            register={registerSignup}
            rule={{ required: true }}
          />
          <Button type="submit" text="Cadastrar" />
        </form>
      </Section>
    </Register_Auth_Container>
  );
}

export default Register_Auth;
