import React, { useContext } from "react"
import { styled } from "styled-components"
import { UserContext } from "../contexts/UserContext"
import { Link } from "react-router-dom"
import { signOut } from "../services/api"

function Nav() {
  const { auth, userSignIn } = useContext(UserContext)
  return (
    <NavContainer>
      <NavLeft />
      <NavRight>
        <StyledLink to={"/login"}>Entrar</StyledLink>
        <StyledLink to={"/signup"}>Cadastrar</StyledLink>
      </NavRight>
    </NavContainer>
  )
  // if(auth) {
  //   return (
  //     <NavContainer>
  //       <NavLeft>
  //         Olá, `${}`
  //       </NavLeft>
  //       <NavRight>

  //       </NavRight>
  //     </NavContainer>)
  //   }
  // else {
  //   return (
  //   <NavContainer>
  //     <NavRight>
  //       <Link to={'/signin'}>Entrar</Link>
  //       <Link to={'/signup'}>Cadastrar</Link>
  //     </NavRight>
  //   </NavContainer>)
  // }
}

const NavContainer = styled.div`
  width: 100%;
  height: 40px;
  top: 0px;
  left: 0px;

  position: absolute;
  z-index: 5;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const NavLeft = styled.div`
  width: fit-content;
  left: 0;
  flex-direction: row;
  justify-content: start;
`
const NavRight = styled.div`
  width: fit-content;
  height: 100%;
  right: 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  a {
    font-weight: 300;
    width: fit-content;
    margin-left: 10px;
    color: black;
  }
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 5px 10px; /* Reset the padding to adjust as needed */
  display: flex; /* Reset the display to fix the overflow */
  align-items: center; /* Vertically center the link content */
`
export default Nav
