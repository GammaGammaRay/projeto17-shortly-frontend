import React, { useState } from "react"
import { styled } from "styled-components"
import { ContentContainer } from "../style/PageContainer"
import { signUp } from "../services/api.js"
import ShortlyLogo from "../components/ShortlyLogo.component"

function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleNewUserRegistration = (e) => {
    e.preventDefault();

    function registerSuccess() {
      console.log(formData);
      navigate("/");
    }

    function registerFailure() {}

    api.userRegister(formData, registerSuccess, registerFailure);
  };

  return (
    <ContentContainer>
      <ShortlyLogo />
      <UserRegistrationForm>
      <form onSubmit={handleNewUserRegistration}>
        <input
          placeholder="Nome"
          type="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          placeholder="E-mail"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          placeholder="Senha"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          placeholder="Confirmar senha"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        <button type="submit">Cadastrar</button>
      </form>
      </UserRegistrationForm>
    </ContentContainer>
)
}

const UserRegistrationForm = styled.div`
  width: 80%;

  input {
    font-weight: 200;
    letter-spacing: 0.025em;
    ::placeholder {
      font-weight: 100;
      font-style: italic;
      color: #999999b2;
    }
  }
  button {
    font-weight: 400;
    letter-spacing: 0.1em;
  }
`

export default Signup
