import React from "react";
import { Register_Auth_Container, Section } from "./Register_Auth_Styled";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/input/input";


function Register_Auth() {


  return (
    <Register_Auth_Container>
      <Section type="signin">
        <h2>Entrar</h2>
        <form>
          <Input type="email" placeholder="Email" name="email" />
          <Input type="password" placeholder="password" name="password" />
          <Button type="submit" text="Entrar" />
        </form>
      </Section>
      <Section type="signup">
        <h2>Cadastrar</h2>
        <form>
          <Input type="name" placeholder="Name" name="name" />
          <Input type="email" placeholder="Email" name="email" />
          <Input type="password" placeholder="Password" name="password" />
          <Input type="password" placeholder="Confirm password" name="password" />
          <Button type="submit" text="Cadastrar" />
        </form>
      </Section>
    </Register_Auth_Container>
  );
}

export default Register_Auth;
